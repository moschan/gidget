// libs
import 'whatwg-fetch'
// my modules
import S from './Setting'
import styles from '../css/core.css'

/**
 * Gidget
 */
export default class Gidget {
}

document.write('<button class=' + styles.gidget + '>Example</button>')

fetch(`${S.API_URL}moschan`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((response) => response.text())
  .then((responseText) => {
    console.log(responseText)
  })
  .catch((error) => {
    console.warn(error)
  })
