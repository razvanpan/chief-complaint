import React from 'react'
import Button from 'terra-button'

import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'

const ChiefComplaintFooter = () => (
  <div
    style={{
      bottom: '0',
      position: 'fixed',
      width: '100% ',
      paddingLeft: '0'
    }}
  >
    <ActionFooter
      style={{
        width: '99%',
        borderRadius: '0px 0px 25px 25px',
        borderTopStyle: 'solid',
        borderTopColor: '#c8def5'
      }}
      end={
        <React.Fragment>
          <div style={{ marginRight: '50px' }}>
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
