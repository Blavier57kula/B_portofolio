import React from 'react'
import { BsInstagram,BsFacebook,BsLinkedin,BsGithub }from 'react-icons/bs';
import { FaReact, FaWordpress } from 'react-icons/fa';
import { TbBrandTailwind,TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import  {  useTypewriter, Cursor }  from  'react-simple-typewriter';

interface Props{
  
}

const BannerLeft = () => {

    const  [ text ]  =  useTypewriter ( { 
        words : ['Développeur Front-End.' , 'UI/UX Design.' ] , 
        loop : true, 
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      } );


  return (
    <div className=' w-full  md:w-1/2 flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <h4 className='text-[13px] md:text-base font-normal uppercase'>Bienvenue dans mon univers</h4>
                <h1 className='text-[26px] md:text-5xl font-bold text-white'>Je Suis{" "} 
                    <span className='text-cyan-600 capitalize'>Blavier kula</span>
                </h1>
                <h2 className='text-[25px] md:text-4xl font-bold text-white'>
                    <span>{text}</span>
                    <Cursor
                        
                        cursorStyle="|"
                        cursorColor="#0891B2"
                    />
                </h2>
                <p className='text-base text-justify leading-6 '>{`
                   J\'aime coder des choses à partir de zéro et donner vie a des idées dans le navigateur,
                    je conçois des choses magnifiquement simples, et j\'adore ça.`}
                </p>
            </div>
        <div className='flex md:flex-row flex-col  md:justify-between py-3'>
            <div className='pb-3'>
                    <h3 className='text-base uppercase'>Trouvez - moi sur</h3>
                    <div className='pt-3 flex items-center gap-4'>
                        <span className='cardIcon'><BsFacebook className='text-gray-600  hover:text-white'/></span>
                        <span className='cardIcon'><BsInstagram className='text-gray-600  hover:text-white' /></span>
                        <span className='cardIcon'><BsLinkedin className='text-gray-600  hover:text-white'/></span>
                        <span className='cardIcon'><BsGithub className='text-gray-600  hover:text-white'/></span>
                    </div>
            </div>
            <div className='pb-3'>
                    <h3 className='text-base uppercase'>Meilleur Compétences</h3>
                    <div className='pt-3 flex items-center gap-4'>
                        <span className='cardIcon'><FaReact className='text-gray-600  hover:text-white'/></span>
                        <span className='cardIcon'><TbBrandNextjs className='text-gray-600  hover:text-white' /></span>
                        <span className='cardIcon'><TbBrandTailwind className='text-gray-600  hover:text-white'/></span>
                        <span className='cardIcon'><TbBrandJavascript className='text-gray-600  hover:text-white'/></span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BannerLeft;