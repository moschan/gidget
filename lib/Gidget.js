// libs
import 'whatwg-fetch'
// my modules
import S from './Setting'
import styles from '../css/core.css'

// document.write('<button class=' + styles.gidget + '>Example</button>')

/**
 * Gidget
 */
export default class Gidget {
  constructor (config) {
    // TODO: set configs
  }
  init () {
    this.getConfig()
    // get basic data
    this.get(`${S.API_URL}${this.USERNAME}`)
    .then(function (res) {
      console.log(res)
    })
  }

  getConfig () {
    this.gidgetEl = document.querySelector('.gidget')
    this.USERNAME = this.gidgetEl.getAttribute('data-username')
  }

  get (url) {
    return new Promise(function (resolve, reject) {
      window.fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.text())
        .then((responseText) => {
          resolve(responseText)
          // console.log(responseText)
        })
        .catch((error) => {
          console.warn(error)
        })
    })
  }
}
