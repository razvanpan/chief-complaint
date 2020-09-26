import React from 'react'
import Button from 'terra-button'

import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'
import styles from './footer.component.css'
const ChiefComplaintFooter = () => (
  <div className={styles.footerContainer}>
    <ActionFooter
      className={styles.actionFooterContainer}
      end={
        <React.Fragment>
          <div>
            <Spacer isInlineBlock marginRight='medium'>
              <Button text='Submit' variant={Button.Opts.Variants.EMPHASIS} />
            </Spacer>
            <Button text='Cancel' />
          </div>
        </React.Fragment>
      }
    />
  </div>
)
export default ChiefComplaintFooter
