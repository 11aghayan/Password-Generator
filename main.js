

function generatePassword(length) {
  let password = '';
  const randomize = ['string', 'STRING', 'num'];

  for (let i = 0; i < length; i++) {
    const type = Math.floor(Math.random() * 4);
    let char;

    if (!type) {
      char = Math.floor(Math.random() * 26) + 97;
    } else if (type === 1) {
      char = Math.floor(Math.random() * 26) + 65;
    } else {
      char = Math.floor((Math.random() * 10)) + 48;
    }
    
    password += String.fromCharCode(char);  
  }

  return password;
}


const display = document.querySelector('.display');
const btn = document.querySelector('.btn');
const copyBtn = document.querySelector('.copy-btn');
const copyMessage = document.querySelector('.copy-message');
const lengthRange = document.querySelector('.length');
const lengthText = document.querySelector('.length-text');
let timerID;

lengthText.innerHTML = "Length: " + lengthRange.value;

lengthRange.addEventListener('input', () => {
  lengthText.innerHTML = "Length: " + lengthRange.value;
});

btn.addEventListener('click', () => {
  display.innerHTML = generatePassword(lengthRange.value);
});

console.log(timerID);
copyBtn.addEventListener('click', () => {
  clearTimeout(timerID);
  console.log(timerID);
  navigator.clipboard.writeText(display.innerHTML);

  copyMessage.setAttribute("show", "true");

    timerID = setTimeout(() => {
    copyMessage.setAttribute("show", "false");
  }, 1000);
  console.log(timerID);
});


