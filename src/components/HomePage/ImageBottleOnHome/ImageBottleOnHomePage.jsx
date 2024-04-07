import  {ImageBottle} from './ImageBottleOnHome.styled'

import bottleMob1x from '../../../Images/home-bottles/Mobile-Bottle-home-screen@1x.png';
import bottleMob2x from '../../../Images/home-bottles/Mobile-Bottle-home-screen@2x.png';

import bottleTablet1x from '../../../Images/home-bottles/Tablet-Bottle-Home-Screen@1x.png';
import bottleTablet2x from '../../../Images/home-bottles/Tablet-Bottle-Home-Screen@2x.png';

import bottleDesk1x from '../../../Images/home-bottles/Desk-Botle-Home-screen@1x.png';
import bottleDesk2x from '../../../Images/home-bottles/Desk-Botle-Home-screen@2x.png';

export const ImageOfBottle = () => {
    return (
        <ImageBottle>
            <img 
                srcSet={`${bottleMob1x} 1x, ${bottleMob2x} 2x, 
                         ${bottleTablet1x} 1x, ${bottleTablet2x} 2x, 
                         ${bottleDesk1x} 1x, ${bottleDesk2x} 2x`}
                src={bottleMob1x}
                alt="bottle"
            />
        </ImageBottle>
    );
}

export default ImageOfBottle;
