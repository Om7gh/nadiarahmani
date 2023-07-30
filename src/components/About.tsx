

const About = () => {
    return (
        <div className='md:w-1/2 flex flex-col gap-4 md:mt-28 mb-12 mt-20 mx-auto w-[85%]'>
            <h2 className='text-2xl font-semibold text-center text-slate-900'>A Propos :</h2>
            <ul className=' w-[80%] md:w-[65%] m-auto list-disc md:list-disc  flex flex-col items-left '>
                <li className='text-foreground md:text-md text-md'>Chef de service de supervision des établissements du préscolaire et des établissements scolaire privé.</li>
                <li className='text-foreground md:text-md text-md'>Vice Présidente du Conseil de la Région Rabat Salé Kénitra.</li>
                <li className='text-foreground md:text-md text-md'>Présidente du Directoire du Parc Industriel Ain Jouhra.</li>
            </ul>
        </div>
    )
}

export default About