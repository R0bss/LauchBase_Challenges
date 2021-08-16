module.exports = {
  age: function(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0) {
      month == 0 &&
      today.getDate() <= birthDate.getDate()
        age = age - 1
    }
    return age
  },
  date: function(timestamp){
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()

    const month = `0${date.getUTCMonth() + 1}`.slice(-2)

    const day = `0${date.getUTCDate()}`.slice(-2)

    return `${year}-${month}-${day}`
  },
  graduate: function(value){
    switch (value) {
      case 'medio_complete': return "Médio Completo" 
      case 'university_complete': return "Ensino Superior Completo"
      case 'master_complete': return "Mestrado Completo"
      case 'doctor_complete': return "Doutorado Completo"
      default: return ""
    }
  }
}