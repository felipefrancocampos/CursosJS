var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log (`Agora são ${hora} horas e ${minuto} minutos.`)
if (hora < 6) {
    console.log('Boa Madrugada')
}if (hora < 12) {
    console.log('Bom Dia')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}