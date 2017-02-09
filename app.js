'use strict';
var play_game = confirm('Do you want to play a game?');
if (play_game == true) {

  var final_score = document.querySelector('#app p');
  var questions = ['Do you think I like Monkeys?', 'Is my favorite color red?', 'Do I wear glasses?','Am I cool?', 'Do I like Bieber?', 'What is my favorite number?', 'Can you guess a state that I have lived in besides Washington?'];
  var answers = ['yes', 'no', 'yes', 'yes', 'no', 5, true];
  var bad_messages = ['I love monkeys you dont? ', 'C\'mon its blue dude!', 'Hmm dude I wear them almost every Day', 'Wow...', 'No one like biebs !!', 'ahh too bad try again'];
  var good_messages = ['I know right monkeys are the coolest!', 'My faves blue but in a cool way', 'Well yeah that ones obvious', 'Well thanks ;)', 'biebs = the worst', 'Nice idk how you knew that','Wow seriously are you stalking me???'];
  var score = 0;
  var city = ['oakland', 'atlanta', 'la', 'houston', 'greenville', 'seattle'];


  alert('Answer the question with a y/n answer please!');

  for(var i = 0; i < questions.length; i++){
    if (i < 5){
      var user_answer = prompt(questions[i], 'yes/no').toLowerCase();
      if (user_answer === answers[i] || user_answer[0] === answers[i][0]){
        console.log('Correct');
        alert(good_messages[i]);
        score += 1;
      }else {
        alert(bad_messages[i]);
        console.log('Wrong');
      }
    } else if (i === 5){
      var guess = 0;
      alert('Answer the question with a Number 1-10 please!');
      do {
        user_answer = parseInt(prompt(questions[i], '10'));
        guess++;
        if (user_answer === 5) {
          console.log('Correct');
          alert(good_messages[i]);
          score += 1;
        } else {
          if (user_answer < 5){
            alert('ahh too low');
          }else{
            alert('ahh too high');
          };
          console.log('Wrong number');
        }
      }while(user_answer !== answers[i] && guess < 4);

    } else if (i === 6){
      var tries = 6;
      do {
        user_answer = prompt(questions[i], 'Toronto');
        tries--;
        for(var a = 0; a < city.length; a++){
          if (user_answer === city[a]) {
            console.log('Correct');
            alert(good_messages[i]);
            score += 1;
            answers[i] = false;
          };
        };
        if (answers[i] === true){
          alert('You have ' + tries + ' more tries \n Some of the possibe answers..' + city.toString() );
        };
      }while(answers[i] === true && tries > 0);
    }

  };

  final_score.innerHTML = score + '/7';
  console.log(score + '/7');
}