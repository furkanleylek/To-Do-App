import '@/styles/globals.css'
import Navbar from '@/components/navbar/navbar'
import Provider from '@/components/context'
import SideBar from '@/components/sidebar'
import { Roboto_Mono } from 'next/font/google';
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: 'To Do App',
  icons: {
    icon: '/bluecheck.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_mono.variable}`} >
      <head />
      <body className='flex flex-col bg-main md:flex-row w-screen h-screen overflow-hidden'>
        <Provider>
          <div className='hidden md:flex'>
            <SideBar />
          </div>
          <Navbar />
          <div className='pt-4 px-8 md:w-full overflow-y-auto overflow-x-hidden' >
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
