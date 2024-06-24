/* eslint-disable no-mixed-spaces-and-tabs */
import { ExternalLink, Eye, Image as ImageIcon, Paperclip } from "lucide-react";
import { X } from "lucide-react";
import * as React from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

import "yet-another-react-lightbox/styles.css";

import { FileWithPreview } from "../../libs/dropzone";
import UnstyledLink from "../Link/UnstyledLink";
import { DownloadCallbackProps } from "yet-another-react-lightbox";

type FilePreviewProps = {
  file: FileWithPreview;
} & (
  | {
      deleteFile?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        file: FileWithPreview
      ) => void;
      readOnly?: true;
      // eslint-disable-next-line no-mixed-spaces-and-tabs
    }
  | {
      deleteFile: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        file: FileWithPreview
      ) => void;
      readOnly?: false;
    }
);

export default function FilePreview({
  deleteFile,
  file,
  readOnly,
}: FilePreviewProps): React.ReactElement {
  // const [index, setIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const images: SlideImage[] = [
    {
      src: file.preview,
      imageFit: "cover",
      alt: file.name,
    },
  ];
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteFile?.(e, file);
  };

  const imagesType = ["image/png", "image/jpg", "image/jpeg"];

  return imagesType.includes(file.type) ? (
    <>
      <li
        className='flex min-h-[2.25rem] items-center justify-between py-0 pl-3 pr-4 text-sm md:min-h-[2.5rem]'
        key={file.name}
      >
        <div className='flex w-0 flex-1 items-center'>
          <ImageIcon
            className='h-5 w-5 flex-shrink-0 text-gray-400'
            aria-hidden='true'
          />
          <span className='ml-2 w-0 flex-1 truncate'>{file.name}</span>
        </div>
        <div className='ml-4 flex flex-shrink-0 items-center space-x-2'>
          <button
            type='button'
            onClick={() => setIsOpen(true)}
            className='inline-block rounded text-xl font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-primary-500'
          >
            <Eye />
          </button>
          {!readOnly && (
            <button
              type='button'
              onClick={handleDelete}
              className='rounded text-xl font-medium text-red-500 hover:text-red-700 focus:outline-none focus:ring focus:ring-red-500'
            >
              <X />
            </button>
          )}
        </div>
      </li>
      {isOpen && (
        <Lightbox
          open={isOpen}
          render={{
            buttonPrev: images.length <= 1 ? () => null : undefined,
            buttonNext: images.length <= 1 ? () => null : undefined,
          }}
          close={() => setIsOpen(false)}
          slides={images}
          plugins={[Zoom, Download]}
          on={{
            download: (props: DownloadCallbackProps) => {
              const link = document.createElement("a");
              link.href = props.index.toString();
              link.download = props.index.toString();
              link.click();
            },
          }}
        />
      )}
    </>
  ) : (
    <li
      key={file.name}
      className='flex min-h-[2.25rem] items-center justify-between py-0 pl-3 pr-4 text-sm md:min-h-[2.5rem]'
    >
      <div className='flex w-0 flex-1 items-center'>
        <Paperclip
          className='h-5 w-5 flex-shrink-0 text-gray-400'
          aria-hidden='true'
        />
        <span className='ml-2 w-0 flex-1 truncate'>{file.name}</span>
      </div>
      <div className='ml-4 flex flex-shrink-0 items-center space-x-2'>
        <UnstyledLink
          href={file.preview}
          className='rounded text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-primary-500'
        >
          <ExternalLink size={20} />
        </UnstyledLink>
        {!readOnly && (
          <button
            className='cursor-pointer rounded text-red-500 hover:text-red-700 focus:outline-none focus:ring focus:ring-red-500'
            type='button'
            onClick={(e) => deleteFile?.(e, file)}
          >
            <X size={24} />
          </button>
        )}
      </div>
    </li>
  );
}
