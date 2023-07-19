function LoginOptions() {
  let loginOptions = `
        <span class="login-btn">
          <button class="btn-primary">Login</button>
          <div id="login_options">
            <div id="login_to_inout">Login To HRM</div>
            <div id="login_to_invoice">Login To MI</div>
          </div>
        </span>
      `
  if ($('.login-btn').length === 0) {
    $('.nav__link--me').before(loginOptions)
  }
}

function LoginPopUp() {
  let loginPopupModal = `
    <div id="login_popup" class="login-modal-box modal-md">
      <div class="login-modal-body">
        <h3 id="loginTitle">Login to HRM</h3>
        <span class="cancel_icon"></span>
        <div class="login-modal-d-flex">
          <div class="login-form-wrap">
            <input id="emailID" name="emailAddress" type="email" placeholder="Enter email of your moon HRM" autocomplete="no-chrome-autocomplete" />
            <label class="flot-label">Email Address</label>
          </div>
          <div id="login_submit" class="login-form-sendEmail">
            <button class="send_email">Login</button>
          </div>
        </div>
      </div>
    </div>
  `
  if ($('#login_popup').length === 0) {
    $('body').prepend(loginPopupModal)
  }
}
