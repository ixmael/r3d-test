const allowedCharacters = 'ACGT';

/**
 * getSequencesNumber count the sequences in the chain
 * @param chain string
 * @returns number of sequences of the chain
 */
const getSequencesNumber = (chain: string) => {
  let sequencesNumber: number = 0

  if (chain.length > 3) {

    let charContext: string = '';
    let isASequenceCounter: number = 0;

    chain.toUpperCase().split('').forEach(c => {
      if (allowedCharacters.includes(c)) {

        if (charContext === '' || charContext !== c) {
          // Check if the context has to change
          if (isASequenceCounter >= 4) {
            sequencesNumber = sequencesNumber + 1;
          }

          // clean the context
          charContext = c;
          isASequenceCounter = 1;
        } else {
          // Count because is a sequence
          isASequenceCounter = isASequenceCounter + 1;
        }

      } else {
        if (isASequenceCounter >= 4) {
          sequencesNumber = sequencesNumber + 1;
        }

        charContext = c;
        isASequenceCounter = 1;
      }

    });

    // Detect the last sequence
    if (isASequenceCounter >= 4) {
      sequencesNumber = sequencesNumber + 1;
    }

  }

  return sequencesNumber;
}

export default getSequencesNumber;
