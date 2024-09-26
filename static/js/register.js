
document
  .getElementById("myForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formElement = document.getElementById("myForm");
    const formData = new FormData(formElement);

    const url = formElement.getAttribute("data-url");

    const plainFormData = Object.fromEntries(formData.entries());
    plainFormData.department_level = parseInt(plainFormData.department_level);


    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plainFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        const messageElement = document.getElementById("message");
        if (messageElement) {
          const messageContainer = messageElement.closest(".warning");
          if (messageContainer) {
            messageElement.innerHTML = data.error
              ? `<p class="text-danger">${data.error}</p>`
              : `<p class="text-success">Registration successful!</p>`;
            messageContainer.style.display = "block";
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        const messageElement = document.getElementById("message");
        if (messageElement) {
          const messageContainer = messageElement.closest(".warning");
          if (messageContainer) {
            messageElement.innerHTML = `<p class="text-danger">Something went wrong. Please try again.</p>`;
            messageContainer.style.display = "block";
          }
        }
      });
  });


  
