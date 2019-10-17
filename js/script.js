/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes array object.
var quotes = [
  {
    quote:"Wait a minute. Wait a minute Doc, uh, are you telling me you built a time machine… out of a DeLorean?",
    character:"Marty McFly",
    citation:"Back To The Future",
    year:1985,
    filmtime:[1.50,],
    tags: ["humor"]
  },
  {
    quote:"Doc! You disintegrated Einstein",
    character: "Marty McFly",
    citation: "Back To The Future",
    year:1985,
    tags:["humor"]
  },
  {
    quote:"Last night, Darth Vader came down from planet Vulcan and told me that if I didn't take Lorraine out that he'd melt my brain.",
    character: "George McFly ",
    citation: "Back To The Future Part 2",
    year:2002,
    tags:["humor", " crazy"]
  },
  {
    quote:"Nobody calls me chicken!",
    character:"Marty McFly",
    citation: "Back To The Future Part 2",
    year: 2002,
    filmtime:["1.20", "48.20", "10.30" ],
    tags:["bravery"]
  },
  {
    quote:"If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious s***.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:[]
  },
  {
    quote:"Why don’t you make like a tree and get outta here?",
    character:"Biff Tannen",
    citation:"Back To The Future Part 2",
    year:"",
    tags:[]
  },
  {
    quote:"I guess you guys aren’t ready for that yet but your kids are gonna love it.",
    character:"Marty McFly",
    citation:"Back To The Future Part 2",
    year:1970,
    tags:[]
  },
  {
    quote:"Roads? Where we’re going, we don’t need roads.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:2015,
    tags:["popular"]
  },
  {
    quote:"I'm sure in 1985 plutonium is in every corner drug store, but in 1955, it's a little hard to come by! I'm sorry, but I'm afraid you're stuck here",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:[]
  },
  {
    quote:"Einstein has just become the worlds first time traveler. I sent him into the future.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:1985,
    tags:[]
  },
  {
    quote:"Is there a problem with Earth's gravitational pull in the future? Why is everything so heavy?",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:["science", " humor"]
  },
  {
    quote:"If you put your mind to it you can accomplish anything.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:["inspirational"]
  },
];

// variables that grab HTML form index.HTML
const outputDiv = document.querySelector('#quote-box');
const quoteP = document.querySelector('.quote');
const buttonClick = document.getElementById('loadQuote');
const bodyElement = document.getElementsByTagName("BODY")[0];

// randomNums returns a random number between to predifined values parameters max and min.
function randomNums(max, min){
  return Math.floor(Math.random()*(max-min)+min);
}

// randomColor returns an rgb value that is added to a stlye property on the body element
function randomColor(){
  let r = randomNums(150,210); 
  let g = randomNums(150,210); 
  let b = randomNums(140,200); 
  bodyElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    return bodyElement;
  }

// printQuote contains a function to grab a random quote from quotes, then uses a series of if statments to build a block of HTML that is then attached index.HTML. 
function printQuote(){

  function getRandomQuote() {
    let randomQuote = quotes[randomNums(quotes.length, 0)];
    return randomQuote;
  }

  let randomQuoteObj = getRandomQuote();
  
  randomColor();

    html = '';
      if(randomQuoteObj.quote){
        html += '<p class="quote">' + randomQuoteObj.quote + '</p>';
      }
      if(randomQuoteObj.character ){
        html += '<p class="source">' + randomQuoteObj.character + ', ';
      }
      if(randomQuoteObj.citation) {
          html += '<span class="citation">' + randomQuoteObj.citation + '</span>';
      }
      if(randomQuoteObj.year) {
          html += '<span class="year">' + randomQuoteObj.year + ',' + '</span>'
      } else {
          html += '<span class="year"> Some Time Back to the Future! </span>';
      }
      if (randomQuoteObj.tags){
        html += '<span class="citation">' + ' ' + randomQuoteObj.tags +  '</span>';
      }
      html += '</p>';
  
 outputDiv.innerHTML = html;
 console.log(html);
}


// var interal sets off a  five secomd setInterval timer on the printQuote function.
var interval = setInterval(printQuote, 5000);

// clicked button  uses the variable interval to stop the timer, calls a new quote so you dont have a delay, then calls startInterval function to start the timer again.
function clickedButton(){
  clearInterval(interval);
  printQuote();
  startInterval();
  
  console.log("you clicked the button");
}

// startInterval sets an interval of five seconds off (called by clickedButton)
function startInterval(){
  return interval = setInterval(printQuote, 5000);
}

// the following timer (consoleTimer) helps to debug any delay in transition from a timer that runs on page load to a timer that runs on a event listener.
var consoleTimer = setInterval(consoleTimerFunction, 1000);

// consoleTimerFunction uses the built in Js Date object and takes the time string from this and directs this to the console to be shown every second.
function consoleTimerFunction() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  console.log(time)
}

// this is a click event listener on the button with th id of loadQuote in index.html 
buttonClick.addEventListener('click', clickedButton);

/********************
 FURTHER DEVELOPMENT

 i) create a catch so that you wont see the same quote twice in a row
 ii) reorganise punctuation so that it can be altered from traversing the DOM (take out pseudo CSS elements)
 ****************/

