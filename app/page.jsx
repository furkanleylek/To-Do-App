import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeContainer from '@/containers/homeContainer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mx-8 mt-4'>
      <HomeContainer />
    </main>
  )
}
