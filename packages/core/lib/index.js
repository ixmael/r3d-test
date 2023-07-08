"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * getSequencesNumber count the sequences in the chain
 * @param chain string
 * @returns number of sequences of the chain
 */
const getSequencesNumber = (chain) => {
    let sequencesNumber = 0;
    if (chain.length > 3) {
        // Transform to an array of chars
        const chainAsChars = [...chain];
        let charContext = '';
        let isASequenceCounter = 0;
        chainAsChars.forEach(char => {
            // Check if the context has to change
            if (charContext === '' || charContext !== char) {
                if (isASequenceCounter >= 4) {
                    sequencesNumber = sequencesNumber + 1;
                }
                // clean the context
                charContext = char;
                isASequenceCounter = 1;
            }
            else {
                // Count because is a sequence
                isASequenceCounter = isASequenceCounter + 1;
            }
        });
        // Detect the last sequence
        if (isASequenceCounter >= 4) {
            sequencesNumber = sequencesNumber + 1;
        }
    }
    return sequencesNumber;
};
exports.default = getSequencesNumber;
