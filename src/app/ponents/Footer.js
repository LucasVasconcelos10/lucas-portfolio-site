import OnlinePresenceLink from "./OnlinePresenceLink";

export default function Footer() {
    return (
        <div id="site-footer" className='absolute flex gap-x-10 w-full justify-center pb-3'>
            <OnlinePresenceLink opLink='https://www.linkedin.com/in/lucas-quezado-vasconcelos/' opImgSrc='/logos/LI-In-Bug.png' opImgAlt='LinkedIn Logo' />
            <OnlinePresenceLink opLink='https://github.com/LucasVasconcelos10' opImgSrc='/logos/github-mark-white.png' opImgAlt='GitHub Logo' />
        </div>
    )
}