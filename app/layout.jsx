import '@/styles/globals.css'
import Navbar from '@/components/navbar/navbar'
import Provider from '@/components/context'
import SideBar from '@/components/sidebar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='flex flex-col bg-main md:flex-row w-screen h-screen '>
        <Provider>
          <div className='hidden md:flex'>
            <SideBar />
          </div>
          <Navbar />
          <div className='mx-8 mt-4 md:w-full' >
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
