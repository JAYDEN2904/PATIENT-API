const Patient = require('../models/patientModel');

// GET all patients
exports.getAllPatients = async (req, res) => {
 try {
    const patients = await Patient.find();
    res.status(200).json(patients);
 } catch (err) {
    res.status(500).json({ message: err.message });
 }
};

// GET patient by ID
exports.getPatientById = async (req, res) => {
 try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).send('Patient not found');
    res.status(200).json(patient);
 } catch (err) {
    res.status(500).json({ message: err.message });
 }
};

// POST a new patient
exports.createPatient = async (req, res) => {
 try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
 } catch (err) {
    res.status(400).json({ message: err.message });
 }
};

// DELETE patient by ID
exports.deletePatientById = async (req, res) => {
 try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).send('Patient not found');
    res.status(200).json({ message: 'Patient deleted successfully' });
 } catch (err) {
    res.status(500).json({ message: err.message });
 }
};

// PATCH update patient by ID
exports.updatePatientById = async (req, res) => {
 try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patient) return res.status(404).send('Patient not found');
    res.status(200).json(patient);
 } catch (err) {
    res.status(400).json({ message: err.message });
 }
};