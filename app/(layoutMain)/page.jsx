import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeComponent from '@/components/home/home'
import { getAllTasks } from '@/services/getTasks'
const inter = Inter({ subsets: ['latin'] })


export default async function Home() {

  // const allTasks = await getAllTasks()

  return (
    <main className='py-4'>
      <HomeComponent />
    </main>
  )
}
