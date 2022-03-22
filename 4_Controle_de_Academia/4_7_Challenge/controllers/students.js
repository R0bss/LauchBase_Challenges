const fs = require('fs');
const data = require('../data.json');
const {age, date, graduate} = require('../utils')

exports.index = function(req, res){

  const students = []
  
  for (i in data.students){
    const student = {
      ...data.students[i],  
      services: data.students[i].services.split(","),
    }
    students.push(student)
  }
  
  return res.render("students/index", {students})
}

exports.create = function(req, res){
  return res.render("students/create")
}

exports.post = function(req, res){
  const keys = Object.keys(req.body)

  for(key of keys) {
    if (req.body[key] == "") {
      return res.send('Please, fill all fields!')
    }
  }

  birth = Date.parse(req.body.birth)
  let id = 1
  const lastMember = data.students[data.students.length - 1]

  if (lastMember) {
    id = lastMember.id + 1 
  }

  data.students.push({
    id,
    ...req.body,
    birth,
  })
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write file error!")

    return res.redirect("/students")
  })
}
/*
exports.show = function(req, res){
  const { id } = req.params;
  const foundstudent = data.students.find(function(student){
    return student.id == id;
  })
  if (!foundstudent) return res.send("student not Found!")

  const student = {
    ...foundstudent,
    age: age(foundstudent.birth),
    type_graduate: graduate(foundstudent.type_graduate),
    services: foundstudent.services.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundstudent.created_at),
  }
  return res.render("students/show", {student})
}

exports.edit = function(req, res){
  const { id } = req.params;

  const foundstudent = data.students.find(function(student){
    return student.id == id
  })
  if (!foundstudent) return res.send("student not found!")

  const student = {
    ... foundstudent,
    birth: date(foundstudent.birth)
  }

  return res.render('students/edit', { student})
}

exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundstudent = data.students.find(function(student, foundIndex) {
    if (id == student.id) {
      index = foundIndex
      return true
    }
  })
  if (!foundstudent) return res.send("student not found")

  const student = {
    ...foundstudent,
    ...req.body,
    birth: Date.parse(req.body.birth)
  }
  data.students[index] = student

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write error!")

    return res.redirect(`/students/${id}`)
  })

}

exports.delete = function(req, res){
  const { id } = req.body

  const filteredstudents = data.students.filter(function(student){
    return student.id != id
  })

  data.students = filteredstudents

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")

    return res.redirect("/students")
  })
}
*/