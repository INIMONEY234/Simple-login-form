// Get elements
const userName = document.getElementById("usernamex");
const email = document.getElementById("Emailx");
const phoneNumber = document.getElementById("phonex");
const password = document.getElementById("Passwordx");
const popup = document.getElementById("popup");
const submitBTN = document.getElementById("submit");
const sound = document.getElementById("sound");

// Handle submit
submitBTN.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phoneNumber.value.trim();

  // Basic check to ensure fields are not empty
  if (!nameValue || !emailValue || !phoneValue) {
    popup.innerHTML = `<p>Please fill in all fields!</p>`;
    popup.style.display = "flex";
    setTimeout(() => popup.style.display = "none", 2500);
    return;
  }

  // Play sound
  sound.play();

  // Display popup message
  popup.innerHTML = `
  <h2 style="word-wrap: break-word; overflow-wrap: break-word; margin-right: 20px;">
    Welcome, ${nameValue}!
  </h2>
  <p style="margin-right: 20px;">You have successfully registered.</p>
  <p style="word-wrap: break-word; margin-right: 20px;">
    <strong>Email:</strong> ${emailValue}
  </p>
  <p style="word-wrap: break-word; margin-right: 20px;">
    <strong>Phone:</strong> ${phoneValue}
  </p>
`;

  popup.style.display = "flex";
  popup.style.height = "auto"; // allow flexible height
  popup.style.flexDirection = "column";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.textAlign = "center";

  // Clear input fields after showing popup
  userName.value = "";
  email.value = "";
  phoneNumber.value = "";
  password.value = "";

  // Hide popup after 3 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});
