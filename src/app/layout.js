import "./globals.css";
import Navbar from "./ponents/Navbar";
import Footer from "./ponents/Footer";
import Head from 'next/head';
import ThemeProvider from "../components/ThemeProvider";

export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth' suppressHydrationWarning>
      <Head>
        <meta property="description" content="Personal portfolio website to showcase projects" key="description" />
        <meta property="title" content="Lucas's Landing" key="title" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className="w-full h-full font-mono">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
