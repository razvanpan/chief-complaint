import React from 'react'
import Button from 'terra-button'

import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'
import styles from './footer.component.css'
class ChiefComplaintFooter extends React.Component<{
  onSubmit: () => void
  onCancel: () => void
}> {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefalut()
    this.props.onSubmit()
  }
  render() {
    return (
      <div className={styles.footerContainer}>
        <ActionFooter
          className={styles.actionFooterContainer}
          end={
            <React.Fragment>
              <div>
                <Spacer isInlineBlock marginRight='medium'>
                  <Button
                    text='Submit'
                    variant={Button.Opts.Variants.EMPHASIS}
                    onClick={this.props.onSubmit}
                  />
                </Spacer>
                <Button text='Cancel' onClick={this.props.onCancel} />
              </div>
            </React.Fragment>
          }
        />
      </div>
    )
  }
}

export default ChiefComplaintFooter
