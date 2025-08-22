
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
