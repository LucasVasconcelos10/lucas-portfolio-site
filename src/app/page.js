'use client'
import ProjectCard from './components/ProjectCard';

export default function HomePage() {

  async function downloadResume() {
    try {
      const response = await fetch('/api/downloadResume')

      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = url;
      
      // Setting filename received in response
      link.setAttribute("download", 'Lucas Vasconcelos Resume 2025.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <>
      <section id="Home" className="h-96 w-full flex justify-center items-center mb-10">
        <video autoPlay muted loop className="w-full h-full object-cover blur-md -z-10">
          <source src='/videos/Hardwood_Floor_KneeSlide_0125.MOV'></source>
        </video>
        <div className='absolute'>
          <p>
            Hi there! Thanks for visiting my site! I am actively seeking employment as a Software Engineer so if you or
            anyone you know could use my skillsets highlighted in the projects linked below, please <button onClick={downloadResume} className='underline'>download my resume</button> and share it with them!
          </p>
        </div>
      </section>
      <section id="Projects" className='w-full h-auto grid grid-cols-4 place-items-center'>
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
      </section>
      <section id="Contact" className='h-fit w-full justify-items-center items-center my-14'>
        <h1 className='text-4xl m-6'>Contact Me</h1>
        <form className='grid grid-rows-3 grid-cols-1 w-1/2 h-1/2 place-content-center gap-7'>
          <input placeholder='Enter your subject here' className='rounded-lg border-purple-700 border-2 text-xl text-black'>
          </input>
          <input placeholder='Enter your message here' className='rounded-lg border-purple-700 border-2 text-wrap overflow-auto overflow-y-scroll text-black'>
          </input>
          <button type='submit' id='sendEmailBtn' className='w-fit h-fit rounded-xl '>Send Message</button>
        </form>
      </section>
    </>
  );
}
