import '@/styles/globals.css'
import Provider from '@/components/context'
import Image from 'next/image';
export const metadata = {
    title: 'To Do App',
    icons: {
        icon: '/check.png',
    }
};


export default function Layout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className='flex flex-col bg-lightGrey w-screen h-screen bg-landing bg-cover'>
                <Provider>
                    {/* <Image src="/todo-bg.jpg" className='z-[-1]' alt='check' fill /> */}
                    {children}
                </Provider>
            </body>
        </html>
    )
}
