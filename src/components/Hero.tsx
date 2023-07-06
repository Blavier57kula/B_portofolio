import { BsInstagram,BsFacebook,BsLinkedin,BsGithub }from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { TbBrandTailwind,TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import RightBanner from './RightBanner';
import BannerLeft from './BannerLeft';
const Hero = () => {
    return ( 
        <section id="home"className="pt-20 pb-10 mx-20 w-full flex md:flex-row flex-col">
           <BannerLeft/>
           <RightBanner/>
        </section>
     );
}
 
export default Hero;