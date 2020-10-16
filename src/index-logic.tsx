import * as React from 'react'
import ChiefComplaintBody from './components/body/body.component'
import ChiefComplaintHeader from './components/header/header.component'
import ChiefComplaintFooter from './components/footer/footer.component'
import styles from './index.css'
import Axios from 'axios'

class ChiefComplaintLogic extends React.Component<
  {},
  { input: string; isEditable: boolean; show: boolean }
> {
  constructor(props) {
    super(props)
    this.onInputHandle = this.onInputHandle.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
    this.onClickCancel = this.onClickCancel.bind(this)
    this.state = {
      input: '',
      isEditable: true,
      show: true
    }
  }
  onInputHandle(newInput: string) {
    this.setState({
      input: newInput
    })
  }
  onClickCancel() {
    this.setState({
      isEditable: true
    })
  }
  onClickSubmit() {
    const data = {
      code: {
        idCode: '277',
        translationCode: 'LimbTrauma'
      },
      editedBy: 'Pre-arrival',
      admisionNote: this.state.input
    }
    this.setState({
      isEditable: false
    })

    Axios.post('http://localhost:8080/chief-complaint/create', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }
  render() {
    return (
      <div className={styles.indexStyle}>
        <ChiefComplaintHeader></ChiefComplaintHeader>
        <ChiefComplaintBody
          show={this.state.isEditable}
          onInput={this.onInputHandle}
        ></ChiefComplaintBody>
        <ChiefComplaintFooter
          onSubmit={this.onClickSubmit}
          onCancel={this.onClickCancel}
        ></ChiefComplaintFooter>
      </div>
    )
  }
}
export default ChiefComplaintLogic
