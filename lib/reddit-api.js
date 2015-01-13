import jsonp from 'jsonp'

class RedditAPI {
  constructor() {
    this.redditUrl = 'http://www.reddit.com/r/perfectLoops.json?jsonp=callbackFunction'
  }

  load() {
    return new Promise((resolve, reject) => {
      jsonp(this.redditUrl, {param: 'jsonp'}, (err, json) => {
        err ? reject(err) : resolve(json.data.children)
      })
    })
  }
}

export default new RedditAPI()
