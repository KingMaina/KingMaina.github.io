import Image from 'next/image'

import FeatureNavigation from '@/public/images/maze1.png'
import FeatureMapImage from '@/public/images/maze2.png'
import FeatureGraphicsImage from '@/public/images/maze3.png'

const content = [
  {
    title: 'Explore the maze in 3D',
    text: 'Unique style graphics for the game',
    points: [
      'Custom textures for the walls',
      '3D experience in the maze',
      'and more...',
    ],
    image: FeatureGraphicsImage,
  },
  {
    title: 'Navigate the dungeon',
    text: 'Use Keyboard controls to move around in the game',
    points: [
      'W/Up to move forward',
      'S/Down to move backward',
      'A/Left to move left',
      'D/Right to move right',
    ],
    image: FeatureNavigation,
  },
  {
    title: 'Use the map',
    text: 'Use the map to find your way through the maze',
    points: [
      'Press M to open the map',
      'Press M again to close the map',
    ],
    image: FeatureMapImage,
  },
]

const features = content.map((item, i) => {
  const imageSection = (
    <>
      <div className="md:w-1/2 lg:w-5/12">
        <Image src={item.image} alt={item.title} />
      </div>
    </>
  )
  const textSection = (
    <>
      <div className="md:w-1/2 lg:w-7/12">
        <h2 className="h4 mb-2">{item.title}</h2>
        <p className="text-lg text-gray-400 mb-6">{item.text}</p>
        <ul className="flex flex-col gap-2">
          {item.points.map((point, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg className="w-6 h-6 fill-current text-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" />
                <path className="text-white" d="M9 15l6-6" />
              </svg>
              <span className="text-gray-400">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )

  return (
    <div key={i} className="flex flex-col items-start gap-4 md:items-start md:flex-row md:gap-8 lg:gap-12" data-aos="fade-up">
      {i % 2 === 0 ? (
        <>
          {imageSection}
          {textSection}
        </>
      ) : (
        <>
          {textSection}
          {imageSection}
        </>
      )}
    </div>
  )
}
)

export default function Features() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/*  Section Heading */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Difficulty</div> */}
            <h1 className="h2 mb-4">Features</h1>
            <p className="text-xl text-gray-400">Explore the trecherous dungeon</p>
          </div>

          {/* Features */}
          <div className="grid gap-20">
            {features}
          </div>
        </div>
      </div>
    </section>
  )
}
