// RETIREMENT FUNCTION
function retirementYear(){
   
  // QUESTION 1 HOW OLD ARE YOU?
  var age = document.getElementById('Age').value;
  
    // QUESTION 2 HOW OLD DO YOU WANT TO BE WHEN YOU RETIRE?
  var retirementAge = document.getElementById('retirementAge').value;
  
  // IF EQUAL OR LESS THEN 100
  if(age <= 100){
     
  }

  // IF EQUAL OR LESS THEN 100
  if(retirementAge <= 100){
     
  }

 var retirement = parseFloat(retirementAge - age);
 var result = new Date().getFullYear() + retirement;
 
// SHOW THE RESULTS
document.getElementById('finalScoreText').innerHTML = "Your are "+ age + " years old. " ;
document.getElementById('retire').innerHTML = "You want to be " + retirementAge + " years old when you retire." ;
document.getElementById('result').innerHTML = "In " + result + " you can retire.";
  
}
// DISPLAY 
$(document).ready(function(){
  
    $(".btn2").click(function(){
        $(".test").show();
    });
});

