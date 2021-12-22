const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      return console.log('Error!');
    }
  }
  
  getUserChoice('Rock');
  getUserChoice('Scissors');
  getUserChoice('Paper');

  function getComputerChoice(){
    number = Math.floor(Math.random() * 3);
    switch(number){
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
    }
  }
  
  console.log(getComputerChoice());
  