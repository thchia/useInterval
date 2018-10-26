'use strict'
let { useState } = require('react')

function useInterval(cb, interval = 1000) {
  useEffect(() => {
    let id = setInterval(() => {
      cb()
    }, interval)

    return () => {
      clearInterval(id)
    }
  }, [])
}

module.exports = useInterval
