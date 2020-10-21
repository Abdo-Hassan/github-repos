const express = require('express');
const bodyParser = require('body-parser');
const FormData = require('form-data');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'text/*' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/authenticate', (req, res) => {
  const { client_id, redirect_uri, client_secret, code } = req.body;
  const data = new FormData();
  data.append('client_id', client_id);
  data.append('redirect_uri', redirect_uri);
  data.append('client_secret', client_secret);
  data.append('code', code);

  //request for exchange code for an access token
  fetch(`https://github.com/login/oauth/access_token`, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.text())
    .then((paramsString) => {
      let params = new URLSearchParams(paramsString);
      const access_token = params.get('access_token');
      const scope = params.get('scope');
      const token_type = params.get('token_type');

      //return data from authintecated USER
      return fetch(
        `https://api.github.com/user?access_token=${access_token}&scope=${scope}&token_type=${token_type}`
      );
    })
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Listening to port${PORT}`));
