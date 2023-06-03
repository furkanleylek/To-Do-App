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
            <body className='flex flex-col w-screen bg-black h-screen bg-landing from-font '>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}
