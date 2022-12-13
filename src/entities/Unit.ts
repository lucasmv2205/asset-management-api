import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});

const units = mongoose.model("units", unitSchema);

export default units;
