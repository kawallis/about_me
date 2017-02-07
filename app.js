'use strict';

var final_score = document.querySelector("p");
var questions = ["Do you think I like Monkeys?", "Is my favorite color red?", "Do I wear glasses?","Am I cool?", "Do I like Bieber?"]; 
var answers = ["yes", "no", "yes", "yes", "no"]; 
var bad_messages = ["I love monkeys you dont? ", "C'mon its blue dude!", "Hmm dude I wear them almost every Day", "Wow...", "No one like biebs !!"];
var good_messages =["I know right monkeys are the coolest!", "My faves blue but in a cool way", "Well yeah that ones obvious", "Well thanks ;)", "biebs = the worst"];
var score = 0; 

alert("Answer the question with a y/n answer please!"); 

for(var i = 0; i < questions.length; i++){
    
    var user_answer = prompt(questions[i], "yes/no").toLowerCase();
    if (user_answer === answers[i] || user_answer[0] === answers[i][0]){
        console.log("Correct"); 
        alert(good_messages[i]);
        score += 1; 
    }else {
        alert(bad_messages[i]); 
        console.log("Wrong"); 
    }
};

final_score.innerHTML = score + "/5"; 
console.log(score + "/5"); 