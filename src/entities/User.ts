import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    companyId: {type: mongoose.Schema.Types.ObjectId, ref:'companies', required: true},
    unitId: {type: mongoose.Schema.Types.ObjectId, ref:'units', required: true},
  }
)

const users = mongoose.model('users', userSchema)

export default users