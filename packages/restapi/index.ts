import getSequencesNumber from '@ixmael/core';

// require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const restAPI = express();
restAPI.use(bodyParser.json());

restAPI.post("/sequence", (request: any, response: any) => {
  const numberOfSequence = getSequencesNumber(request.body.chain);

  if (numberOfSequence > 0) {
    response
      .status(200)
      .send();
  } else {
    response
      .status(403)
      .send();
  }

});

const port = 3000;
restAPI.listen(port, () => {
  console.log(`server up on http://localhost:${port}`);
});
