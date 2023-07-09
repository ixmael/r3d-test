import getSequencesNumber from '@ixmael/core';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const restAPI = express();
restAPI.use(bodyParser.json());

// Handler that check if a chain has sequences or not
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

restAPI.listen(process.env.RESTAPI_PORT, () => {
  console.log(`server up on http://localhost:${process.env.RESTAPI_PORT}`);
});
