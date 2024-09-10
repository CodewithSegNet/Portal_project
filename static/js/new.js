window.addEventListener('load', function() {
  document.querySelector('.preloader').style.display = 'none';
});

$(document).ready(function () {
  $('.newsletter-inner').submit(function (e) {
    e.preventDefault(); // Prevent form submission
    var formData = {
      email: $(this).find('.common-input').val()
    };
    var url = $(this).attr('action'); // Get the form's action URL
    $.ajax({
      type: 'POST',
      url: url,
      contentType: 'application/json',
      data: JSON.stringify(formData),
      success: function (response) {
        // Handle success response
        alert(response.message);
        location.reload(); // Reload the page
      },
      error: function (xhr, status, error) {
        // Handle error response
        console.error(error);
        alert("An error occurred while sending your message. Please try again later.");
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const togglePassword = document.querySelector('#togglePassword');
  const passwordField = document.querySelector('#password');

  togglePassword.addEventListener('click', () => {
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Update button text or icon based on visibility
    togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
  });
});






$(document).ready(function() {
	$('.sidebar-item').click(function(e) {
	  e.preventDefault();
	  // Get the data-content attribute value
	  var contentToShow = $(this).data('content');

	  // Hide all content sections
	  $('.content-section').hide();

	  // Show the selected content section
	  $('#' + contentToShow).show();
	});
  });



const profileImage = document.getElementById('profileImage');
const fileInput = document.getElementById('fileInput');

profileImage.addEventListener('click', () => {
  fileInput.click(); 
});

// Optional: Update the image preview after selection
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImage.src = e.target.result; 
    }
    reader.readAsDataURL(file);
  }
});


  function attachPaginationListeners() {
      document.querySelectorAll('.pagination-link').forEach(link => {
          link.addEventListener('click', function(event) {
              event.preventDefault();

              // Fetch the desired page number from the data-page attribute
              const page = this.getAttribute('data-page');

              // Fetch notifications for the selected page using AJAX
              fetch(`/students/dashboard?page=${page}`)
                  .then(response => response.text())
                  .then(data => {
                      // Parse the returned HTML response
                      const parser = new DOMParser();
                      const doc = parser.parseFromString(data, 'text/html');

                      // Extract the updated notifications section
                      const updatedNotifications = doc.querySelector('#notifications .all-notification');
                      const updatedPagination = doc.querySelector('#notifications .pagination');

                      // Replace the current notifications and pagination
                      document.querySelector('#notifications .all-notification').innerHTML = updatedNotifications.innerHTML;
                      document.querySelector('#notifications .pagination').innerHTML = updatedPagination.innerHTML;

                      // Re-attach event listeners to the new pagination links
                      attachPaginationListeners();

                      // Scroll to the notifications section
                      document.getElementById('notifications').scrollIntoView({ behavior: 'smooth' });
                  })
                  .catch(error => console.error('Error fetching notifications:', error));
          });
      });
  }

  // Initial attachment of event listeners
  document.addEventListener('DOMContentLoaded', function() {
      attachPaginationListeners();
  });


// Function to display the full message content and other details in the message section
function showMessage(topic, date, fullMessage) {
    // Update the message content with the correct details
    document.getElementById('message-topic').innerText = topic || 'No topic available';
    document.getElementById('message-date').innerText = date || 'No date available';
    document.getElementById('message-body').innerText = fullMessage || 'No message available';

    // Hide the notifications section and show the full message section
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('notifications').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}

// Function to hide the full message section and show the notifications section
function hideMessage() {
    document.getElementById('notifications').style.display = 'block';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('message').style.display = 'none';
}

// Attach event listeners to all "View" links once the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const viewLinks = document.querySelectorAll('.view-message-link');
    viewLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Retrieve the message details from data attributes
            const fullMessage = this.getAttribute('data-message');
            const topic = this.getAttribute('data-topic');
            const date = this.getAttribute('data-date');

            // Call showMessage to update the message display section
            showMessage(topic, date, fullMessage);
        });
    });
});

// Function to hide the full message and return to notifications
function hideMessage() {
    // Show notifications and hide message section
    document.getElementById('notifications').style.display = 'block';
    document.getElementById('message').style.display = 'none';
}



  // Function to hide the full message and return to notifications
  function hideMessage() {
      // Show notifications and hide message section
      document.getElementById('notifications').style.display = 'block';
      document.getElementById('message').style.display = 'none';
  }


