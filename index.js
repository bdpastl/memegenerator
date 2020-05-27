const express = require('express')
const superagent = require('superagent')

// bodyParser is "middleware" that allows a JSON body to be included in post requests
const bodyParser = require('body-parser')

const app = express()
const port = 3001

// Tell express to use the bodyParser middleware
app.use(bodyParser())


app.get('/', (req, res, next) => {
  res.send('Hello World')

  // Next is the third parameter supplied by express
  // Invoking it tells express that this function is done and to send the response
  next()
})



// This is the core function of this API
const makeAMeme = async (template_id, text0, text1) => {
  // It makes the post response to the imgflip server with my super secure password
  // https://api.imgflip.com/
  const response = await superagent.post('https://api.imgflip.com/caption_image')
  .field('template_id', template_id)
  .field('text0', text0)
  .field('text1', text1)
  .field('username', 'mawein')
  .field('password', '1234')

  // The response is returned as a string. Why? No idea. But we want to return a JSON object
  const jsonifiedResponse = JSON.parse(response.text)

  return jsonifiedResponse
}


// This defines the get request.
// Because this is a get request, you can hit localhost:3000/make-a-meme from the browser
// Req.query allows you to access this endpoint with all of the paremeters in the URL within Google Chrome
// For example, http://localhost:3000/make-a-meme?template_id=61544&text0=Made%20a%20network%20call&text1=Didnt%20screw%20it%20up
app.get('/make-a-meme', async (req, res, next) => {
  const template_id = req.query.template_id
  const text0 = req.query.text0
  const text1 = req.query.text1

  const memeResponse = await makeAMeme(template_id, text0, text1)

  res.send(memeResponse)
  next()
})


// This defines the post request. It does literally the same thing but you cannot access this version from the browser.
// You must make a post request with a post body, which is accessed through req.body
// Notice I name the URL the same as the get request. Express recognizes that these are different endpoints because one is a get and the other is a post
app.post('/make-a-meme', async (req, res, next) => {
  const template_id = req.body.template_id
  const text0 = req.body.text0
  const text1 = req.body.text1

  const memeResponse = await makeAMeme(template_id, text0, text1)

  res.send(memeResponse)
  next()
})



app.listen(port, () => console.log(`memegenerator listening at http://localhost:${port}`))
