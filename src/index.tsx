import * as React from 'react'
import BodyComponent from './components/body/body.component'
import HeaderComponent from './components/header/header.component'
import FooterComponent from './components/footer/footer.component'

export const ChiefComplaintComponent = () => {
  return (
    <div
      style={{
        width: '99%',
        height: '100%',
        overflowX: 'hidden',
        flexDirection: 'column'
      }}
    >
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
  )
}
