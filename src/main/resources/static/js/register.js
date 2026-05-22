// Role selection logic
const roleButtons = document.querySelectorAll(".role-btn");
const roleInput = document.getElementById("role");

roleButtons.forEach(button => {
  button.addEventListener("click", function () {
    if (this.getAttribute("data-role") === "Admin") {
      alert("You don't have permission to create an Admin account.");
      return; // stop execution, don't assign role
    }

    // Remove 'active' class from all role buttons
    roleButtons.forEach(btn => btn.classList.remove("active"));
    // Add 'active' class to the clicked button
    this.classList.add("active");
    // Update hidden input with allowed role
    roleInput.value = this.getAttribute("data-role");
  });
});

// Registration form submission
document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;
  const registerBtn = document.getElementById("registerBtn");

  // Basic validation
  if (!name || !email || !phone || !password) {
    alert("Please fill out all fields.");
    return;
  }

  registerBtn.innerHTML = "Registering...";
  registerBtn.disabled = true;

  try {
<<<<<<< HEAD
    const response = await fetch("https://organs-donation-website-production.up.railway.app/auth/register", {
=======
    const response = await fetch("http://localhost:8080/auth/register", {
>>>>>>> 76a15d64b9c7d35b619d95400750348aebf7daaa
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, password, role })
    });

    if (response.ok) {
      alert("Registration successful! You can now log in.");
      window.location.href = "index.html";
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    alert("Error connecting to the server.");
  }

  registerBtn.innerHTML = "Register";
  registerBtn.disabled = false;
});
