// Add form submission functionality
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    alert(`Message sent! 
  Name: ${name} 
  Email: ${email} 
  Message: ${message}`);
  });
  