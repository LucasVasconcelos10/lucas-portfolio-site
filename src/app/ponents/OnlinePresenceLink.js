import Link from 'next/link';
import Image from 'next/image';

export default function OnlinePresenceLink({ opLink, opImgSrc, opImgAlt }) {
    return (
        <Link
            href={opLink}
            className='relative flex w-auto h-auto justify-items-center items-center'
            passHref={true}
        >
            <Image alt={opImgAlt} src={opImgSrc} width={25} height={25}/>
        </Link>
    )
}