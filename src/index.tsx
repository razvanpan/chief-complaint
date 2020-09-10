import * as React from 'react'
import BodyComponent from './components/body-component.component/body-component.component'
import HeaderComponent from './components/header-component.component/header-component.component'
import FooterComponent from './components/footer-component.component/footer-component.component'

export const  ChiefComplaiComponent = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
  )
}
