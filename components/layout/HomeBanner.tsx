import { HomeBannerProps } from '../../types/components';
import ImageContainer from '../ImageContainer';
import Button from '../Button';
const HomeBanner = ({ data }: HomeBannerProps) => {
    const { buttonText, buttonUrl, title, backgroundImage } = data;
    const fullImageUrl = backgroundImage ? `https://rifa-club-strapi-develop.onrender.com${backgroundImage}` : '';
    return (
    <section className="relative h-[100vh] bg-black bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${fullImageUrl})` }}>
        <div className="absolute inset-0 flex items-center">
            <div className="flex flex-col items-center w-1/3 p-8 ml-[10%]">
                <h2 className="text-white text-3xl mb-10 text-center">{title}</h2>
                <Button children={buttonText} href={buttonUrl} size='lg'/>
            </div>
        </div>
    </section>
    );
};
HomeBanner.defaultProps = {};
export default HomeBanner;