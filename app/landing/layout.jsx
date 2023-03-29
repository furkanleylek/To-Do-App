import '@/styles/globals.css'
import Provider from '@/components/context'
export const metadata = {
    title: 'To Do App'
}


export default function Layout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className='flex flex-col bg-lightGrey w-screen h-screen'>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}
