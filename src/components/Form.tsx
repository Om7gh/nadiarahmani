import { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_s088crs', 'template_fkjnkgq', form.current, 'decwMAREao58vR-uX')
                .then(
                    (result: EmailJSResponseStatus) => {
                        console.log(result.text);
                        toast.success('Merci , Votre message et bien envoyer !', {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 3000, // Duration in milliseconds (e.g., 3000 = 3 seconds)
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    },
                    (error) => {
                        console.log(error.text);
                        toast.error('Votre message est mal envoyer essayer de renvoyer en quelque second !', {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 3000, // Duration in milliseconds (e.g., 3000 = 3 seconds)
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    }
                );
        }
    };

    return (
        <>
            <ToastContainer />
            <form ref={form} onSubmit={sendEmail} className='flex flex-col m-auto md:w-1/3 w-[80%] items-center mt-10 shadow-sm shadow-slate-500 justify-center gap-3 p-3 mb-10 rounded-md
        '>
                <h2 className='text-lg text-slate-900 font-semibold mb-5 w-[80%] text-center md:w-[60%]'>N'hésitez pas à me contacter directement via Gmail.</h2>
                <div className='flex flex-col gap-2 '>
                    <label className='text-sm text-foreground font-normal'>Name</label>
                    <input type="text" className='w-[250px] border rounded-md focus:border-b-2 focus:border-b-blue-950 focus:outline-none px-2 py-1 border-slate-300' name="to_name" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-foreground font-normal'>Email</label>
                    <input type="email" className='w-[250px] border rounded-md focus:border-b-2 focus:border-b-blue-950 focus:outline-none px-2 py-1 border-slate-300' name="from_name" required />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label className='text-sm text-foreground font-normal'>Message</label>
                    <textarea name="message" className='w-[250px] border rounded-md focus:border-b-2 focus:border-b-blue-950 focus:outline-none px-2 py-1 border-slate-300' cols={16} rows={3} required />
                </div>

                <input type="submit" value="envoyer" className='bg-slate-800 w-[250px] hover:bg-slate-900 transition-all duration-200 text-white py-1 px-2 rounded-md cursor-pointer' />
            </form>
        </>

    );
};

export default Form;
