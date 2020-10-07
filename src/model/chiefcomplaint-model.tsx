import code from './code-model'

export default class ChiefComplaint {
  constructor(
    public code: code,
    public editedBy: string,
    public admissionNote: string
  ) {
    this.code = code
    this.editedBy = editedBy
    this.admissionNote = admissionNote
  }
}
