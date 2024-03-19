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

function objectCreator (tableName, name, number){

    const object = {
        table: tableName,
        guest: name,
        sit: number
    }

    return object
}

//main

const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'] //stringArray

const segnaPostoList = []

for(let i = 0; i < tavoloVip.length; i++){
    
    const guestName = tavoloVip[i]; //string
    const guestPlace = i + 1; //number
    // console.log(guest);
    // console.log(guestPlace)
    const segnaPosto = objectCreator("Tavolo Vip", guestName, guestPlace); //object

    segnaPostoList.push(segnaPosto)

}

console.log(segnaPostoList)
