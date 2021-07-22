function debounce(fn, wait) {
  var timer = null
  return function () {
    var context = this
    ags = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

function throttle(fn, delay) {
  var preTime = Date.now()
  return function () {
    var context = this
    args = arguments
    var nowTime = Date.now()

    if (nowTime - preTime >= delay) {
      preTime = Date.now()
      return fn.apply(context, args)
    }
  }
}
