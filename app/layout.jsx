import '@/styles/globals.css'
import NavbarContainer from '@/containers/navbarContainer'
import SideBarContainer from '@/containers/sidebarContainer'
import Provider from '@/components/context'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='flex flex-col bg-main md:flex-row w-screen h-screen '>
        <Provider>
          <div className='hidden md:flex'>
            <SideBarContainer />
          </div>
          <NavbarContainer />
          <div className='mx-8 mt-4 md:w-full' >
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
