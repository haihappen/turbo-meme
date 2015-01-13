import RedditAPI from './reddit-api'
import ExtractGIFs from './extract-gifs'
import DisplayGIFs from './display-gifs'

RedditAPI.load()
  .then(ExtractGIFs)
  .then(DisplayGIFs)
  .then(data => console.log(data))