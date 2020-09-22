import React from 'react'
import Card from 'terra-card/lib/Card'
import LabelValueView from 'terra-clinical-label-value-view'
import Input from 'terra-form-input'

const ChiefComplaintBody = () => (
  <div
    style={{
      height: '80%',
      position: 'absolute',
      width: '100%'
    }}
  >
    <Card>
      <Card.Body hasPaddingVertical={false}>
        <div style={{ backgroundColor: '#eaeffa' }}>
          <br></br>
          <div style={{ fontSize: '10px' }}>
            <LabelValueView textValue='Code' />
          </div>
          <div style={{ fontSize: '10px' }}>
            <LabelValueView textValue='273-Limb Trauma' />
          </div>
          <br></br>
          <div style={{ fontSize: '10px' }}>
            <LabelValueView
              label='Edited by:Pre-arrival'
              textValue='Admission Note'
            />
          </div>
          <div style={{ fontSize: '6px', width: '99%' }}>
            <Input
              name='default blank input'
              id='blank'
              ariaLabel='Blank'
              defaultValue='Enter Admission Note'
            />
          </div>
        </div>
      </Card.Body>
    </Card>
    <div></div>
  </div>
)
export default ChiefComplaintBody
