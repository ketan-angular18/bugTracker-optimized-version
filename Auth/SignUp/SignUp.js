try {
  SignUp = (function () {
    function SignUp() {
      this.signup()
    }
    SignUp.prototype.signup = function () {
      // Sign up button

      var smallLogo = ''

      if (chrome.runtime?.id) {
        smallLogo = chrome.runtime.getURL('images/svg/small-logo.svg')
      }

      // If Token not exist then Append Button
      let loginButton = `<a class="signup-btn" target="popup">
                            <div class="signup-btn-combo" >
                              <p class="signup-btn-combo-title" > Continue with </p>
                              <img src= ${smallLogo} />
                            </div>
                          </a>`

      // let myAuthToken = localStorage.getItem('CLOCK_IN_AUTH_TOKEN')

      // if (!myAuthToken) {
      // }
      if (!window.location.href.includes('hrm_token')) {
        if ($('.signup-btn').length == 0) {
          $('.nav__link--me').before(loginButton)
        }
      }

      SignUpModal()

      $(document).on('click', '.signup-btn', function (e) {
        $('#signup').show()
        $('.signup-overlink').show()
        $('body').css('overflow', 'hidden')
      })
    }

    return SignUp
  })()

  $(document).on('turbolinks:load', function () {
    window.sign_up = new SignUp()
  })
} catch (e) {
  alert(e)
}
