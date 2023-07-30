import Image from "../assets/rachida.svg"
import BG from "../assets/R.jpg"

const Header = () => {
    return (
        <div className="w-screen max-w-full h-52 relative bg-slate-900">
            <img src={BG} alt="bacground" className='absolute top-0 left-0 h-full w-full opacity-20 -z-0' />
            <div className="absolute md:w-1/6 w-[40%] left-1/2 -bottom-0 translate-y-1/2 -translate-x-1/2">
                <img src={Image} alt='avatar' className='w-fit rounded-full border-8' />
            </div>
            <div className="flex justify-around items-center text-white md:text-5xl text-3xl h-full">
                <h2>Nadia</h2>
                <h2>Rahmani</h2>

            </div>
        </div>
    )
}

export default Header