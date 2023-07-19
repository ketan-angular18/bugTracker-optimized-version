try {
  var APIRequest = (function () {
    function APIRequest() {
      // this.url = 'https://beta3.moontechnolabs.com/bugtracker/'
      // this.liveUrl =
      //   'https://inout-api.moontechnolabs.com/clockinout_api/api/b10'

      // Beta URL
      this.liveUrl =
        'https://beta2.moontechnolabs.com/clockinout_laravel_public/api/b11'

      // MI Live URL
      // this.mi_time_tracker_Url =
      //   'https://www.mooninvoice.com/api_mi/basecamp_time_tracker';

      // MI BETA URL
      this.mi_time_tracker_Url =
        'https://betaapp.mooninvoice.com/api_mi/basecamp_time_tracker'
    }
    const LiveURL =
      'https://beta2.moontechnolabs.com/clockinout_laravel_public/api/b11'

    // *************************** All Basecamp Id  ***************************
    APIRequest.prototype.API = function (data, path, type, token) {
      return new Promise(function (resolve, reject) {
        moon_request_master.ajax({
          url: LiveURL + path,
          async: false,
          data: data,
          type: 'post',
          success: function (data) {
            resolve(data)
          },
          error: function (data, textStatus, xhr) {
            reject(textStatus)
          },
        })
      })
    }

    return APIRequest
  })()

  window.api_request = new APIRequest()
} catch (e) {
  alert('Error')
}
