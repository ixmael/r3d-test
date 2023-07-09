import getSequencesNumber from '@ixmael/core';

import { ChainRepositoryInterface } from '../../../types';

/**
 * Store the chain into the repository
 * @param repository
 * @returns if the chain was stored or not
 */
const saveChain = (repository: ChainRepositoryInterface) => async (chain: string): Promise<boolean> => {
  let err: any = null;

  // Validate chain
  if (typeof chain !== 'string') {
    err = new Error('Invalid parameter');
  } else {
    // Save
    try {
      await repository
        .saveChain(chain, getSequencesNumber(chain));
    } catch (errorOnSave: any) {
      err = errorOnSave;
    }
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
