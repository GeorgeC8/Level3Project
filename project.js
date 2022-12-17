// function initialize()
// {
//     diceTable = document.getElementById('diceTable');
//     dataForm = document.getElementById("dataform");
//     numDice = 0;
//     numRolls = 0;
//     numTriples = 0;
//     checkDoubles = false;
//     checkTriples = false;
//     mean = 0;
//     median = 0;
//     mode = 0;

// }

// function getRandomInteger(lower,upper)
// {
//     var multiplier = upper -(lower-1);
//     var rnd=parseInt(Math.random()*multiplier)+lower;
//     return rnd;
// }

// function commit()
// {
//     numDice = dataForm.numdice.value;
//     numRolls = dataForm.numrolls.value;
//     if(numRolls==3) checkDoubles ==true && checkTriples ==true;
//     else if(numRolls==2)checkdoubles ==true;
//     for(let i =0; i<numRolls;i++)
//     {
//         var newRow = diceTable.insertRow();
//         var NewCell = newRow.insertCell();
//         NewCell.innerHTML = 'roll' + (i+1);
        
//         let rolls = []
//         for(let i =0; i<numDice;i++)
//         {
//             rolls[i]=getRandomInteger(1,6);
//         }
//         for(let i=0;i<numDice;i++)
//         {
//             NewCell = newRow.insertCell();
//             NewCell.innerHTML = rolls[i];
//         }
        
//     }


// }

function findMode(arr)
{
  

  let object = {}

  for (let i = 0; i < arr.length; i++) {
    if (object[arr[i]]) {
     
      object[arr[i]] += 1
    } else {
      
      object[arr[i]] = 1
    }
  }

  
  let biggestValue = -1
  let biggestValuesKey = -1

  Object.keys(object).forEach(key => {
    let value = object[key]
    if (value > biggestValue) {
      biggestValue = value
      biggestValuesKey = key
    }
  })

  return biggestValuesKey
}

function findMedian(arr)
{
    if (arr.length == 0) {
        return; 
      }
      arr.sort((a, b) => a - b); 
      const midpoint = Math.floor(arr.length / 2); 
      const median = arr.length % 2 === 1 ?
        arr[midpoint] : 
        (arr[midpoint - 1] + arr[midpoint]) / 2; 
      return median;
}

function findMean(arr)
{
    var sum =0;
    var numItems = arr.length;
    var avg = 0;
    for(let i=0;i<numItems;i++)
    {
        sum+=arr[i];
    }

    avg = sum/numItems;
    return avg;

}