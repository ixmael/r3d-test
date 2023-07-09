import { MongoClient, Db } from 'mongodb';

import { ChainRepositoryInterface, ConfigRepositoryType } from '../types';

import saveChain from './saveChain';
import getStats from './getStats';

/**
 * Initialize the chain repository
 * @returns a repository service
 */
const repositoryService = async (repositoryService: ConfigRepositoryType): Promise<ChainRepositoryInterface> => {
  const client = new MongoClient(repositoryService.uri);

  // Try to connect
  let database: Db;
  let err: any = null;
  try {
    const conn = await client.connect();
    database = conn.db(repositoryService.database);
  } catch (connectionError: any) {
    err = connectionError;
  }

  return new Promise((resolve, reject) => {
    if (err) {
      // There is an error during connec to database
      reject(err);
    } else if (database) {
      // Create the repository
      resolve({
        getStats: getStats(database),
        saveChain: saveChain(database),
      } as ChainRepositoryInterface);
    } else {
      // There is an unkwon error
      reject(new Error('Unknown error'));
    }
  });

};

export default repositoryService;
