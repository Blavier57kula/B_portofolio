import {Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image';
import projet1 from '../../public/assets/projet-1.jpg';
import projet2 from '../../public/assets/projet-2.jpg';
import projet3 from '../../public/assets/projet-3.jpg';
import projet4 from '../../public/assets/projet-4.jpg';
import projet5 from '../../public/assets/projet-5.jpg';
import Personne from '../../public/assets/blvk.png';
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay} from 'swiper';
const Project = () => {
    const projets=[
        {img:projet1, name:'Bell fresh', Github_link:"https://github.com",live_link:"https://google.com"},
        {img:projet2, name:'Bk food', Github_link:"https://github.com",live_link:"https://google.com"},
        {img:projet3, name:'Bk shop', Github_link:"https://github.com",live_link:"https://google.com"},
        {img:projet4, name:'Bk Agency', Github_link:"https://github.com",live_link:"https://google.com"},
        {img:projet5, name:'Bk tech', Github_link:"https://github.com",live_link:"https://google.com"},
    ]
    return ( 
    <section id="projet" className="py-10 text-white">
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
               Mes <span className="text-cyan-600"> Projets</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg px-10 max-w-4xl mx-auto "> Venez découvrir mes projets, ci-dessous,vous verez quelques exemples
            des mes realisations effectuées durant ma formations, stage et plus encore.</p>
        </div>
        <br/>
        <div className="flex maw-w-6xl px-5 mx-auto items-center relative">
            <div className="lg:w-2/3 w-full">
                <Swiper slidesPerView={1.2} spaceBetween={20}
                 breakpoints={{
                    768:{
                    slidesPerView: 2, 
                },}}
                 loop={true}
                autoplay={{delay:3000,}}
                pagination={{clickable:true,}}
                modules={[Pagination, Autoplay]}
                >
                   {
                    projets ?.map((projet,i)=>(
                       <SwiperSlide key={i}> 
                     <div  className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                         <Image src={projet.img} alt="projet-1" className="rounded-lg h-70 w-full"/>
                         <h3 className="text-xl my-4">{projet.name}</h3>
                         <div className="flex gap-3 ">
                             <a href={projet.Github_link} className="text-cyan-600 bg-gray-800 py-1 px-2 rounded-full inline-block" target="_blank">Github</a>
                             <a href={projet.live_link} className="text-cyan-600 bg-gray-800 py-1 px-2 rounded-full inline-block" target="_blank">Voir demo</a>

                         </div>
                     </div> 
                       </SwiperSlide>
                    ))
                     
                   }
                </Swiper >
            </div>
            <div className="lg:block hidden">
                <Image src={Personne} alt="Personne"/>
            </div>
        </div>
    </section> 
    
    
    );
}
 
export default Project;