import '@/styles/globals.css'
import Provider from '@/components/context'
export const metadata = {
    title: 'To Do App',
    icons: {
        icon: '/bluecheck.png',
    }
};


export default function Layout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className='flex flex-col w-screen h-screen bg-gradient-to-b from-font bg-cover'>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}
