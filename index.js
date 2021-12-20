const body = document.querySelector('body');
const div_wrapper = document.createElement('div');
const play = document.createElement('p');
const btn = document.createElement('button');
const inp = document.createElement('input');
const result = document.createElement('p');
let randomNumber;
const sumAttempts = [];

div_wrapper.classList.add('wrapper');
play.classList.add('play');
btn.classList.add('start');
inp.classList.add('number_hidden');
result.classList.add('result');

body.appendChild(div_wrapper);
div_wrapper.appendChild(play);
div_wrapper.appendChild(btn);
div_wrapper.appendChild(inp);
div_wrapper.appendChild(result);

play.innerText = 'Guess the number from 0 to 9.';
btn.innerText = 'START';

btn.onclick = () => {
  randomNumber = Math.floor(Math.random() * 10);
  result.innerText = '';
  sumAttempts.splice(0, sumAttempts.length);
  inp.classList.remove('number_hidden');
  inp.classList.add('number_visible');
}

const resultColor = () => {
  if ( result.classList.contains('green')) {
    result.classList.remove('green');
    result.classList.add('red');
  } else {
    result.classList.add('red');
  }
}

inp.addEventListener ('input', () => {

  if (inp.value.length > 1) {
    return inp.value = inp.value.substr(0, 1);
  } else {
    sumAttempts.push(parseInt(inp.value)); 
  }

  if (parseInt(inp.value) !== 'number') {
    resultColor();
    result.innerText = 'Please enter the correct number.';
  }
  
  if (parseInt(inp.value) === randomNumber) {  
    
    if ( result.classList.contains('red')) {
      result.classList.remove('red');
      result.classList.add('green');
    } else {
      result.classList.add('green');
    } 

    result.innerText = `Victory.\n Number of attempts: ${sumAttempts.filter(item => item = item >= 0).length}`;  
  }

  if (parseInt(inp.value) > randomNumber) {
    resultColor();
    result.innerText = 'You entered more than the specified number.';
  }

  if (parseInt(inp.value) < randomNumber) {
    resultColor();
    result.innerText = 'You entered less than the specified number.';
  } 
});
