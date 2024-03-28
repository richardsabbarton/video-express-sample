const express = require('express')
const app = express()


console.log('Neru Instance')
const neru = require('neru-alpha').neru
console.log('getting neru state')
const state = neru.getInstanceState()



app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect("/app.html?roomName=Default-Room")
})


app.get('/_/health', async (req, res) => {
  res.sendStatus(200);
});

const port = process.env.NERU_APP_PORT || process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Application Listing ON Port: ${port}`)
})
