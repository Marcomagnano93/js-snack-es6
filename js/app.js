// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

//utilities

function vipObjectCreator (tableName, vipName, number){

    const object = {
        table: tableName,
        guest: vipName,
        sit: number
    }

    return object
}

//main

const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'] //stringArray

const segnaPostListMap = tavoloVip.map((el, i) => vipObjectCreator("Tavolo Vip", el, i + 1)); //object array
console.log(segnaPostListMap)

//METODO FOR
// const segnaPostoList = [] //objectArray

// for(let i = 0; i < tavoloVip.length; i++){
    
//     const guestName = tavoloVip[i]; //string
//     const guestPlace = i + 1; //number
//     const segnaPosto = vipObjectCreator("Tavolo Vip", guestName, guestPlace); //object
//     segnaPostoList.push(segnaPosto)
// }

// console.log(segnaPostoList)


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// *SNACK 2*
// Questo è l’elenco degli studenti:
// Id   Name                    Grades
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 250  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84


//utilities
function studentCardGenerator (idNumber, studentName, studentGrades){

    const student = {
        id: idNumber,
        name: studentName,
        grade: studentGrades
    }

    return student
};

//main
const students = [
    studentCardGenerator(213, "Marco delle Rovere", 78),
    studentCardGenerator(110, "Paolo cortellessa", 96),
    studentCardGenerator(250, "Andrea Montegna", 48),
    studentCardGenerator(145, "Gaia Borromini", 74),
    studentCardGenerator(196, "Luigi Grimaldello", 68),
    studentCardGenerator(102, "Piero della Francesca", 50),
    studentCardGenerator(120, "Francesca da Polenta", 84)
    ]; //objectArray

console.log(students)

// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: 
//  creare una lista contenente il loro nome tutto in maiuscolo
const upperCaseNamesList = students.map((student) => {
   return{
    id: student.id,
    name: student.name.toUpperCase(),
    grade: student.grade
    } 
}); //object array

console.log(upperCaseNamesList)

// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const studentsGradesFiltered = upperCaseNamesList.filter((student) => student.grade > 70); //object array
console.log(studentsGradesFiltered);

// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const studentsGradesAndIdFiltered = studentsGradesFiltered.filter((student) => student.id > 120); //object array
console.log(studentsGradesAndIdFiltered);

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

function bikeGenerator (type, bicicleWeight){

    const bike = {
        name: type,
        weight: bicicleWeight
    }
    return bike
}

const bicicles = [
    bikeGenerator("forte", 30),
    bikeGenerator("fortissima", 40),
    bikeGenerator("sportiva", 25),
    bikeGenerator("elegante", 22)
]

console.log(bicicles)

let bikeLight = bicicles[0]; //object

for(let x = 1; x < bicicles.length; x++){

    const currentBike = bicicles[x];

    if(currentBike.weight < bikeLight.weight){
        bikeLight = currentBike;
    }
}

console.log(bikeLight)

const {name, weight} = bikeLight;
console.log(`La bici che pesa meno di tutte è: "${name}" che pesa ${weight} kg"`)



//OPPURE con metodo forEach:

// bicicles.forEach( (currentElement) => {
//     if(currentBike.weight < bikeLight.weight){
//         bikeLight = currentBike;
//     }

// } )




// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


function footBallSquad (squad, score = 0, fall = 0){

    const squadObject = {
        name: squad,
        pti: score,
        falls: fall
    }
    return squadObject
}

function getRandom1To100() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber
  }


const squadArray = [
    footBallSquad("Roma"),
    footBallSquad("Torino"),
    footBallSquad("Milan"),
    footBallSquad("Inter"),
    footBallSquad("Juve"),
]


for(let y = 0; y < squadArray.length; y++){

    const index = squadArray[y];

    const newPti = index.pti = getRandom1To100();
    const newFalls = index.falls = getRandom1To100();
}

// console.log(squadArray)


const squadArrayNameAndFall = squadArray.map((element) => {

    return{
     name: element.name,
     falls: element.falls
     } 
 }); //object array

 console.log(squadArrayNameAndFall)


  




















