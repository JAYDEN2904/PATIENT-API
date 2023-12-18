const express = require('express')
const app = express()
const mongoose = require('mongoose') 

app.use(express.json())
app.use(express.urlencoded({extended: false}))



//routes
app.get('/', (req, res) => {
  res.send('Hello NODE API')
})

app.get('/patients', async(req, res) => {
  try {
    const patients = await Patient.find({});
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.get('/patients/:id', async(req, res) => {
  try {
    const {id} = req.params
    const patient = await Patient.findById(id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

//update product
app.put('/patients/:id',  async (req,res)=> {
  try {
    const {id} = req.params;
    const patient = await Patient.findByIdAndUpdate(id, req.body);
    //cannot find student in database
    if(!product){
      return res.status(404).json({message:`'Cannot find patient with ID ${id}'`})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})




mongoose.
connect('mongodb+srv://Admin:jayden290405@dcit205.hp4iypm.mongodb.net/PATIENT API?retryWrites=true&w=majority')
.then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('Connected to MongoDB')
  })
}).catch(() => {
  console.log(error)
})