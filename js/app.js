// My next step would be to refactor these functions and use event delegation to simplify the code...

// Toggle box 1
document.getElementById('box1').addEventListener('mouseover', event => {
  showDiv();
});

document.getElementById('box1').addEventListener('mouseout', event => {
  hideDiv();
});

function showDiv() {
  var element = document.getElementById("expand1");
  element.classList.toggle("mystyle");
  element.innerHTML += " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ";
}

function hideDiv() {
  var element = document.getElementById("expand1");
  element.innerHTML = "<a href='#'>Learn about the JD program.</a>";
  element.classList.toggle("mystyle");
}

// Toggle box 2
document.getElementById('box2').addEventListener('mouseover', event => {
  showDiv2();
});

document.getElementById('box2').addEventListener('mouseout', event => {
  hideDiv2();
});

function showDiv2() {
  var element = document.getElementById("expand2");
  element.classList.toggle("mystyle");
  element.innerHTML += " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ";
}

function hideDiv2() {
  var element = document.getElementById("expand2");
  element.innerHTML = "<a href='#'>Find out about our SJD degree.</a>";
  element.classList.toggle("mystyle");
}

// Toggle box 3
document.getElementById('box3').addEventListener('mouseover', event => {
  showDiv3();
});

document.getElementById('box3').addEventListener('mouseout', event => {
  hideDiv3();
});

function showDiv3() {
  var element = document.getElementById("expand3");
  element.classList.toggle("mystyle");
  element.innerHTML += " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ";
}

function hideDiv3() {
  var element = document.getElementById("expand3");
  element.innerHTML = "<a href='#'>See what the LLM programs offer.</a>";
  element.classList.toggle("mystyle");
}

// Toggle box 4
document.getElementById('box4').addEventListener('mouseover', event => {
  showDiv4();
});

document.getElementById('box4').addEventListener('mouseout', event => {
  hideDiv4();
});

function showDiv4() {
  var element = document.getElementById("expand4");
  element.classList.toggle("mystyle");
  element.innerHTML += " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ";
}

function hideDiv4() {
  var element = document.getElementById("expand4");
  element.innerHTML = "<a href='#'>Learn about the JD program.</a>";
  element.classList.toggle("mystyle");
}

// Use event delegation to simplify code
// var x = document.querySelector(".flex-container");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);

// function myFunction(evt) {
//   evt.preventDefault();
//   evt.target.innerHTML += "Moused over!<br>";
// }

// function mySecondFunction(evt) {
//   document.querySelector(".text-block").innerHTML += "Clicked!<br>";
// }

// function myThirdFunction(evt) {
//   document.querySelector(".text-block").innerHTML += "Moused out!<br>";
// }