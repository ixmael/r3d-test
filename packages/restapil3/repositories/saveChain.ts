import { Db } from 'mongodb';

/**
 * Store the chain into the repository
 * @param database
 * @returns if the chain was stored or not
 */
const saveChain = (database: Db) => async (chain: string, number_of_sequence: number): Promise<boolean> => {
  // Try to save
  let err: any = null;
  try {
    await database.collection('chains').insertOne({
      chain,
      number_of_sequence,
    });
  } catch (errorOnSave: any) {
    err = errorOnSave;
  }

  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    } else {
      resolve(true);
    }
  });
};

export default saveChain;
