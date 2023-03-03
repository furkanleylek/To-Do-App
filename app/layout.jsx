import '@/styles/globals.css'
import NavbarContainer from '@/containers/navbarContainer'
import SideBarContainer from '@/containers/sidebarContainer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='w-screen h-screen'>
        <NavbarContainer />
        {children}
      </body>
    </html>
  )
}
