const fs = require('fs');
const data = require('./data.json');

exports.post = function(req, res){
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
}
