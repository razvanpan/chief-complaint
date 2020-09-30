import React from 'react'
import LabelValueView from 'terra-clinical-label-value-view'
import Input from 'terra-form-input'
import styles from './body.component.css'

const ChiefComplaintBody = () => (
  <div className={styles.bodyContainer}>
    <br></br>
    <div>
      <LabelValueView textValue='Code' />
    </div>
    <div>
      <LabelValueView textValue='273-Limb Trauma' />
    </div>
    <br></br>
    <div>
      <LabelValueView
        label='Edited by:Pre-arrival'
        textValue='Admission Note'
      />
    </div>
    <div className={styles.imputContainer}>
      <Input
        name='default blank input'
        id='blank'
        ariaLabel='Blank'
        defaultValue='Enter Admission Note'
      />
    </div>
  </div>
)
export default ChiefComplaintBody
