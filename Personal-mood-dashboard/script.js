let task = document.getElementById("task"); 

task.style.fontFamily = "Montserrat, sans-serif";
task.style.fontSize = "24px";
task.style.fontWeight = "600";
task.style.textDecoration = "underline"; 
task.style.marginBottom = "45px";


let input = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");

input.style.marginBottom = "10px";
input.style.borderRadius = "10px";
input.style.height = "36px";
input.style.fontSize = "18px";
input.style.border = "2px solid purple"; 

greeting.style.fontSize = "24px";
greeting.style.fontWeight = "bold";

input.addEventListener("input", function() {
    let name = input.value;
    if (name === "") {
    greeting.innerText = "Hello, friend!";
    } else {
    greeting.innerText = "Hello, " + name + "! 👋";
    greeting.style.fontSize = "32px";
    greeting.style.color = "green"; 
    greeting.style.fontWeight = "bold";
    }
});


let box = document.getElementById("moodBox");
let btn1 = document.getElementById("growBox");
let btn2 = document.getElementById("shrinkBox");
let size = 150;   

box.style.border = "black 6px solid"; 
box.style.backgroundColor = "purple";
box.style.color = "white";
box.style.height = "150px";
box.style.width = "150px";
box.style.marginBottom = "20px"; 
box.style.textAlign = "center"; 
box.style.fontSize = "16px";
box.style.fontWeight = "600";
box.style.padding = "10px";

btn1.style.margin = "5px";
btn1.style.padding = "15px 18px";
btn1.style.border = "2px solid black";
btn1.style.backgroundColor = "purple";
btn1.style.color = "white";
btn1.style.cursor = "pointer";
btn1.style.borderRadius = "8px";
btn1.style.fontFamily = "Arial, sans-serif";
btn1.style.fontSize = "16px";
btn1.style.fontWeight = "600";

btn2.style.margin = "5px";
btn2.style.padding = "15px 18px";
btn2.style.border = "2px solid black";
btn2.style.backgroundColor = "purple";
btn2.style.color = "white";
btn2.style.cursor = "pointer";
btn2.style.borderRadius = "8px";
btn2.style.fontFamily = "Arial, sans-serif";
btn2.style.fontSize = "16px";
btn2.style.fontWeight = "600";

btn1.addEventListener("click", function() {
    size += 20;  
    box.innerText = "I am Growing!";    

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    setTimeout(() => {
    box.innerText = "";
    }, 1000);
});

btn2.addEventListener("click", function() {
    if (size > 70) {                 
    size -= 20;
    box.innerText = "I am Shrinking!";

    box.style.width = `${size}px`;
    box.style.height = `${size}px`; 

    setTimeout(() => {
    box.innerText = "";
    }, 1000);
    } 
}); 


let btn3 = document.getElementById("toggleButton"); 
let isDark = false;

btn3.style.marginTop = "10px";
btn3.style.marginBottom = "50px";
btn3.style.padding = "15px 18px";
btn3.style.border = "4px solid purple";
btn3.style.backgroundColor = "black";
btn3.style.color = "white";
btn3.style.cursor = "pointer";
btn3.style.borderRadius = "8px";
btn3.style.fontFamily = "Poppins, sans-serif";
btn3.style.fontSize = "18px";
btn3.style.fontWeight = "600";
btn3.style.width = "300px";
btn3.style.height = "80px";

document.body.style.transition = "background-color 0.5s, color 0.5s";

btn3.addEventListener("click", function() {
    if (!isDark) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    btn3.innerText = `Switch to Day Mode`;
    btn3.style.backgroundColor = "white";
    btn3.style.color = "black";

    isDark = true;
  } else { 
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    btn3.innerText = "Switch to Night Mode";
    btn3.style.backgroundColor = "black";
    btn3.style.color = "white";
    isDark = false;
  }  
});


let secret = document.getElementById("secretMessage"); 
let btn4 = document.getElementById("secretButton");

secret.style.display = "none"; 
secret.style.color = "gold";
secret.style.marginTop = "10px";
secret.style.marginBottom = "50px";
secret.style.padding = "15px 18px";
secret.style.fontFamily = "Comic Sans MS";
secret.style.fontSize = "32px";
secret.style.fontWeight = "600";

btn4.style.marginTop = "10px";
btn4.style.marginBottom = "50px";
btn4.style.padding = "15px 18px";
btn4.style.border = "4px solid purple";
btn4.style.backgroundColor = "white";
btn4.style.color = "black";
btn4.style.cursor = "pointer";
btn4.style.borderRadius = "8px";
btn4.style.fontFamily = "Arial, sans-serif";
btn4.style.fontSize = "18px";
btn4.style.fontWeight = "600";
btn4.style.width = "300px";
btn4.style.height = "80px";

btn4.addEventListener("click", function() {
    if (secret.style.display === "none") {
    secret.style.display = "block"; //show
    btn4.innerHTML = "Hide Secret";
    btn4.style.color = "gold";

  } else {
    secret.style.display = "none"; //hide
    btn4.innerHTML = "Show Secret";
    btn4.style.color = "black";
  }  
});


//Question: What is the difference between ".innerHTML" and ".innerText?

// Answer: .innerHTML reads/writes HTML content and can render tags, while .innerText reads/writes only plain visible text and shows HTML tags literally. 

