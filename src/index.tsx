import * as React from 'react'
import ChiefComplaintBody from './components/body/body.component'
import ChiefComplaintHeader from './components/header/header.component'
import ChiefComplaintFooter from './components/footer/footer.component'

export const ChiefComplaintComponent = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        flexDirection: 'column'
      }}
    >
      <ChiefComplaintHeader></ChiefComplaintHeader>
      <ChiefComplaintBody></ChiefComplaintBody>
      <ChiefComplaintFooter></ChiefComplaintFooter>
    </div>
  )
}
