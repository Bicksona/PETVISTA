document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formMessage = document.getElementById("form-message");

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }
  const templateParams = {
    name: name,
    email: email,
    message: message,
  };

  emailjs
    .send("YOUR KEY", "YOUR KEY", templateParams)
    .then(
      function (response) {
        formMessage.innerText = "Thank you! Your message has been sent successfully.";
        formMessage.className = "success";
        formMessage.style.display = "block";
        document.getElementById("contact-form").reset();

        setTimeout(() => {
          formMessage.style.display = "none";
        }, 7000);
        document.getElementById("contact-form").reset();

      },
      function (error) {
        formMessage.innerText = "Oops! There was an error sending your message. Please try again.";
        formMessage.className = "error";
        formMessage.style.display = "block";

        setTimeout(() => {
          formMessage.style.display = "none";
        }, 7000);
        document.getElementById("contact-form").reset();

        console.error("EmailJS Error:", error);
      }
    );
});
