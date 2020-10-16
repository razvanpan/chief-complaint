import React from 'react'
import LabelValueView from 'terra-clinical-label-value-view'
import Input from 'terra-form-input'
import ChiefComplaint from '../../model/chiefcomplaint-model'
import styles from './body.component.css'

interface state {
  inputField: string
  codeLabel?: any
  edditedByLabel?: any
  admissionNoteLabel?: any
}

class ChiefComplaintBody extends React.Component<
  { onInput: (admissionNoteChange: string) => void; show: boolean },
  state
> {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.submitChange = this.submitChange.bind(this)
    this.state = {
      inputField: '',
      codeLabel: undefined,
      edditedByLabel: undefined,
      admissionNoteLabel: undefined
    }
  }

  readURL = async () => {
    await fetch(`http://localhost:8080/chief-complaint/1`)
      .then((res) => res.json())
      .then((res) => {
        let chiefComplaint = new ChiefComplaint(
          res.code,
          res.editedBy,
          res.admisionNote
        )
        this.setState({
          codeLabel: (
            <LabelValueView
              textValue={`${chiefComplaint.code.idCode} - ${chiefComplaint.code.translationCode}`}
            />
          ),
          edditedByLabel: (
            <LabelValueView
              label={`Edited by: ${chiefComplaint.editedBy}`}
              textValue='Admission Note'
            />
          ),
          admissionNoteLabel: (
            <Input
              name='default blank input'
              id='blank'
              ariaLabel='Blank'
              defaultValue={chiefComplaint.admissionNote}
              onChange={this.handleChange}
              onInput={this.submitChange}
            />
          )
        })
      })
  }

  componentDidMount() {
    this.readURL()
  }
  handleChange(event) {
    this.setState({ inputField: event.target.value })
  }
  submitChange(event) {
    event.preventDefault()

    this.props.onInput(this.state.inputField)
  }

  render() {
    return (
      <div className={styles.bodyContainer}>
        <br></br>
        <div>
          <LabelValueView textValue='Code' />
        </div>
        <div>{this.state.codeLabel}</div>
        <br></br>
        <div>{this.state.edditedByLabel}</div>
        <div className={styles.imputContainer}>
          {this.props.show && this.state.admissionNoteLabel}
          {!this.props.show && (
            <LabelValueView textValue={this.state.inputField} />
          )}
        </div>
      </div>
    )
  }
}
export default ChiefComplaintBody
