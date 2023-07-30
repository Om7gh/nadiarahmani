import { FaFacebookF } from "react-icons/fa"
import { ButtonHandler, GoToWhatssap } from "."
import { MdAlternateEmail } from "react-icons/md"
import CarteDeVisite from "./VCard"


type Props = {}

const Contact = () => {
    return (
        <div className='md:w-1/3 flex flex-col gap-4  mx-auto w-[80%]'>
            <ButtonHandler link="https://web.facebook.com/rahmaninadou?mibextid=ZbWKwL&_rdc=1&_rdr" icon={<FaFacebookF />} title="Facebook" className="bg-blue-700 text-white md:text-[1rem]" />
            <ButtonHandler link="mailto:commition.com@gmail.com" icon={<MdAlternateEmail />} title="commition.com@gmail.com" className="bg-orange-500 text-white md:text-[1rem]" />
            <GoToWhatssap />
            <CarteDeVisite />
        </div>
    )
}

export default Contact