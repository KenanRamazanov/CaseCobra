"use client"

import { usePathname } from "next/navigation"


const STEPS = [
    {
        name: 'Step 1: Add image',
        description: 'Choose an image for your case',
        url: '/upload',
      },
      {
        name: 'Step 2: Customize design',
        description: 'Make the case yours',
        url: '/design',
      },
      {
        name: 'Step 3: Summary',
        description: 'Review your final design',
        url: '/preview',
      },
]

const Stpes = () => {
    const pathname = usePathname()
  return (
    <div>Stpes</div>
  )
}

export default Stpes