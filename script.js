
const playersArr = document.querySelectorAll('input');
const diceBtns = document.querySelectorAll('div button');
const spanArr = document.querySelectorAll('span');
// const endBtn = document.querySelector('#endButton');
// document.getElementById()
const endBtn = document.getElementById('endButton');
// end btn disable: 
endBtn.disabled = true;

// class =>selects multiple elemnts

const output = document.getElementsByClassName("output")[0] // [output]

for(let t of diceBtns){
    t.addEventListener("click", rollTheDice)
}

let count = 0
function rollTheDice(event_details){
    count++;
    if(count == 5){
        endBtn.disabled = false;
    }

    //  console.log(event_details.target.id)
    let clickedBtn = event_details.target;
    // console.log(clickedBtn)
    // disable the button: 
    clickedBtn.disabled = true;

    // geeting clicked button id
    let clickedbtn_id = clickedBtn.id // "p103"
    let player_id = clickedbtn_id.replace("p","")-1 // 3
    
    console.log(player_id, typeof player_id)

    let possibleValues = [1,2,3,4,5,6];
    let randomIndex = parseInt(Math.random()*possibleValues.length) // 3
    let randomValue = possibleValues[randomIndex]
    // console.log(randomValue)

    // add the score to corresponding player
   spanArr[player_id].innerText = randomValue
}


endBtn.addEventListener("click", findWinner)


function findWinner(){

    let highestScore = 0
    for(let t of spanArr){
         let score = t.innerText // <span>3</span>
         if(score> highestScore){
                highestScore = score
         }
    }
    // console.log(highestScore)
    // find all the players with highest score
    let highestScorers = []
    for(let i = 0; i<spanArr.length; i++){
        let score = spanArr[i].innerText // <span>3</span>
        if(score ==  highestScore){
               highestScorers.push(i)
        }
   }
//    console.log(highestScorers)
  let namesOfWinner = ""
  for(let t of highestScorers){ // t = 0,3
    namesOfWinner += playersArr[t].value + ","
  }
//   console.log(namesOfWinner)

  output.innerText = namesOfWinner.slice(0,-1) + " won the game"

}





