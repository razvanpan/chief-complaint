import * as React from 'react'
import ChiefComplaintBody from './components/body/body.component'
import ChiefComplaintHeader from './components/header/header.component'
import ChiefComplaintFooter from './components/footer/footer.component'
import styles from './index.css'

export const ChiefComplaintComponent = () => {
  return (
    <div className={styles.indexStyle}>
      <ChiefComplaintHeader></ChiefComplaintHeader>
      <ChiefComplaintBody></ChiefComplaintBody>
      <ChiefComplaintFooter></ChiefComplaintFooter>
    </div>
  )
}
