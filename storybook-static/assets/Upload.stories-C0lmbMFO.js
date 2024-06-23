import{D as l}from"./DropzoneInput-DeqTBfUi.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DAKRX08i.js";import"./index-CTjT7uj6.js";import"./index-9r8iugjR.js";import"./index-BRV0Se7Z.js";const p={title:"Component/Upload",component:l,tags:["autodocs"],argTypes:{accept:{control:"text"},helperText:{control:"text"},id:{control:"text"},label:{control:"text"},maxFiles:{control:"number"},readOnly:{control:"boolean"},hideError:{control:"boolean"},validation:{control:"object"},required:{control:"boolean"},customError:{control:"text"}}},e={args:{helperText:"You can upload file with .png, .jpg, atau .jpeg extension.",label:"Label",maxFiles:1,readOnly:!1,required:!1,hideError:!1,customError:"Image Is Required",validation:n=>n.length>1?"Only one file is allowed":null,id:""}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    helperText: "You can upload file with .png, .jpg, atau .jpeg extension.",
    label: "Label",
    maxFiles: 1,
    readOnly: false,
    required: false,
    hideError: false,
    customError: "Image Is Required",
    validation: (files: FileWithPreview[]) => {
      if (files.length > 1) {
        return "Only one file is allowed";
      }
      return null;
    },
    id: ""
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
