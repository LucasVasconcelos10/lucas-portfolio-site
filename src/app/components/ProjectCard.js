import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ projectLink, cardImgSrc, cardImgAlt }) {
    return (
        <Link
            href={projectLink}
            className='relative flex w-1/2 h-full justify-center items-center border-2 border-purple-700 rounded-md bg-white transform transition-all duration-300 ease-in-out hover:border-green-700 hover:scale-110'
            passHref={true}
        >
            <Image alt={cardImgAlt} src={cardImgSrc} width={100} height={100} className='w-full h-full' style={{ 'height': 'auto', 'width': 'auto' }} />
        </Link>
    )
}