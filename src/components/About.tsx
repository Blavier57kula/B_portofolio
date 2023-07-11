import Image from "next/image";
import Imgprofile from '../../public/assets/blvk.png';

const About = () => {

        const info=[
            {text:"Années d'expérience",count:3},
            {text:"Projets complètes",count:5},
            {text:"Compagnies travaillé",count:2},
        ]

    return ( 
        <section id="about" className="py-10 text-white">
                <div className="text-center mt-8">
                    <h3 className="text-4xl font-semibold">Apropos</h3>
                    <p className="text-gray-400 mt-3 py-3 text-lg">Mon introduction</p>
                    <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                        <div className="p-2">
                            <div className="text-gray-300 my-3">
                                <p className="text-justify text-base leading-6 w-11/12 mx-auto">{`
                                    Je suis  Blavier kula, un web developeur passionné qui vous apporte la programmation et le design
                                    du futur. Mon expertise est le développement des sites Web et d\'application Web de niveau supérieur, y compris
                                    la conception frontale complete.`}
                                </p>

                                <div className="md:mt-3 sm:px-5 flex items-center mt-6 gap-7" >
                                {
                                    info.map((content)=>(
                                    <div key={content.text} >
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count} 
                                            <span className="text-cyan-600">+</span> {" "}
                                        </h3>
                                        <span className=" text-base ">{content.text}</span>
                                    </div> 
                                    ))
                                }
                                
                                </div>
                                <a href="../../public/assets/CURRICULUM BLAVIER.pdf" download>
                                    <button className="mt-7  py-2 px-6 font-semibold text-white md:mx-0 mx-auto rounded-full block bg-cyan-600"> 
                                    Telecharger CV
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="lg:w-96 md:w-96 h-full sm:w-10/12 w-11/12 max-w-sm AboutImg">
                                <Image src={Imgprofile} alt="imgAbaout" className="h-full object-cover bg-cyan-600 rounded-xl" />
                                
                            </div>
                        </div>
                    </div>
                </div>
        </section>
     );
}
 
export default About;