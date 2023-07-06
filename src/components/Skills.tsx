import { AiFillHtml5, } from 'react-icons/ai';
import { FaCss3Alt, FaWordpress, } from 'react-icons/fa';
import { SiBootstrap,  } from 'react-icons/si';
import { TbBrandTailwind,TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
const Skills = () => {

    const competences =[
        {
            logo:<AiFillHtml5 />,
            level:"Avancé",
            count:"86",
        },
        {
            logo:<FaCss3Alt />,
            level:"Avancé",
            count:"86",
        },
        {
            logo:<SiBootstrap />,
            level:"Intermediaire",
            count:"80",
        },
        {
            logo:<TbBrandTailwind />,
            level:"Intermediaire",
            count:"86",
        },
        {
            logo:<TbBrandJavascript />,
            level:"Intermediaire",
            count:"86",
        },
        {
            logo:< FaReact />,
            level:"Intermediaire",
            count:"86",
        },
        {
            logo:<TbBrandNextjs />,
            level:"Intermediaire",
            count:"86",
        },
        {
            logo:<FaWordpress />,
            level:"Intermediaire",
            count:"86",
        },

    ]
    return ( 
        <section id="competence" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-center text-gray-100">
                <h3 className="text-4xl font-semibold capitalize">mes <span className="text-cyan-600">
                    compétences</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg max-w-4xl mx-auto">Découvrez mes compétences, elles sont en constantes ameliorations
                car pour moi la joie de ce métier fait que l'on apprend tous les jours,d'autant plus en étant impliqué,curieux et passionné.</p>
                <div className="flex max-w-6xl mx-auto items-center justify-center mt-12 gap-8 flex-wrap">
                   
                        {
                            competences ?.map((competence,i)=>(

                                <div key={i} className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem]
                                bg-gray-900 p-10 rounded-xl group">
                                   <div style={{
                                       background:`conic-gradient(rgb(8,145,170) ${competence.count}%, #ddd ${competence.count}%)`,
                                   }} className="w-32 h-32 flex items-center justify-center rounded-full">
                                       <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
                                           { competence.logo}
                                       </div>
                                   </div>
                                       <p className="text-xl mt-3">{competence.level}</p>
                               </div>
                            ))
                        }
                </div>
            </div>
        </section>
     );
}
 
export default Skills;