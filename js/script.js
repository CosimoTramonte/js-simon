
const btnPlay = document.getElementById("gioca");
const btnControlla = document.createElement("button");
const generalContainer = document.getElementById("playtable");

const divInput = document.createElement("div");

let storedNumbers = 5;
let numRandom = [];
let arrayInput =[];

btnPlay.addEventListener("click", function(){

    reset()

    generalContainer.classList.remove("hide");

    numRandom = getNumber();
    console.log(numRandom);

    divNumber = placeOfNumber()

    setTimeout(crateMemoryInput, 5000);

    btnControlla.addEventListener("click", function(){

        const inputs = document.querySelectorAll('.input');

        // questa funzione per ogni inputs compie quest'azione
        inputs.forEach(inputs => {
            if (numRandom.includes(parseInt(inputs.value)) && !(arrayInput.includes(parseInt(inputs.value))))
            arrayInput.push(parseInt(inputs.value))          
        })

        console.log(arrayInput);
        
        divInput.classList.add("hide");

        message = ` 
        Il gioco è terminato, questi sono i risultati: <br>
        - hai indovinato ${arrayInput.length} numeri su  ${numRandom.length} <br>
        - i numeri che hai indovinato ${arrayInput} <br>
        - i numeri da indovinare ${numRandom} <br>
        Sciaccia "Gioca" per rigiocare.
        `
        document.getElementById("message").innerHTML = message
            
    })


})


//----------- FUNCTIONS -------------


//qui, creo un array di numeri che non si ripetono più volte (grazie al ciclo while che li confronta e se non è un numero già stato preso, lo pushia nell'array)

function getNumber(){

    while(numRandom.length < storedNumbers){

        const number = getRandomNumber(1 , 10)

        if(!(numRandom.includes(number))){
            numRandom.push(number)
        }
    }

    return numRandom
}

//generatore di numeri random
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//reset
function reset(){
    console.log("reset");
    numRandom = [];
    console.log(numRandom);
    arrayInput = [];
    console.log(arrayInput);
    document.getElementById("message").innerHTML = ""
    
}

//creo un div dove possiamo visualizzare i numeri
function placeOfNumber(){

    const divNumber = document.createElement("div");
    divNumber.classList.add("divNumber")
    generalContainer.append(divNumber);
    divNumber.innerHTML = numRandom.join("  -  ");

    return divNumber
}

// creo il div dove inserisco gli input e gli appendo al container
function crateMemoryInput() { 

    divNumber.remove();

    divInput.classList.add("divInput");
    divInput.classList.remove("hide");

    divInput.innerHTML= " ";
    
    for (let i = 0; i < storedNumbers; i++) {


        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("value", " ");
        input.setAttribute("min", "1");
        input.setAttribute("max", "10");
        input.classList.add("input");
        divInput.appendChild(input);
    }

    btnControlla.innerHTML = "Controlla"
    divInput.append(btnControlla)

    generalContainer.append(divInput);

}

//win condition
function winCondition(){
    
    if(arrayInput === numRandom){
        console.log("ciao");    
    } else {
        console.log("ciao ciao");
    }
}