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
  
  function determineWinner(getUserChoice,getComputerChoice){
    if (getUserChoice === getComputerChoice){
      return ("It's a tie");
    }

    if (getUserChoice === 'rock'){
      if (getComputerChoice === 'paper'){
        return "The computer won!";
      } else {
        return "You won!";
      }
    }

    if (getUserChoice === 'paper'){
      if (getComputerChoice === 'scissors'){
        return "Computer won!";
      } else {
        return "You won!";
      }
    }

    if (getUserChoice === 'scissors'){
      if (getComputerChoice === 'rock'){
        return 'Computer won!'
      } else {
        return 'You won!'
      }
    }
  }


  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();

    console.log('You threw ' + userChoice);
    console.log('Computer threw '+ computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
  }

  playGame();