import { BsInstagram,BsFacebook,BsLinkedin,BsGithub, }from 'react-icons/bs';

const Contact = () => {

    const contact_info=[
        {logo:<BsFacebook />,text:'blavierkula57@gmail.com'},
        {logo:<BsFacebook />,text:'+243898550112'},
        {logo:<BsFacebook />,text:'Bosenge n°13/kinshasa'},

    ]
    return ( 
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">Contact</h3>
                <p className="text-gray-400 mt-3 text-lg max-w-4xl mx-auto">Vous avez un problème à résoudre ? intéressé à collaborer
                avec moi?  faites-moi part des vos idées pour développer l'application de vos rêves.</p>
            
                <div className="mt-10 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2
                rounded-lg mx-auto">
                    <form action="" className="flex flex-col flex-1 gap-3">
                            <input type="text" placeholder="Nom" />
                            <input type="text" placeholder="Email" />
                            <textarea placeholder="Ecrivez votre message" rows={5}></textarea>
                            <button className="mt-2 w-fit  py-1 px-4 font-semibold text-white md:mx-0 mx-auto rounded-full block bg-cyan-600">Envoyez</button>
                            
                    </form>
                    <div className="flex flex-col gap-3">
                       {
                         contact_info.map((contact,i)=>(
                            <div key={i} className="flex gap-4 w-fit items-center">
                            <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white
                            bg-cyan-600 rounded-full">
                            <span>{contact.logo}</span>
                            </div>
                            <p className='text-base'>{contact.text}</p>
                        </div> 
                         ))

                       }
                        
                        
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default Contact;