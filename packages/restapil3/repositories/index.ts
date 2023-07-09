import { MongoClient } from 'mongodb';

import saveChain from './saveChain';
import getStats from './getStats';

/**
 *
 * @returns
 */
const repositoryService = async (): Promise<any> => {
  const client = new MongoClient('mongodb://root:example@172.19.1.31:27017/?retryWrites=true&w=majority');

  // Try to connect
  let conn: any;
  let err: any = null;
  try {
    conn = await client.connect();
  } catch (connectionError: any) {
    err = connectionError;
  }

  return new Promise((resolve, reject) => {
    if (err) {
      // There is an error during connec to database
      reject(err);
    } else if (conn) {
      // Create the repository
      resolve({
        getStats: getStats(conn),
        saveChain: saveChain(conn),
      });
    } else {
      // There is an unkwon error
      reject(new Error('Unkwon error'));
    }
  });

};

export default repositoryService;
