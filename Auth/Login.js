// // Wrap the entire code inside a self-executing anonymous function to create a private scope
// ;(function ($) {
//   // Your code here

//   // Define any helper functions or variables needed for your injection script
//   var api_request = new APIRequest()

//   // Example helper function
//   async function createDesign() {
//     // Code to perform a specific action using jQuery

//     // Login Options
//     LoginOptions()

//     // Login PopUp

//     // Add click event to Login button
//     $('.login-btn button').on('click', function () {
//       // Toggle display of Login Options: MI | HRM
//       $('#login_options').toggle()
//     })

//     // Add click event to "Login To HRM"
//     $('#login_options #login_to_inout').on('click', function () {
//       // Display Login PopUp
//       LoginPopUp()

//       overlay.show()

//       $('body').addClass('modal-open')
//     })

//     // Email address validation
//     // Add click event to "Login Submit" button
//     $(document).on('click', '#login_submit', async function (e) {
//       var email = $('#emailID').val()

//       // Regular expression for email validation
//       var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//       // Remove previous validation error UI
//       $('.email-validation-error').remove()

//       if (email.trim() === '') {
//         displayValidationError('Please enter your email address.')
//       } else if (!emailRegex.test(email)) {
//         displayValidationError('Please enter a valid email address.')
//       } else {
//         // Email address is valid, proceed with login logic
//         // Your code here
//         const data = { email: email }
//         var path = '/ '
//         var type = 'POST'
//         var token = ''

//         api_request
//           .API(data, path, type, token)
//           .then(function (response) {
//             // Handle the successful API response here
//             console.log('Response', response)
//           })
//           .catch(function (error) {
//             // Handle any errors that occurred during the API call
//             console.error(error)
//           })

//         console.log('Response', response.json())
//       }
//     })

//     // Helper function to display validation error message
//     function displayValidationError(errorMessage) {
//       var errorElement = $(
//         '<div class="email-validation-error">' + errorMessage + '</div>',
//       )
//       $('.login-form-wrap').after(errorElement)
//     }

//     // Click event for close login modal
//     $(document).on('click', '.cancel_icon', function (e) {
//       overlay.hide()
//       $('body').removeClass('modal-open')
//       $('#login_popup').remove()
//     })

//     // Add event listener for Enter key press on email input field
//     $('#emailID').on('keyup', function (event) {
//       if (event.keyCode === 13) {
//         // Enter key was pressed
//         $('#login_submit .send_email').trigger('click')
//       }
//     })
//   }

//   // Execute your code when the DOM is ready
//   $(document).ready(function () {
//     // Your code here
//     // This code will be executed when the DOM has finished loading

//     // Example usage of helper function
//     createDesign()
//   })
// })(jQuery)
try {
  var Login = (function () {
    function Login() {
      this.login()
    }

    // *************************** All Basecamp Id  ***************************
    Login.prototype.login = function () {
      // Your code here
      // Define any helper functions or variables needed for your injection script
      var api_request = new APIRequest()

      // Example helper function
      async function createDesign() {
        // Code to perform a specific action using jQuery

        // Login Options
        // LoginOptions()

        // Login PopUp

        // Add click event to Login button
        $('.login-btn button').on('click', function () {
          // Toggle display of Login Options: MI | HRM
          $('#login_options').toggle()
        })

        // Add click event to "Login To HRM"
        $('#login_options #login_to_inout').on('click', function () {
          // Display Login PopUp
          LoginPopUp()

          overlay.show()

          $('body').addClass('modal-open')
        })

        // Email address validation
        // Add click event to "Login Submit" button
        $(document).on('click', '#login_submit', async function (e) {
          var email = $('#emailID').val()

          // Regular expression for email validation
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

          // Remove previous validation error UI
          $('.email-validation-error').remove()

          if (email.trim() === '') {
            displayValidationError('Please enter your email address.')
          } else if (!emailRegex.test(email)) {
            displayValidationError('Please enter a valid email address.')
          } else {
            // Email address is valid, proceed with login logic
            // Your code here
            const data = { email: email }
            var path = request.Login
            var token = ''
            const response = await api_request.API(data, path, 'POST', token)
            
            console.log('🚀 ~ file: Login.js:162 ~ response:', response)
          }
        })

        // Helper function to display validation error message
        function displayValidationError(errorMessage) {
          var errorElement = $(
            '<div class="email-validation-error">' + errorMessage + '</div>',
          )
          $('.login-form-wrap').after(errorElement)
        }

        // Click event for close login modal
        $(document).on('click', '.cancel_icon', function (e) {
          overlay.hide()
          $('body').removeClass('modal-open')
          $('#login_popup').remove()
        })

        // Add event listener for Enter key press on email input field
        $('#emailID').on('keyup', function (event) {
          if (event.keyCode === 13) {
            // Enter key was pressed
            $('#login_submit .send_email').trigger('click')
          }
        })
      }

      // Execute your code when the DOM is ready
      $(document).ready(function () {
        // Your code here
        // This code will be executed when the DOM has finished loading

        // Example usage of helper function
        createDesign()
      })
    }

    return Login
  })()
  $(document).on('turbolinks:load', function () {
    window.login = new Login()
  })
} catch (e) {
  alert('Error')
}
