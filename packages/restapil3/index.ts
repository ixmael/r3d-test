import repositoryService from './repositories';
import chainService from './core/services/chainService';

import sequenceHandler from './handlers/sequence';
import statsHandler from './handlers/stats';

const express = require('express');
const bodyParser = require('body-parser');

/*

import chainService from './core/services/chainService';



const restAPI = express();
restAPI.use(bodyParser.json());

// Prepare the services
let repository;
let services;
(async () => {

  services = {
    chainService: chainService({
      repository,
    }),
  };
})();

const repository = await repositoryService();
const services = {
  chainService: chainService({
    repository,
  }),
};

// Prepare the routes
restAPI.post('/sequence', sequenceHandler(services));

const port = 3000;
restAPI.listen(port, () => {
  console.log(`server up on http://localhost:${port}`);
});
*/

const init = async () => {
  const restAPI = express();
  restAPI.use(bodyParser.json());

  const repository = await repositoryService();
  const services = {
    chainService: chainService({
      repository,
    }),
  };

  restAPI.post('/sequence', sequenceHandler(services));
  restAPI.get('/stats', statsHandler(services));

  const port = 3000;
  restAPI.listen(port, () => {
    console.log(`server up on http://localhost:${port}`);
  });
};

init();
