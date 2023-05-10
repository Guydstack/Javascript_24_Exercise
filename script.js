// EX 1
// program to check if the number is even or odd
// take input from the user
let evenOrOddNum = document.getElementById("even_odd") 
evenOrOddNum.addEventListener('input', () => {
    
    //check if the number is even
    if (evenOrOddNum.value % 2 == 0) {
      document.getElementById("evorod").innerHTML = "The number is even.";

    // if the number is odd
    } else {
      document.getElementById("evorod").innerHTML = "The number is odd.";
    }
  });

 // EX 2 

// let user to input a set of numbers
function calculate() {
    let numInput = document.querySelector(".average").value;
    let nums = numInput.split(",");

 // calculate the average
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += parseInt(nums[i]);
    }
 // output the result to html
    let avg = sum / nums.length;
    document.querySelector(".average_result").innerHTML = avg;
}



// EX 3
// take the inputs from the user
function playerFunction() {
let playerOneName = document.querySelector("#user_name1").value
let playerOneSco = Number(document.querySelector("#user_sc1").value)
let playerTwoName = document.querySelector("#user_name2").value
let playerTowSco = Number(document.querySelector("#user_sc2").value)

// check the user with the highr number and print to the page
if (playerOneSco > playerTowSco){
    document.querySelector("#average_ply_result").innerHTML = playerOneName + " you have the highest score of " + playerOneSco + "," + " you are the winner!";
}else {
    document.querySelector("#average_ply_result").innerHTML = playerTwoName + " you have the highest score of " + playerTowSco + "," + " you are the winner!";
    }
}

// on mause over take the user name and add it to the text of the number fild
function myfunction(){

    let userInput1 = document.querySelector("#user_name1").value
    let userInput2 = document.querySelector("#user_name2").value
    if (userInput1.length > '2'){
        document.getElementById("user_input1").innerHTML = userInput1 + " please enter a number";
    }if (userInput2.length > '2'){
        document.getElementById("user_input2").innerHTML = userInput2 + " please enter a number";

    }
}


// EX 4
// add a 0 to time
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  // Curent time
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("my_time").innerHTML = time;
  // print בוקר טוב
  if (time <= '12'){
    document.querySelector("#time_greeting").innerHTML = "בוקר טוב"
    // print צהריים טובים
  }else if (time <= '18'){
    document.querySelector("#time_greeting").innerHTML = "צהריים טובים"
    // print ערב טוב
  }else if (time >= '18'){
    document.querySelector("#time_greeting").innerHTML = "ערב טוב"
  }

  // EX 5
   //Percentage calculator
  function percentage(num, per)
  {
    return (num/100)*per;
  }

// Take value from the user
  function trainFunction(){
    let train = 120
    let trainWag = document.getElementById("train_wag").value
    let trainTimeDep = document.getElementById("time_dep").value
    let trainDriverSel = document.getElementById("driver_sel").value
    let perPrice = 6.60

    if (trainTimeDep === "Non"){
       train = percentage(120, 90)
    }

    else if (trainTimeDep === "Evning"){
        train = percentage(120, 70)
    }

    let trainCal = (trainWag * train * perPrice) - trainDriverSel 
    let trainSum = percentage(trainCal, 17)
    let trainTotal = Math.round(trainCal - trainSum) 

    document.getElementById("train_total_sum").innerHTML = "רווח נטו מהפעלת קו הרכבת:" + " " + trainTotal + "₪";
  }

 // EX 6
// Car models with orignl price and payment option
 function toyotaModels(){
    let corolla = 150000
    let camry = 170000
    let prius = 160000
    let paymentOp = Number(document.querySelector("#payment_option").value)
// calculator 5% discount
    let corollaDe = corolla - percentage(corolla, 5)
    let camryDe = camry - percentage(camry, 5)
    let priusDe = prius - percentage(prius, 5)
    
    // enter valid payment option 1-24
    if (paymentOp === ''|| paymentOp === '0'){
        document.querySelector("#pay_per_mon_price").innerHTML = "הכנס את מספר התשלומים הרצוי"; 
    } 

    // if user input more the 24 payment error mas
    else if (paymentOp > '24'){
        document.querySelector("#pay_per_mon_price").innerHTML = "מספר התשלומים המקסימלי עומד על 24"; 
    }   

    // price after discount and price per month acording to user input
    else if (document.querySelector("#toyota_mod").value === "Corolla"){
        document.querySelector("#or_price").innerHTML = "מחיר לפניי הנחה:" + " " + corolla + "₪";
        document.querySelector("#de_price").innerHTML = "מחיר אחרי הנחה:" + " " + corollaDe + "₪";
        document.querySelector("#pay_per_mon_price").innerHTML = "סכום עבור כל תשלום:" + " " + Math.round(corollaDe / paymentOp) + "₪";
    }
    // price after discount and price per month acording to user input
    else if (document.querySelector("#toyota_mod").value === "Camry"){
        document.querySelector("#or_price").innerHTML = "מחיר לפניי הנחה:" + " " + camry + "₪";
        document.querySelector("#de_price").innerHTML = "מחיר אחרי הנחה:" + " " + camryDe + "₪";
        document.querySelector("#pay_per_mon_price").innerHTML = "סכום עבור כל תשלום:" + " " + Math.round(camryDe / paymentOp) + "₪"; 
    }
    // price after discount and price per month acording to user input
    else if (document.querySelector("#toyota_mod").value === "Prius"){
        document.querySelector("#or_price").innerHTML = "מחיר לפניי הנחה:" + " " + prius + "₪";
        document.querySelector("#de_price").innerHTML = "מחיר אחרי הנחה:" + " " + priusDe + "₪";
        document.querySelector("#pay_per_mon_price").innerHTML = "סכום עבור כל תשלום:" + " " + Math.round(priusDe / paymentOp) + "₪"; 
        }  
 }

 // EX 7
 // take value from user
function taxiJerToTel(){
let taxi = document.querySelector("#taxi_person").value
// if leas the 12 person print the remaining 
if (taxi < 12){
    document.querySelector("#taxi_cap").innerHTML = "מספר הנוסעים הוא" + " " + taxi + " " + "נדרשים 12 נוסעים לנסיעה";
// if 12 person the taxi can drive
}else if (taxi === '12'){
document.querySelector("#taxi_cap").innerHTML = "המונית מלאה ויכולה לצאת לדרך";
// over 12 person print the number of person that stay in the station
}else if (taxi > '12'){
    document.querySelector("#taxi_cap").innerHTML = "מספר הנוסעים שנשארים בתחנה הוא:" + " " + (taxi - 12);
}
}

 // EX 8
// take value from user and calculator percentage acording to 
 function travelPer(){
    let numOfKids = document.querySelector("#travel_person").value
    let security = percentage(numOfKids, 3.333)
    let firstHelp = percentage(numOfKids, 2)
    document.querySelector("#sec_help").innerHTML = "מספר המאבטחים הדרושים הוא:" + " " + (Math.ceil(security));
    document.querySelector("#par_help").innerHTML = "מספר החובשים הדרושים הוא:" + " " + (Math.ceil(security));
    document.querySelector("#first_help").innerHTML = "מספר ערכות עזרה ראשונה הדרושות הוא:" + " " + (Math.ceil(firstHelp));
 }

 // EX 9
// tack value from user and check if true or fals
function myFoo(){
    let foo = document.querySelector("#conditional_value").value;
    if (foo === "Thursday" || foo === "thursday" || foo === '5'){
      console.log("Thursday! Yay!");
    } else console.log("Bye")
}

 // EX 10
 // BNI calculator
 function bmi(kg, hight)
 {
   return kg/(hight*hight)*10000;
 }

function bmiCalculator(){
    // take value from user and calculat the BNI
let bmiKg = document.querySelector("#bmi_kg").value
let bmiHight = document.querySelector("#bmi_hight").value
let bmiResult = bmi(bmiKg, bmiHight)
document.querySelector("#bmi_result").innerHTML = Math.round(bmiResult);
// print result to the user
if (bmiResult <= 18){
    document.querySelector("#bmi_notice").innerHTML = "Your BMI is to low!"
}else if (bmiResult >= 25){
    document.querySelector("#bmi_notice").innerHTML = "Your BMI is to high!"
}else document.querySelector("#bmi_notice").innerHTML = "Your BMI is very good!"
}

 // EX 11
 // check the type of foo and print result to console
function typeOfFoo(){
    foo = "am I correct"
    if (typeof foo === "string"){
        console.log("He is correct")
    }else console.log("He is NOT correct")
}

 // EX 12
 // Root the user number input
function rootMyNum(){
 let bali = 100
 let baliRoot = Math.sqrt(bali);
 document.querySelector("#root_result").innerHTML = "The root of 100 is " + baliRoot + ".";
}

 // EX 13
 // by user click display a new button 
 function myButton(){
    document.querySelector("#button_to_display").style.display = "inline-block";
 }

 // EX 14
 // Pop up a new window
function newPageOpen(){
    window.open("https://giphy.com/gifs/work-computer-laptop-5GS13A3jXN9xSQF6HL/fullscreen", "_blank", "resizable=yes,top=500,left=500,width=400,height=400");
}

 // EX 15
 // print the current date
 function mydate(){
    const currentDate = new Date();
    document.querySelector("#current_date").innerHTML = currentDate;
 }

 // EX 16
 // multiplay Hallo by the number of user input
 function perNum(){
    let personEnterdNum = document.querySelector("#person_number").value
    let perMessage = "Hello ";
    let multipliedHello = "";
    for (var i = 0; i < personEnterdNum; i++) {
        multipliedHello += perMessage;
      }
    document.querySelector("#repeatedly_number").innerHTML = multipliedHello;
 }
 
 // EX 17
  // repeadedly user input 10 times
 function perMulti10(){
    let personEnterdNum = document.querySelector("#person_any").value
    let perMessage = personEnterdNum;
    let multipliedHello = "";
    for (var i = 0; i < 10; i++) {
        multipliedHello += perMessage + " ";
      }
    document.querySelector("#repeatedly_input").innerHTML = multipliedHello;
 }

 // EX 18
 // check which input number is bigger and print result
function getTwoNumber(){
    let first = document.querySelector("#first_num").value
    let second = document.querySelector("#second_num").value
    let firstTrToNu = parseInt(first, 10);
    let secondTrToNu = parseInt(second, 10);
    if (firstTrToNu > secondTrToNu){
        alert (firstTrToNu + " you are bigger then " + secondTrToNu);
    }else alert (secondTrToNu + " you are bigger then " + firstTrToNu);
}

 // EX 19
//take value from user 
let slider = document.getElementById("my_tip");
let output = document.getElementById("tip_value");
output.innerHTML = slider.value + " % Tip";
slider.oninput = function() {
output.innerHTML = this.value + " % Tip";
}


function whatIsMyTip(){
 // calculator a bill and add tip present to it then print result
 let mySum = document.querySelector("#total_bill").value
let addTip = document.querySelector("#my_tip").value
let mySumTrToNu = parseInt(mySum, 10);
let addTipTrToNu = parseInt(addTip, 10);
let total = percentage(mySumTrToNu, addTipTrToNu) 
document.querySelector("#total_with_tip").innerHTML = "סכום לתשלום כולל שירות:" + " " + (total + mySumTrToNu) + "₪";
}

 // EX 20
 // Increase and Decrease a number from user input
const incMyNum = document.getElementById("inc_num");
incMyNum.addEventListener('click',() => document.getElementById("inc_dec_num").textContent++);

const decMyNum = document.getElementById("dec_num");
decMyNum.addEventListener('click',() => document.getElementById("inc_dec_num").textContent--);

const restMyNum = document.getElementById("rest_num");
restMyNum.addEventListener('click',() => document.getElementById("inc_dec_num").textContent=0);


 // EX 21
function getRandomQuote() {
    // print rendomly a diffrint quotes on every click
    const quotes = [
        "Life comes from the earth and life returns to the earth. - Zhuangzi",
        "We are here to add what we can to life, not to get what we can from life. - William Osler",
        "The art of life is to know how to enjoy a little and to endure very much. - William Hazlitt",
        "If you change the way you look at things, the things you look at change. - Wayne Dyer",
        "For the great doesn't happen through impulse alone, and is a succession of little things that are brought together. - Vincent Van Gogh",
        "Perfection is not attainable. But if we chase perfection we can catch excellence. - Vince Lombardi",
        "You have succeeded in life when all you really want is only what you really need. - Vernon Howard",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "To do the useful thing, to say the courageous thing, to contemplate the beautiful thing: that is enough for one man's life. - T.S. Eliot",
        "When I hear somebody sigh, 'Life is hard,' I am always tempted to ask, 'Compared to what? - Sydney J. Harris'"
    ];
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    document.querySelector("#rendom_quote").innerHTML = randomQuote;
}

 // EX 22
 // print in console student names from Arry
function getStudentNames(){
    const studentNames = [ "Guy","Avi","Yoni","Beni","Nir"];
    console.log(studentNames)
}

 // EX 23
 // Arry of books name
 const books = ["In Search of Lost Time by Marcel Proust",
 "Ulysses by James Joyce","Don Quixote by Miguel de Cervantes",
 "One Hundred Years of Solitude by Gabriel Garcia Marquez"
 ];
 // add new books name from user input
 let newBooks = document.querySelector("#book_name");

 function addBooks(){
    books.push(newBooks.value);
    refresh()
}
//creat a list for exciting value and user value
function bookName(){
    let list = "<ul>";
    for (let i = 0; i < books.length; i++) {
      list += "<li>" + books[i] + "</li>";
    }
    document.querySelector("#books_list").innerHTML = list;
} 

// refrash the input fild after submit
function refresh(){
    document.querySelector("#book_name").value ="";
}

