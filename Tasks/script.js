//criar um objeto do tipo date com a data "01/10/2023"
const randomDateA = new Date('2023-10-01 12:00:00');

// console.log(randomDateA);

const randomDateB = new Date(2023,9,01);//Mês vai de 0 a 9

// console.log(randomDateB);

// criar uma função que recebe como parâmetro uma data em formato 
//de string, exemplo: “01/07/2022” e retorna o mês. 
//nesse exemplo deveria retornar 07

const data = new Date('2022-07-01');

function formatarData(data){
  const retornaMes = data.getMonth();
  return `${retornaMes}`;
}

console.log(formatarData(data));