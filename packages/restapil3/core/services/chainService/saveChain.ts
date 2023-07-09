import getSequencesNumber from '@ixmael/core';

/**
 *
 * @param repository
 * @returns
 */
const saveChain = (repository: any) => async (chain: string): Promise<boolean> => {
  // Validate chain

  // Save
  let err: any = null;
  try {
    await repository
      .saveChain(chain, getSequencesNumber(chain));
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
