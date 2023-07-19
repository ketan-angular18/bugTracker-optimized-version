function SignUpModal() {
  var HRMLogo = ''
  var MILogo = ''
  var close = ''
  var path = window.location.href.split('?')[0]
  // MI LIVE
  // https://www.mooninvoice.com/login?redirect_back=https://3.basecamp.com/3101768/buckets/26378200/todos/6327086942
  // https://www.mooninvoice.com/signup?redirect_back=https://3.basecamp.com/3101768/buckets/26378200/todos/6327086942

  // MI BETA
  // https://beta.mooninvoice.com/login?redirect_back=${path}
  // https://beta.mooninvoice.com/signup?redirect_back=${path}

  //HRM BET LOGIN AND SIGNUP
  // https://beta2.moontechnolabs.com/clockinout_public/#/register
  // https://beta2.moontechnolabs.com/clockinout_public/#/login

  // HRM LIVE
  // https://inout.moontechnolabs.com/#/register - Test Live Signup
  // https://inout.moontechnolabs.com/#/login - Test Live Login

  // MAIN LIVE
  // inout.moonapps.xyz

  // *************** LIVE ********************************
  const HRM_LIVE_SIGNUP = `https://inout.moontechnolabs.com/#/register?redirect_back=${path}`
  const HRM_LIVE_LOGIN = `https://inout.moontechnolabs.com/#/login?redirect_back=${path}`
  const MI_LIVE_SIGNUP = `https://www.mooninvoice.com/signup?redirect_back=${path}`
  const MI_LIVE_LOGIN = `https://www.mooninvoice.com/login?redirect_back=${path}`

  // *************** BETA ********************************
  // const HRM_LIVE_SIGNUP = `https://beta2.moontechnolabs.com/clockinout_public/#/register?redirect_back=${path}`
  // const HRM_LIVE_LOGIN = `https://beta2.moontechnolabs.com/clockinout_public/#/login?redirect_back=${path}`
  // const MI_LIVE_SIGNUP = `https://beta.mooninvoice.com/signup?redirect_back=${path}`
  // const MI_LIVE_LOGIN = `https://beta.mooninvoice.com/login?redirect_back=${path}`

  if (chrome.runtime?.id) {
    HRMLogo = chrome.runtime.getURL('images/svg/hrm.svg')
    MILogo = chrome.runtime.getURL('images/svg/mi.svg')
    close = chrome.runtime.getURL('images/svg/close.svg')
  }

  const signUpModal = `<div id="signup" class="main-modal">
          <div class="signup-heading">
              <h2>Link Time Tracker with Basecamp</h2>
              <p class="signup-par" >Manage project todo status, track todos, sort todos by filters, manage sprint summary, tally estimated hours, & a lot more by linking with Moon HRM or Moon Invoice.</p>
              <a class="close-singup" id="close-signup">
                  <img src=${close} alt="Close-image">
              </a>
          </div>
  
          <div class="main-card">
              <div class="hrm-card mr-20">
                  <div class="hrm-logo">
                      <img src=${HRMLogo} alt="hrm-logo">
                  </div>
  
                  <div class="list">
              
                      <ul>
                          <li>
                             Easy & Efficient Todo Status Management
                          </li>
                          <li>
                             Manage Time Logs directly from Basecamp
                          </li> 
                          <li>
                             Manage Sprints (Todo list) by Assignee, Status, Group By, and Sort By Filters
                          </li>
                          <li>
                             Manage Estimated & Spent Hours with Todos & Cards
                          </li>
                          <li>
                             Manage Estimated & Spent Hours for Sprints
                          </li>
                          <li>
                             Get Work Summary Details for Assignee, Todos, Spent, & Estimated Hours
                          </li> 
                      </ul> 
                      <a href=${HRM_LIVE_SIGNUP} >
                          <button type="submit" class="signup-btn-nav">Signup</button>
                      </a>
              
                      <p class="links"> Already have an account?<a href=${HRM_LIVE_LOGIN}>Login</a></p>
                  </div>
  
  
              </div>
  
              <div class="hrm-card">
                  <div class="mi hrm-logo">
                      <img src=${MILogo} alt="hrm-logo">
                  </div>
              
                  <div class="list mi-listing">
              
                      <ul class="mi-list" >
                          <li>
                            Create & Link Company-Wise Projects Easily
                          </li>
                          <li>
                             Manage Time Logs directly from Basecamp
                          </li>
                          <li>
                            Manage Sprints (Todo list) by Assignee
                          </li>
                          <li>
                            Manage Estimated & Spent Hours with Todos & Cards
                          </li>
                          <li>
                              Create New & Link Todo with Existing Tasks
                          </li>
                          <li>
                              All native platforms app & web app
                          </li>
                      </ul>
  
                      <a href=${MI_LIVE_SIGNUP} >
                          <button type="submit" class="signup-btn-nav">Signup</button>
                      </a>
              
                      <p class="links"> Already have an account?<a href=${MI_LIVE_LOGIN}>Login</a></p>
                  </div>
              
              
              </div>
          </div>
          
      </div>`
  $('body').prepend(signUpModal)
  $('body').append(`<div class="signup-overlink" ></div>`)
}

function SignUpCloseModal() {
  $('#signup').hide()
  $('.signup-overlink').hide()
  $('body').css('overflow', 'auto')
}
