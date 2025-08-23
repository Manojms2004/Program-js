
//-------------String Reverse-----------------
let str = "Raju raw";
let rev = "";
for(let i = str.length - 1 ; i >= 0 ; i--)
{
   rev += str[i];
}

console.log(rev)

//------------reverse of Array---------------

let arr = Array(10,20,30,40)
let reversedArray = [];

for(let i = arr.length-1 ; i >= 0;i--)
{
  reversedArray +=  arr[i] + ',';
}

console.log(reversedArray)

//------------String reverse using Built-in---------------

let str1 = 'String is a value'


let reversed = str1.split('').reverse().join('')

console.log(reversed)

//-----------String Word reverse------------------------

function stringReverse(sen)
{
    let words = sen.split(' ')
    let first = words[1].split('').reverse().join('')
    words[1] = first
    return words.join(' ');
}

console.log(stringReverse("hello world"))

//-----------String Word reverse Method -2------------------------

function stringReverse(sen)
{
    let words = sen.split(' ')
    let first = words[0]
    let reverse = '';
    for(let i = first.length - 1; i >= 0 ; i--)
    {
        reverse += first[i]
    }

    words[0] = reverse

    return words.join(' ')
    
}

console.log(stringReverse("hello world"))

//------------Odd and Even Number Printing

let range = 6;
//In Even and Odd Number
for(i = 1 ;i <= range ;i++)
{
  if(i % 2 != 0)
  {
    console.log(i)
  }
  
}

//Checking if the Number is even or Odd
if(!(range % 2) == 0)
{
  
  console.log(range+" is Odd Number")
}
else
{
  console.log(range+" is Even Number")
}


//Promises Example

let val = 4;

let pro = new Promise((res,rej) =>{
  if(val % 2 != 0)
  {
    rej("rejected")
  }
  else{
    res("resolved")
  }
})

pro.then((v) =>{
  console.log(v)
})
.catch((e) =>{
  console.log(e)
})


//Fetching API data using Async and await Method

async function apiDataFetch()
{
  let res = await fetch("https://dummyjson.com/todos")

  let data = await res.json()

  console.log(data)
}

apiDataFetch()

//map() example Demo

let array = [1,2,3,4,5,6]

let sum1 = 0;

array.map((e) =>{
  if(e % 2 == 0)
  {
    sum1 = sum1 + e
  }
    
})

console.log(sum1)

//map() example - 2

let array1 = [1,2,3,4,5,6]

let sum = 0;
let temp = 0;

array1.map((e) =>{
    temp = e * 2
    sum = sum + temp
})

console.log(sum)

//Filter Method Demo


let filVal = array.filter((e) =>{
  if(e % 2 == 0)
  {
    return e
  }
})

console.log(filVal)

//[2, 4, 6]

//Reduce Method

let arr2 = [1,2,3,4]


let sum2 = 0;
let reduced = arr2.reduce((acc,cur) =>{
  cur = cur * 3
  if(cur % 2 == 0)
  {
      sum2 =  acc + cur
  }
  return sum2
  
},0)

console.log(reduced)

//String Palindrome Checking
let str2  = "por"
let rev1 = ""

for(let i = str2.length - 1;i >= 0 ; i--)
{
  rev1 = rev1 + str[i]
}
if(str2 === rev1)
{
  console.log(str2+" is a Palindrome")
}
else{
  console.log(str2+" is not a Palindrome")
}

//Printing the Unique Elements
let arr3 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = arr3.filter((item, index) => {
 return arr3.indexOf(item) === index
});

console.log(uniqueArr);

//Mulitple ways to fetch data


//Method 1 of Api Fetching

async function fetchApiData()
{
  let apiData = await fetch("https://dummyjson.com/recipes")

  let data = await apiData.json()

  console.log(data)
}

fetchApiData()
 
//Method 2 of Api Fetching
 async function demoApi()
 {
    try{
      let apiRes = await fetch("https://dummyjson.com/recipes")

      let dataVal = await apiRes.json()

      console.log(dataVal)
    }
    catch(e){

      console.log(e)
    }
 }
 demoApi()

//Method 3 of Api Fetching


function fetchApiJson()
{
  fetch("https://dummyjson.com/recipes")
  .then((res) =>{
    return res.json()
  })
  .then((data) =>{
    console.log(data)
  })
  .catch((e)=>{
    console.log(e)
  })
}
fetchApiJson()

//Method 4 of Api Fetching

(async function()
{
  try{
    let resi = await fetch("https://dummyjson.com/recipes")

    let data1 = await resi.json()

    console.log(data1)
  }
  catch(e){
    console.log(e)
  }
  
})()




