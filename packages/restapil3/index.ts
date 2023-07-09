import { ConfigRepositoryType, ChainRepositoryInterface, ChainServiceInterface, ServicesInterface } from './types';

import repositoryService from './repositories';
import chainService from './core/services/chainService';

import sequenceHandler from './handlers/sequence';
import statsHandler from './handlers/stats';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

/**
 * Initialze the RestAPI server
 */
const init = async () => {
  // Initialize the chain repository
  const configRepository: ConfigRepositoryType = {
    uri: process.env.REPOSITORY_URI,
    database: process.env.REPOSITORY_DATABASE,
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
  restAPI.use(cors());

  // Configure the router
  restAPI.post('/sequence', sequenceHandler(services));
  restAPI.get('/stats', statsHandler(services));

  // Start the server
  restAPI.listen(process.env.RESTAPI_PORT, () => {
    console.log(`server up on http://localhost:${process.env.RESTAPI_PORT}`);
  });
};

// Execute the RestAPI server
init();
