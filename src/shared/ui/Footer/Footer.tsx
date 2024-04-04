import s from './Footer.module.scss';
import { ReactComponent as InstagramSVG } from 'src/shared/assets/svg/social/instagram.svg';
import { ReactComponent as PinterestSVG } from 'src/shared/assets/svg/social/pinterest.svg';
import { ReactComponent as FacebookSVG } from 'src/shared/assets/svg/social/facebook.svg';
import { IconButton } from 'src/shared/ui/_buttons/IconButton/IconButton';

export const Footer = () => {
	return (
		<div className={s.container}>
			<div className={s.info}>
				<h2 className={s.title}>Pottery</h2>
				<p>“Clay is a very interesting and fundamental material – it’s earth, it’s water and — with fire – it takes on form and life”.</p>
			</div>

			<div className={s.navigation}>
				<div className={s.column}>
					<span>Catalog</span>
					<span>Home</span>
					<span>Work</span>
					<span>Kitchen</span>
					<span>Interior</span>
				</div>

				<div className={s.column}>
					<span>About us</span>
					<span>History</span>
					<span>Blog</span>
				</div>

				<div className={s.column}>
					<span>Contacts</span>
				</div>

				<div className={s.column}>
					<span>Join us!</span>
					<div className={s.social}>
						<IconButton Icon={<InstagramSVG />} />
						<IconButton Icon={<PinterestSVG />} />
						<IconButton Icon={<FacebookSVG />} />
					</div>
				</div>
			</div>
		</div>
	);
};
