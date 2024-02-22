export const metadata = {
  title: 'Maze Dungeon',
  description: 'Can you find your way out?',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
    </>
  )
}
