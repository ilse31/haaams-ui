import * as React from 'react';
import SimpleCard from './Card';
import Text from '../Typhography/Text';
import clsxm from '../../libs/clsx';

// import clsxm from '@/lib/clsxm';

// import SimpleCard from '@/components/cards/SimpleCard';
// import Typography from '@/components/typography/Typography';

type DevelopmentCardProps = React.ComponentPropsWithoutRef<'div'> & {
	HeaderCard?: string;
};

export default function DevelopmentCard({
	className,
	children,
	HeaderCard,
	...rest
}: DevelopmentCardProps) {
	const shouldShow = true || process.env.NODE_ENV !== 'production';

	return shouldShow ? (
		<SimpleCard
			className={clsxm([
				'border-2 border-dashed border-secondary-500 bg-secondary-50',
				'pt-2',
				className,
			])}
			size='sm'
			{...rest}>
			<Text
				className='mb-2 text-center text-secondary-700'
				variant='c1'>
				{HeaderCard || 'Development Card'}
			</Text>
			{children}
		</SimpleCard>
	) : null;
}
