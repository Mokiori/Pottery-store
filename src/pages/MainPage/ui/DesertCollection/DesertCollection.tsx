import s from './DesertCollection.module.scss';
import imageLarge from 'src/shared/assets/img/main-page/desert-collection-large.jpg';
import imageSmall from 'src/shared/assets/img/main-page/desert-collection-small.jpg';
import { TextButton } from 'src/shared/ui/_buttons/TextButton/TextButton';

export const DesertCollection = () => {
	return (
		<div className={s.container}>
			<img
				src={imageLarge}
				alt="desert-collection-main"
			/>

			<div className={s.right_wrapper}>
				<h2 className={s.title}>Desert collection</h2>

				<div className={s.image}>
					<img
						src={imageSmall}
						alt="desert-collection"
					/>
				</div>
				<TextButton icon>Watch more </TextButton>
			</div>
		</div>
	);
};
