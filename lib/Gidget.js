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
  /**
   * entry point
   */
  init () {
    this.getConfig()
    // get basic data
    this.get(`${S.API_URL}${this.USERNAME}`)
    .then((res) => {
      this.profile = res
      this.embed()
    })
  }
  /**
   * generate string using widget template
   */
  generateHtml () {
    var pf = this.profile
    var html =
      `<div class="${CST.component}">
        <header class="${CST.header}">
          <p class="${CST.name}">${pf.name}</p>
        </header>
        <div class="${CST.upperBody}">
          <img src="${pf.avatar_url}" alt="${pf.name}" class="${CST.profileImg}">
          <a href="${pf.html_url}" target="_blank">Home</a>
        </div>
        <div class="${CST.body}">
          <p>Followers: ${pf.followers}</p>
        </div>
        <footer class="${CST.footer}"></footer>
      </div>`
    return html
  }
  /**
   * get string and embed html
   */
  embed () {
    var html = this.generateHtml()
    this.gidgetEl.innerHTML = html
  }
  /**
   * get configs from DOM
   */
  getConfig () {
    this.gidgetEl = document.querySelector('.gidget')
    this.USERNAME = this.gidgetEl.getAttribute('data-username')
  }
  /**
   * fetch and parse json
   * @param string url url for fetch
   * @return object response json
   */
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
