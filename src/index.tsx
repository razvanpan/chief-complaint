import * as React from 'react'
import BodyComponent from './components/body/body.component'
import HeaderComponent from './components/header/header.component'
import FooterComponent from './components/footer/footer.component'

export const  ChiefComplaiComponent = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
  )
}
