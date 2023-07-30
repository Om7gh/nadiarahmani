import ReactWhatsapp from "react-whatsapp"
import { Button } from "./ui/button"
import { FaWhatsapp } from "react-icons/fa"
const GoToWhatssap = () => {
    return (
        <Button className="m-auto bg-green-900 w-full text-[1rem] flex justify-center gap-2">
            <FaWhatsapp className="w-4 h-4" />
            <ReactWhatsapp
                className="md:text-[1rem]"
                element="button"
                number="+2120667159633"
                message="Bonjour !"
            >
                +212 0667159633
            </ReactWhatsapp>
        </Button>

    )
}

export default GoToWhatssap