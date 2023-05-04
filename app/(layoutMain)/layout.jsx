import '@/styles/globals.css'
import Navbar from '@/components/navbar/navbar'
import Provider from '@/components/context'
import SideBar from '@/components/sidebar'
import { Inter, Roboto_Mono } from 'next/font/google'
import classNames from 'classnames'
const inter = Inter({ subsets: ['latin'] })
const mono = Roboto_Mono({
  subsets: ['latin']

})


export const metadata = {
  title: 'To Do App',
  icons: {
    icon: '/bluecheck.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <head />
      <body className={classNames('flex flex-col bg-primary md:flex-row w-screen h-screen overflow-hidden', mono.className)}>
        <Provider>
          <div className='hidden md:flex'>
            <SideBar />
          </div>
          <Navbar />
          <div className='pt-4 px-8 md:w-full overflow-y-auto overflow-x-hidden md:relative' >
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
