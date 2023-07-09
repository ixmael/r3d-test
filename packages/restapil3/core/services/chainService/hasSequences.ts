import getSequencesNumber from '@ixmael/core';

/**
 *
 * @param chain
 * @returns
 */
const hasSequences = (chain: string): Boolean => {
  const numberOfSequence = getSequencesNumber(chain);

  let hasSequences = false;
  if (numberOfSequence > 0) {
    hasSequences = true;
  }

  return hasSequences;
};

export default hasSequences;
