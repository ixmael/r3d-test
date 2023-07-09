import { ConfigRepositoryType, ChainRepositoryInterface, ChainServiceInterface, ServicesInterface } from './types';

import repositoryService from './repositories';
import chainService from './core/services/chainService';

import sequenceHandler from './handlers/sequence';
import statsHandler from './handlers/stats';

const express = require('express');
const bodyParser = require('body-parser');

/**
 * Initialze the RestAPI server
 */
const init = async () => {
  // Initialize the chain repository
  const configRepository: ConfigRepositoryType = {
    uri: 'mongodb://root:example@172.19.1.31:27017/?retryWrites=true&w=majority',
    database: 'r3d',
  } as ConfigRepositoryType;
  const repository: ChainRepositoryInterface = await repositoryService(configRepository);

  // Initialize the services
  const services: ServicesInterface = {
    chainService: chainService({
      repository,
    }) as ChainServiceInterface,
  };

  // Initialize the server
  const restAPI = express();
  restAPI.use(bodyParser.json());

  // Configure the router
  restAPI.post('/sequence', sequenceHandler(services));
  restAPI.get('/stats', statsHandler(services));

  // Start the server
  const port = 3000;
  restAPI.listen(port, () => {
    console.log(`server up on http://localhost:${port}`);
  });
};

// Execute the RestAPI server
init();
