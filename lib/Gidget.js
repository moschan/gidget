// libs
import 'whatwg-fetch'
// my modules
import S from './Setting'
import CST from '../css/core.css'


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
    .then((res) => {
      this.profile = res
      this.embed()
    })
  }


  generateHtml () {
    var pf = this.profile
    var html =
      `<div class="${CST.component}">
        <p>${pf.name}</p>
        <img src="${pf.avatar_url}" alt="${pf.name}" class="${CST.profileImg}">
        <a href="${pf.html_url}" target="_blank">Home</a>
        <p>Followers: ${pf.followers}</p>
      </div>`
    return html
  }
  embed () {
    var html = this.generateHtml()
    this.gidgetEl.innerHTML = html;
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
          resolve(JSON.parse(responseText))
        })
        .catch((error) => {
          console.warn(error)
        })
    })
  }
}
