const data = new Date();

const dia = String(data.getDate()).padStart(2, "0");

const mes = String(data.getMonth()+1).padStart(2, "0");

const ano = String(data.getFullYear()).padStart(2, "0");

const dataAtual = `${dia}/${mes}/${ano}`

const randomDate = new Date(2023,10,01)

//só isso n eh suficiente pra retornar string
const randomDateString = new Date('2023-10-01 12:00:00')

console.log(randomDateString)