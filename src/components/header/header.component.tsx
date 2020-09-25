import React from 'react'
import ActionHeader from 'terra-action-header'

import Button from 'terra-button/lib/Button'
import IconRollup from 'terra-icon/lib/icon/IconRollup'

const ChiefComplaintHeader = () => (
  <div
    style={{
      top: '0',
      position: 'relative',
      width: '100%'
    }}
  >
    <ActionHeader
      style={{
        border: 'solid',
        borderRadius: '25px 25px 0px 0px',
        borderColor: '#eaeffa'
      }}
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
