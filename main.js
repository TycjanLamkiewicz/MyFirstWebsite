function countingDown()
{

let today = new Date();

let day = today.getDate();
if(day < 10) day = "0" + day;

let month = today.getMonth();
if(month < 10) month = "0" + month;

let year = today.getFullYear();

let hour = today.getHours();
if(hour < 10) hour = "0" + hour;

let minute = today.getMinutes();
if(minute < 10) minute = "0" + minute;

let second = today.getSeconds();
if(second < 10) second = "0" + second;

document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;

setTimeout("countingDown()",1000);

}




function check()
{
    let liczba = document.getElementById("field").value;
    
    if (liczba>0) document.getElementById("result").innerHTML="dodatnia";
    else if (liczba<0) document.getElementById("result").innerHTML="ujemna";
    else if (liczba==0) document.getElementById("result").innerHTML="zero";
    else document.getElementById("result").innerHTML="to nie jest liczba.";

}




function printCurrentPage()
{
window.print();
}









const min = 1;
const max = 10;
const random = Math.floor(Math.random()*(max-min+1)+min);
console.log(random);




if (confirm("Czy jesteś pewien, że chcesz kontynuować?")) {
    alert("No to kontynuuj...");
} else {
    alert("Przykro mi, że nie chcesz kontynuować...");
}





const name = prompt("Podaj swoje imię:");

if (name) {
    alert("Witaj " + name);
} else {
    alert("Anulowałeś akcję, a okienko zwróciło " + name);
}
