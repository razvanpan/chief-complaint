import React from 'react'

import LabelValueView from 'terra-clinical-label-value-view'
import Input from 'terra-form-input'

const ChiefComplaintBody = () => (
  <div
    style={{
      height: '80%',
      position: 'absolute',
      width: '100%',
      overflowY: 'scroll'
    }}
  >
    <div>
      <div style={{ backgroundColor: '#eaeffa' }}>
        <br></br>
        <div style={{ fontSize: '10px', paddingLeft: '12px' }}>
          <LabelValueView textValue='Code' />
        </div>
        <div style={{ fontSize: '10px', paddingLeft: '12px' }}>
          <LabelValueView textValue='273-Limb Trauma' />
        </div>
        <br></br>
        <div
          style={{
            fontSize: '10px',
            paddingLeft: '12px',
            paddingRight: '24px'
          }}
        >
          <LabelValueView
            label='Edited by:Pre-arrival'
            textValue='Admission Note'
          />
        </div>
        <div
          style={{
            fontSize: '6px',
            width: '100% !important ',
            paddingLeft: '12px'
          }}
        >
          <Input
            style={{ width: '99%' }}
            name='default blank input'
            id='blank'
            ariaLabel='Blank'
            defaultValue='Enter Admission Note'
          />
        </div>
      </div>
    </div>
    <div></div>
  </div>
)
export default ChiefComplaintBody
