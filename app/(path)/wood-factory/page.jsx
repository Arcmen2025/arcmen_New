import React from 'react'

import "./woodfactory.scss"
import Woodhero from './Woodhero'

export const metadata={
    alternates: {
      canonical: `/wood-factory`,
    },
  title:'Interior factory in chennai | Arcmen architect & interior designer',
  description:'German brands and fittings.Visit our interior factory in Chennai for unparalleled craftsmanship ',
  keywords:['Interior factory in chennai','interior manufacturers'],
}

const page = () => {
  return (
    <div>
      <Woodhero/>
    </div>
  )
}

export default page