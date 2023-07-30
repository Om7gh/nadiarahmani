import { Button } from './ui/button'
import { UserPlus } from 'lucide-react';


const CarteDeVisite = () => {
    const generateVcard = () => {
        const name = "Nadia Rahmani"
        const email = ' commition.com@gmail.com';
        const telephone = '0667159633';

        const vCardContent =
            `
        BEGIN:VCARD
        VERSION:3.0
        FN:${name}
        EMAIL:${email}
        TEL:${telephone}
        END:VCARD
        `
        const blob = new Blob([vCardContent], { type: 'text/vcard' })
        const vCardUrl = URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = vCardUrl;
        link.download = 'Nadia_Rahmani.vcf'; // vCard file name to be downloaded
        link.click();
    }
    return (
        <Button onClick={generateVcard}><UserPlus className='w-4 h-4 mr-2' /> Ajouter au contact</Button>
    )
}

export default CarteDeVisite