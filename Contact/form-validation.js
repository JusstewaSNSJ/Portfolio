document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".input");
  
    inputs.forEach(input => {
      input.addEventListener("blur", function() {
        if (input.checkValidity()) {
          input.classList.add("user-valid");
          input.classList.remove("user-invalid");
        } else {
          input.classList.add("user-invalid");
          input.classList.remove("user-valid");
        }
      });
  
      input.addEventListener("input", function() {
        if (input.checkValidity()) {
          input.classList.add("user-valid");
          input.classList.remove("user-invalid");
        } else {
          input.classList.add("user-invalid");
          input.classList.remove("user-valid");
        }
      });
    });
  });