const mongoose = required('mongoose')
const patientSchema = mongoose.Schema({
  patientID :{
    type: Number,
    unique: true,
    required: true
  },
  Surname : {
    type: String,
    required: true
  },
  Othernames : {
    type: String,
    required: true
  },
  Gender : {
    type: String,
    required: true
  },
  phoneNumber : {
    type: String,
    required: true
  },
  residentialAddress : {
    type: String,
    required : true
  },
  emergencyName : {
    type: String,
    required: true
  },
  Contact : {
    type: String,
    required: true
  },
  relationshipWithPatient : {
    type: String,
    required: true
  },
  vitals : {
    bloodPressure : {
      type: String,
      required: true
    },
    temperature : {
      type: String,
      required: true
    },
    pulseRate : {
      type: String,
      required: true
    },
    SPO2 : {
      type: String,
      required:true
    }
}
})