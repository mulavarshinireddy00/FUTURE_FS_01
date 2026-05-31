emailjs.init({
  publicKey: "9Fm0XWOd5GrXgRjD_"
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_txur3pc",
    "template_vn33pem",
    this
  )
  .then(() => {
    alert("Message Sent Successfully!");
    this.reset();
  })
  .catch((error) => {
    alert("Failed to send message!");
    console.log(error);
  });
});