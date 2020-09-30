import React from 'react'
import ActionHeader from 'terra-action-header'

import Button from 'terra-button/lib/Button'
import IconRollup from 'terra-icon/lib/icon/IconRollup'
import styles from './header.component.css'
const ChiefComplaintHeader = () => (
  <div className={styles.headerContainer}>
    <ActionHeader
      className={styles.actionHeaderContainer}
      title='Chief Complaint'
    >
      <Button
        text='Utility'
        variant='utility'
        icon={<IconRollup height='2em' width='2em' />}
        onClick={() => alert('You clicked the button!')}
      />
    </ActionHeader>
  </div>
)
export default ChiefComplaintHeader
