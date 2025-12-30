import React from 'react'
// import Herosec from './Herosec'
// import './modular.scss
import './modularkitchenlanding.scss'
import ModularHero from './ModularHero'
export const metadata={
  alternates: {
      canonical: `/modular-kitchen`,
    },
  title:'Modular kitchen designers in chennai',
  description:['Best modular kitchen interior in Chennai, Assure best in design, price & Quality materials','27yr Exp, 15yr Warranty,'],
  keywords:['Modular kitchen','Modular kitchen designers in chennai','Luxury Modular Kitchen Designer','German modular kitchen '],
}

// const page = () => {
//   return (
//     <div><Herosec></Herosec></div>
//   )
// }
const page = () => {
  return (
    <>
       <ModularHero />
      
      
      </>
  )
}

export default page

