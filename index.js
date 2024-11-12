function checkPassword() {
  var password = prompt("Please enter the password:");
  if (password === "wgentech") {
    console.log(document.querySelector('.container'));
    
    document.querySelector('.container').style.display = 'flex';
  } else {
    alert("Incorrect password!");
    window.location.href = "https://github.com";
  }
}