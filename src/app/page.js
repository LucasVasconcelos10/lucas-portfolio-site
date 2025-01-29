'use client'
import ProjectCard from './ponents/ProjectCard';
import ContactForm from './ponents/ContactForm';
import { ProjectCarousel } from './ponents/ProjectCarousel';

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
      <section id="Projects" className='flex w-auto h-auto mb-20 place-content-center'>
        {/* <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' />
        <ProjectCard projectLink='https://github.com/LucasVasconcelos10/photography-salesman' cardImgSrc='/logos/github-mark.png' cardImgAlt='Github Logo' /> */}
        <ProjectCarousel/>
      </section>
      <section id="Contact" className='flex h-fit w-full justify-center mb-20'>
        <ContactForm />
      </section>
    </>
  );
}
