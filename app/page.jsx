import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeContainer from '@/containers/homeContainer'
import HomeComponent from '@/components/home/home'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='py-4'>
      <HomeComponent />
    </main>
  )
}
