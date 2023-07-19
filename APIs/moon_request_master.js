try {
  var MoonRequestMaster = (function () {
    function MoonRequestMaster() {}

    //-------------------- API Calling Helper Function  -----------------------------
    MoonRequestMaster.prototype.ajax = function (options) {
      var success = options.success
      options.success = function (data, textStatus, jqXHR) {
        if (success) {
          try {
            if (data != null && data.error) {
              alert('Error1111')
            } else {
              success(data, textStatus, jqXHR)
            }
          } catch (e) {
            alert(e)
          }
        }
      }
      var error = options.error
      options.error = function (xhr, textStatus, errorThrown) {
        if (error) {
          error(xhr, textStatus, errorThrown)
        }
      }
      return $.ajax(options)
    }

    return MoonRequestMaster
  })()

  window.moon_request_master = new MoonRequestMaster()
} catch (e) {
  throw e
}
