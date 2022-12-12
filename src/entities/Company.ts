import mongose from 'mongoose'

const companySchema = new mongose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
  }
)

const companies = mongose.model('companies', companySchema)

export default companies