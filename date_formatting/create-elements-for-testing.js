// This will create elements for testing, don't change this code
(() => {
  const MS_PER_MINUTE = 60000
  const NOW = new Date()
  let minutes = [0, 1, 30, 60, 6 * 60, 23 * 60, 24 * 60]
  let dates = []

  minutes.forEach((i) => dates.push(new Date(NOW - i * MS_PER_MINUTE)))

  dates.forEach((item) => {
    let el = document.createElement("div")
    el.innerHTML = "Started "

    let dt = document.createElement('span')
    dt.className = 'js-date-format'
    dt.innerHTML = item.toISOString()
    el.appendChild(dt)
    document.body.appendChild(el)
  })
})();
