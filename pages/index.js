
import { Inter } from '@next/font/google'

import Dashboard from './Components/main/Dashboard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  )
}
