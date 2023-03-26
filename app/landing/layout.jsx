import '@/styles/globals.css'

export default function Layout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className='flex flex-col bg-lightGrey w-screen h-screen'>
                {children}
            </body>
        </html>
    )
}
