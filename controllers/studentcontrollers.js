// controllers/studentcontrollers.js
const Student = require("../models/students")
const IdentityCard = require("../models/identitycards")

// CREATE STUDENT ONLY
const addentries = async (req, res) => {
  try {
    const { name, email } = req.body

    const student = await Student.create({
      name,
      email
    })

    res.status(201).json(student)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// CREATE STUDENT + IDENTITY CARD (ONE-TO-ONE)
const addvaluesinass = async (req, res) => {
  try {
    const student = await Student.create(req.body.student)

    const idcard = await IdentityCard.create({
      ...req.body.identityCard,
      StudentId: student.id   // must match FK
    })

    res.status(201).json({ student, idcard })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// UPDATE STUDENT
const updatentries = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email } = req.body

    const student = await Student.findByPk(id)
    if (!student) {
      return res.status(404).send("user not found")
    }

    student.name = name
    student.email = email
    await student.save()

    res.status(200).send("user updated successfully")
  } catch (error) {
    res.status(500).send("user not updated")
  }
}

// DELETE STUDENT
const deletentries = async (req, res) => {
  try {
    const { id } = req.params

    const deleted = await Student.destroy({
      where: { id }
    })

    if (!deleted) {
      return res.status(404).send("user not found")
    }

    res.status(200).send("user got deleted")
  } catch (error) {
    res.status(500).send("user not deleted")
  }
}

module.exports = {
  addentries,
  updatentries,
  deletentries,
  addvaluesinass
}
