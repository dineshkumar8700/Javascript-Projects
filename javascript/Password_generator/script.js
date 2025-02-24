const passwordBox = document.getElementById('password');
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialSymbols = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/~\\';

const allChars = lowercase + uppercase + numbers + specialSymbols;

function createPassword() {
  let password = '';
  length = 18
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

  while(length> password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select()
    document.execCommand("copy")
    document.getElementById("copied").style.display ="block"    
}
