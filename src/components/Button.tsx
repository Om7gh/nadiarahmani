
import { Button } from './ui/button'

type Props = {
    title: string,
    link: string,
    className: string,
    icon: any
}

const ButtonHandler = ({ title, link, className, icon }: Props) => {
    return (
        <Button className={className}><a href={link} target='_blank' className='flex justify-center items-center gap-2'> <span>{icon}</span><span>{title}</span></a></Button>
    )
}

export default ButtonHandler