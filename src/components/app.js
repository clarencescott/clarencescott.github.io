document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Simple validation or data collection can go here
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;
      const service = contactForm.querySelector('select').value;
      
      console.log(`Message from: ${name} (${email})`);
      console.log(`Selected Service: ${service}`);
      console.log(`Message: ${message}`);
      
      alert("Your message has been sent! We'll get back to you soon.");
      
      // Reset the form after submission
      contactForm.reset();
    });
  });
  