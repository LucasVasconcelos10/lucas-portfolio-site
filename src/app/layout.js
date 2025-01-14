import "./globals.css";
import Navbar from "./components/Navbar.js"
import Head from 'next/head';

export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <Head>
        <meta property="description" content="Personal portfolio website to showcase projects" key="description" />
        <meta property="title" content="Lucas's Landing" key="title" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className="w-full h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
