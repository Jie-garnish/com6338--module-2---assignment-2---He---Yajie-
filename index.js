// Your code here
function greet() {
    var name = prompt("What is your name?");
  
    alert("Hello, " + name);
  
    var age = prompt("How old are you?");
  
    var ageNumber = parseInt(age);
  
    var hadBirthday = confirm("Have you had your birthday this year?");
  
    var currentYear = new Date().getFullYear();
  
    var birthYear;
    if (hadBirthday) {
      birthYear = currentYear - ageNumber;
    } else {
      birthYear = currentYear - ageNumber - 1;
    }
  
    alert("You were born in " + birthYear + ".");
  }