const profileImage = document.getElementById("profileImage");
const fileInput = document.getElementById("fileInput");

profileImage.addEventListener("click", () => {
  fileInput.click();
});

// Optional: Update the image preview after selection
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});