import getSequencesNumber from "./src/sequence";

const chain = 'AAAA';

const sequencesCounted = getSequencesNumber(chain);

console.log(`The sequences of "${chain}" are ${sequencesCounted}`);
