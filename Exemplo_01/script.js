//Um objeto Date cria uma instância que representa
//um momento no tempo.

//------------------------------------------------

//Como pode ser inicializado?
//Padrão: 
//  new Date //Data atual sem formatação
//Por Parâmetro: 
//  new Date('2020-10-01 12:00:00') // retorna em string
//  new Date(1995,11,17)//ano, mês, dia

//------------------------------------------------------

//Como extrair dados da data
//Obter o ano:
//  let data = new Date()
//  data.getFullYear()//2022
//Obter o mês: 
// data.getMonth()// agosto - mês 7 para o JavaScript (conta 0 a 11)
//Obter o dia:
//  data.getDate()// retorna de 0 a 6

//-------------------------------------------------------

//Colocar dados no Date
//Mesma forma do get, porém utilizando o set
//  let data = new Date()
//  data.setFullYear(2019)
//  data.setMonth(01)
//  data.setDate(12)

let data = new Date();

//com a função formatDate, vamos "filtrar" o "new Date()"
function formatDate(data){
  let newDate = new Date(data)
  return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}

console.log(formatDate(data))
