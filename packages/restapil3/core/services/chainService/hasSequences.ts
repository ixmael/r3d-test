import getSequencesNumber from '@ixmael/core';

/**
 * Detects if a chain has a sequence at least
 * @param chain
 * @returns if sequence has sequences or not
 */
const hasSequences = (chain: string): boolean => {
  const numberOfSequence = getSequencesNumber(chain);

  let hasSequences = false;
  if (numberOfSequence > 0) {
    hasSequences = true;
  }

  return hasSequences;
};

export default hasSequences;
