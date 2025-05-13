// 1. Event: Click to change color
document.getElementById("color-btn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffe4e1";
    document.getElementById("color-btn").textContent = "Clicked!";
  });
  
  // 2. Event: Hover effects
  document.getElementById("hover-box").addEventListener("mouseover", () => {
    document.getElementById("hover-box").style.color = "green";
  });
  document.getElementById("hover-box").addEventListener("mouseout", () => {
    document.getElementById("hover-box").style.color = "black";
  });
  
  // 3. Keypress detection
  document.getElementById("key-input").addEventListener("keyup", (e) => {
    document.getElementById("key-display").textContent = `You typed: ${e.key}`;
  });
  
  // 4. Bonus: Double-click action
  function revealSecret() {
    document.getElementById("secret-msg").classList.remove("hidden");
  }
  
  // 5. Simple image gallery
  const images = [
    "https://placekitten.com/300/200",
    "https://placekitten.com/301/200",
    "https://placekitten.com/302/200",
  ];
  let currentImg = 0;
  
  function nextImage() {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("gallery-img").src = images[currentImg];
  }
  
  // 6. Accordion toggle
  function toggleAccordion() {
    const content = document.getElementById("accordion-content");
    content.classList.toggle("hidden");
  }
  
  // 7. Form validation
  function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    const errorMsg = document.getElementById("form-error");
    errorMsg.textContent = "";
  
    if (!name || !email || !password) {
      errorMsg.textContent = "All fields are required.";
      return false;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      errorMsg.textContent = "Please enter a valid email.";
      return false;
    }
  
    if (password.length < 8) {
      errorMsg.textContent = "Password must be at least 8 characters.";
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  