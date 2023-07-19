function Login(data, path, type, token) {
  moon_request_master.ajax({
    url: this.liveUrl + { path },
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
}
