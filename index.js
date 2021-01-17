// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    const change = document.querySelector("p#text");
    change.innerHTML = 'This is really cool!'

  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );