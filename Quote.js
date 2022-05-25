// create an array inside a function and Retrieve the quote/author from array
const generateQuote = function(){

const quotes = [
    {
    quote : '"Don\'t wait for the good luck to happen."',
    name: "-AK Sharma"
},
{
    quote : '"Falling down is an accident but staying down is your choice."',
    name: "-Dr Vivek Bindra"
},
{
    quote : '"Don\'t worry about failure,you only have to be right once."',
    name : "-Drew Houston"
},
{
    quote :'"Nothing can dime the light which shines from within."',
    name : "-Dr Vivek Bindra"
},
{
    quote : '"If you can Dream It,You can Do It."',
    name : "-Walt Disney"
},
{
    quote : '"Lack of enthusiasm is just like a deflated tyre.You can\'t move on until you replace it."',
    name : "-Dr Vivek Bindra"
},
{
    quote : '"The Biggest Risk is Not taking any Risk."',
    name : " -Mark Zuckerberg"
}
];

// use the index generated tp display the quotesand author into the paragraph tag using innerHTML
let arrayIndex = Math.floor(Math.random() * quotes.length);
document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
document.getElementById("author").innerHTML = quotes[arrayIndex].name;
}

window.onload = function(){
    generateQuote();
}
// call the function onclick
    document.getElementById("generate").addEventListener('click',generateQuote);


