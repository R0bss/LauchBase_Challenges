const {age, date, graduate} = require('../utils')

module.exports = {
  index(req, res){
    const teachers = []
  
    for (i in data.teachers){
      const teacher = {
        ...data.teachers[i],  
        services: data.teachers[i].services.split(","),
      }
      teachers.push(teacher)
    }
    
    return res.render("teachers/index", {teachers})
  },
  create(req, res){
    return res.render("teachers/create")
  },
  post(req, res){
    const keys = Object.keys(req.body)

    for(key of keys) {
      if (req.body[key] == "") {
        return res.send('Please, fill all fields!')
      }
    }
  
    let {avatar_url, birth, name, services, type_class, type_graduate} = req.body
  
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)
  
    data.teachers.push({
      id,
      name,
      avatar_url,
      birth,
      type_graduate,
      type_class,
      services,
      created_at,
    })
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
      if(err) return res.send("Write file error!")
  
      return res.redirect("/teachers")
    })
  },
  show(req, res){
    const { id } = req.params;
    const foundTeacher = data.teachers.find(function(teacher){
      return teacher.id == id;
    })
    if (!foundTeacher) return res.send("Teacher not Found!")
  
    const teacher = {
      ...foundTeacher,
      age: age(foundTeacher.birth),
      type_graduate: graduate(foundTeacher.type_graduate),
      services: foundTeacher.services.split(","),
      created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
    }
    return res.render("teachers/show", {teacher})
  },
  edit(req, res){
    const { id } = req.params;

    const foundTeacher = data.teachers.find(function(teacher){
      return teacher.id == id
    })
    if (!foundTeacher) return res.send("Teacher not found!")
  
    const teacher = {
      ... foundTeacher,
      birth: date(foundTeacher.birth)
    }
  
    return res.render('teachers/edit', { teacher})
  },
  put(req, res){
    const { id } = req.body
    let index = 0
  
    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
      if (id == teacher.id) {
        index = foundIndex
        return true
      }
    })
    if (!foundTeacher) return res.send("Teacher not found")
  
    const teacher = {
      ...foundTeacher,
      ...req.body,
      birth: Date.parse(req.body.birth)
    }
    data.teachers[index] = teacher
  
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
      if(err) return res.send("Write error!")
  
      return res.redirect(`/teachers/${id}`)
    })
  },
  delete(req, res){
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function(teacher){
      return teacher.id != id
    })
  
    data.teachers = filteredTeachers
  
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
      if (err) return res.send("Write file error!")
  
      return res.redirect("/teachers")
    })
  },
}


