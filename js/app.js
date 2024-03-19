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
const vipNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const segnaPostListMap = tavoloVip.map((el) => vipObjectCreator("Tavolo Vip", el, vipNumber))
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
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: 
//  creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
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
}

//main
const student1 = studentCardGenerator(213, "Marco delle Rovere", 78); //object
const student2 = studentCardGenerator(110, "Paolo cortellessa", 96); //object
const student3 = studentCardGenerator(250, "Andrea Montegna", 48); //object
const student4 = studentCardGenerator(145, "Gaia Borromini", 74); //object
const student5 = studentCardGenerator(196, "Luigi Grimaldello", 68); //object
const student6 = studentCardGenerator(102, "Piero della Francesca", 50); //object
const student7 = studentCardGenerator(120, "Francesca da Polenta", 84); //object

const students = [student1, student2, student3, student4, student5, student6, student7]; //objectArray
const studentsNamesList = []; //stringArray
const studentsGradesFiltered = []; //objectArray
const studentsGradesAndIdFiltered = []; //objectArray

for(let j = 0; j < students.length; j++){

    const originalName = students[j].name; //string
    const upperCaseName = originalName.toUpperCase();
    studentsNamesList.push(upperCaseName);

    const studentGrade = students[j].grade; //number
    const studentId = students[j].id; //number

    if(studentGrade > 70){
        studentsGradesFiltered.push(students[j]);
    }

    if (studentGrade > 70 && studentId > 120){
        studentsGradesAndIdFiltered.push(students[j]);
    }
}

console.log(studentsNamesList)
console.log(studentsGradesFiltered)
console.log(studentsGradesAndIdFiltered)

//^^^^^^^^^^^^^^^^^^^^^^ CON METODO .FILTER ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const studentsGradesFiltered2 = students.filter((student) => student.grade > 70);
console.log(studentsGradesFiltered2);

const studentsGradesAndIdFiltered2 = studentsGradesFiltered2.filter((student) => student.id > 120);
console.log(studentsGradesAndIdFiltered2);

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ CON METODO .MAP ^^^^^^^^^^^^^^^^^^^^^^^^^^
const studentsNamesList2 = students.map((student) => student.name.toUpperCase());
console.log(studentsNamesList2);