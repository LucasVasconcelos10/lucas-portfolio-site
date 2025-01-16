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

  async function sendEmail(event) {
    event.preventDefault()
    const response = await (await fetch("/api/sendEmail")).text()
    console.log(response)
  }

  return (
    <>
      <section id="Home" className="h-96 w-full flex justify-center items-center mb-20">
        <video autoPlay muted loop className="w-full h-full object-cover blur-md -z-10">
          <source src='/videos/Hardwood_Floor_KneeSlide_0125.MOV'></source>
        </video>
        <div className='absolute'>
          <p>
            Thanks for visiting my site! I am actively seeking employment as a Software Engineer so if you or
            anyone you know could use my skillsets highlighted in the projects linked below, please <button onClick={downloadResume} className='underline'>download my resume</button> and share it with them!
          </p>
        </div>
      </section>
      <section id="Projects" className='w-full h-auto grid grid-cols-4 place-items-center mb-20'>
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
      </section>
      <section id="Contact" className='flex h-fit w-full justify-center mb-20'>
        <form className='grid grid-cols-1 w-3/5 h-fit place-items-center gap-7'>
          <h1 className='text-4xl'>Contact Me</h1>
          <input placeholder='Enter your subject here' className='flex w-full max-h-1/5 rounded-lg border-purple-700 border-2 text-xl text-black '>
          </input>
          <textarea placeholder='Enter your message here' className='flex w-full max-h-24 rounded-lg border-purple-700 border-2 text-black'>
          </textarea>
          <div id="contact-form-btn-container" className="w-fit h-fit p-4 bg-purple-700 rounded-xl transform transition-all hover:scale-110 hover:brightness-150 duration-200">
            <button type='submit' id='sendEmailBtn' className='w-fit h-fit rounded-xl' onClick={sendEmail}>Send Message</button>
          </div>
        </form>
      </section>
    </>
  );
}
