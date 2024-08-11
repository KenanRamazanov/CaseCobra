import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Stpes from '@/components/Stpes'
import React, { ReactNode } from 'react'

const layout = ({children} : {children: ReactNode}) => {
  return (
    <MaxWidthWrapper className='flex flex-1 flex-col' >
      <Stpes/>
        {children}
    </MaxWidthWrapper>
  )
}

export default layout