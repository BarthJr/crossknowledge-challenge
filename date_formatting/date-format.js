(() => {
  const isoDates = document.getElementsByClassName('js-date-format')
  let initialDates = []
  const startDate = new Date()

  const MILLI_SECONDS_IN_ONE_SECOND = 1000
  const SECONDS_IN_ONE_MINUTE = 60
  const SECONDS_IN_ONE_HOUR = 3600

  for (const isoDate of isoDates) {
    initialDates.push(isoDate.innerText)
  }

  setInterval(() => {
    const now = new Date()
    for (let inc = 0; inc < isoDates.length; inc++) {
      const date = initialDates[inc]
      const endDate = new Date(date)

      let diffTimeInSeconds = getDiffTimeInSeconds(endDate, now)

      isoDates[inc].innerHTML = replaceJsDateFormat(inc, diffTimeInSeconds)

    }

  }, 1000)

  function getDiffTimeInSeconds (endDate, now) {
    const diffTimeInMilliSeconds = Math.abs(endDate - now)
    let diffTimeInSeconds = diffTimeInMilliSeconds / MILLI_SECONDS_IN_ONE_SECOND
    diffTimeInSeconds = Math.floor(diffTimeInSeconds)
    return diffTimeInSeconds
  }

  function replaceJsDateFormat (x, diffTimeInSeconds) {

    let text = isoDates[x].innerText
    if (diffTimeInSeconds < 2) {
      text = diffTimeInSeconds + ' second ago'
    } else if (diffTimeInSeconds < 60) {
      text = diffTimeInSeconds + ' seconds ago'
    } else if (diffTimeInSeconds < 120) {
      text = getMinutesFromSeconds(diffTimeInSeconds) + ' minute ago'
    } else if (diffTimeInSeconds < 3600) {
      text = getMinutesFromSeconds(diffTimeInSeconds) + ' minutes ago'
    } else if (diffTimeInSeconds < 7200) {
      text = getHoursFromSeconds(diffTimeInSeconds) + ' hour ago'
    } else if (diffTimeInSeconds < 86400) {
      text = getHoursFromSeconds(diffTimeInSeconds) + ' hours ago'
    } else {
      text = startDate.toISOString()
    }
    return text

  }

  function getMinutesFromSeconds (diffTimeInSeconds) {
    return Math.floor(diffTimeInSeconds / SECONDS_IN_ONE_MINUTE)
  }

  function getHoursFromSeconds (diffTimeInSeconds) {
    return Math.floor(diffTimeInSeconds / SECONDS_IN_ONE_HOUR)
  }
})()