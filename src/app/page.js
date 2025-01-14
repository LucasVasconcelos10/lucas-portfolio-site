import Link from 'next/link';
import Image from 'next/image';
export default function HomePage() {
  return (
    <>
      <section id="Home" className="h-fit w-full grid grid-cols-3 justify-items-center items-center mb-10">
        <Link
          href="https://www.linkedin.com/in/lucas-quezado-vasconcelos/"
          className='relative flex w-32 h-32 justify-items-center items-center m-10 transform transition-all duration-300 ease-in-out hover:scale-110'
          passHref={true}
        >
          <Image alt="LinkedIn Logo" src="/logos/LI-In-Bug.png" width={100} height={100} className='w-full h-full' />
        </Link>
        <Link
          href="https://github.com/LucasVasconcelos10/photography-salesman"
          className='relative flex w-32 h-32 justify-items-center items-center m-10 transform transition-all duration-300 ease-in-out hover:scale-110'
          passHref={true}
        >
          <Image alt="GitHub Logo" src="/logos/github-mark-white.png" width={100} height={100} className='w-full h-full' />
        </Link>
        <Link
          href="https://github.com/LucasVasconcelos10/photography-salesman"
          className='relative flex w-32 h-32 justify-items-center items-center m-10 transform transition-all duration-300 ease-in-out hover:scale-110'
          passHref={true}
        >
          <Image alt="GitHub Logo" src="/logos/github-mark-white.png" width={100} height={100} className='w-full h-full' />
        </Link>
      </section>
      <section id="Projects" className='w-full h-auto grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-5 justify-items-center items-center'>
        <Link
          href="https://github.com/LucasVasconcelos10/photography-salesman"
          className='relative flex w-1/2 h-full justify-center items-center transform transition-all duration-300 ease-in-out hover:border-green-700 hover:w-full border-2 border-purple-700 rounded-md'
          passHref={true}
        >
          <Image alt="GitHub Logo" src="/logos/github-mark.png" width={100} height={100} className='w-full h-full' style={{'height':'auto', 'width':'auto'}}/>
        </Link>
        <Link
          href="https://github.com/LucasVasconcelos10/photography-salesman"
          className='relative flex w-1/2 h-full justify-center items-center transform transition-all duration-300 ease-in-out hover:border-green-700 hover:w-full border-2 border-purple-700 rounded-md'
          passHref={true}
        >
          <Image alt="GitHub Logo" src="/logos/github-mark.png" width={100} height={100} className='w-full h-full' style={{'height':'auto', 'width':'auto'}}/>
        </Link>
        <Link
          href="https://github.com/LucasVasconcelos10/photography-salesman"
          className='relative flex w-1/2 h-full justify-center items-center transform transition-all duration-300 ease-in-out hover:border-green-700 hover:w-full border-2 border-purple-700 rounded-md'
          passHref={true}
        >
          <Image alt="GitHub Logo" src="/logos/github-mark.png" width={100} height={100} className='w-full h-full' style={{'height':'auto', 'width':'auto'}}/>
        </Link>
        <Link
          href="https://github.com/LucasVasconcelos10/photography-salesman"
          className='relative flex w-1/2 h-full justify-center items-center transform transition-all duration-300 ease-in-out hover:border-green-700 hover:w-full border-2 border-purple-700 rounded-md'
          passHref={true}
        >
          <Image alt="GitHub Logo" src="/logos/github-mark.png" width={100} height={100} className='w-full h-full' style={{'height':'auto', 'width':'auto'}}/>
        </Link>
      </section>
      <section id="Contact" className='h-fit w-full justify-items-center items-center my-14'>
        <form className='grid grid-rows-3 grid-cols-1 w-1/2 h-1/2 place-content-center gap-7'>
          <input placeholder='Enter your subject here' className='rounded-lg border-purple-700 border-2 text-purple-700 text-xl align-text-top'>
          </input>
          <input placeholder='Enter your message here' className='rounded-lg border-purple-700 border-2 text-wrap overflow-auto overflow-y-scroll'>
          </input>
          <button>Send Message</button>
        </form>
      </section>
    </>
  );
}
