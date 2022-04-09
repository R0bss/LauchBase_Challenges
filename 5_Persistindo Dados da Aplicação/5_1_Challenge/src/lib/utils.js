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

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
  },
  graduate: function(value){
    switch (value) {
      case 'medio_complete': return "Médio Completo" 
      case 'university_complete': return "Ensino Superior Completo"
      case 'master_complete': return "Mestrado Completo"
      case 'doctor_complete': return "Doutorado Completo"
      default: return ""
    }
  },
  schooling: function(value) {
    switch (value) {
      case '5_elementary_school': return "5° Ano Fundamental"
      case '6_elementary_school': return "6° Ano Fundamental"
      case '7_elementary_school': return "7° Ano Fundamental"
      case '8_elementary_school': return "8° Ano Fundamental"
      case '9_elementary_school': return "9° Ano Fundamental"
      case '1_high_school': return "1° Ano Ensino Medio"
      case '2_high_school': return "2° Ano Ensino Medio"
      case '3_high_school': return "3° Ano Ensino Medio"
      default: return ""
    }
  }
}