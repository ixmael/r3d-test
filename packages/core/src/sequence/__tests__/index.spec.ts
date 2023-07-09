import { expect } from 'chai';

import getSequencesNumber from '..';

describe('Test getSequencenNumber calculation', () => {
  it('the chain is empty', () => {
    const totalSequences = getSequencesNumber('');

    expect(totalSequences).to.be.equal(0);
  });

  it('the chain is less than a sequence', () => {
    const totalSequences = getSequencesNumber('AAA');

    expect(totalSequences).to.be.equal(0);
  });

  it('the chain has not a sequence', () => {
    const totalSequences = getSequencesNumber('AAATTTCCCGGG');

    expect(totalSequences).to.be.equal(0);
  });

  it('the chain has a sequence', () => {
    const totalSequences = getSequencesNumber('AAATTTCCCCGGG');

    expect(totalSequences).to.be.equal(1);
  });

  it('the chain is only a sequence', () => {
    const totalSequences = getSequencesNumber('CCCC');

    expect(totalSequences).to.be.equal(1);
  });

  it('the chain has only a sequence', () => {
    const totalSequences = getSequencesNumber('CCCCCCCCCCCCCCCCCCCCCC');

    expect(totalSequences).to.be.equal(1);
  });

  it('the chain has two sequences', () => {
    const totalSequences = getSequencesNumber('CCCCTTTT');

    expect(totalSequences).to.be.equal(2);
  });

  it('the chain has two sequences separated by non sequences', () => {
    const totalSequences = getSequencesNumber('CCCCATTTT');

    expect(totalSequences).to.be.equal(2);
  });

  it('the chain has two inner sequences', () => {
    const totalSequences = getSequencesNumber('GGCCCCAATTTTGG');

    expect(totalSequences).to.be.equal(2);
  });

  it('the chain start with a sequence and a inner sequence', () => {
    const totalSequences = getSequencesNumber('CCCCAATTTTGG');

    expect(totalSequences).to.be.equal(2);
  });

  it('the chain starts with a sequence and ends with a sequence', () => {
    const totalSequences = getSequencesNumber('CCCCAGGATTTT');

    expect(totalSequences).to.be.equal(2);
  });

  it('the chain has ten sequences', () => {
    const totalSequences = getSequencesNumber('CCCCATTTTGCCCCATTTTCCCCATTTTGCCCCATTTTGCCCCATTTT');

    expect(totalSequences).to.be.equal(10);
  });

  it('the chain has not permited characters', () => {
    const totalSequences = getSequencesNumber('XXXX');

    expect(totalSequences).to.be.equal(0);
  });

  it('the chain is in lower case', () => {
    const totalSequences = getSequencesNumber('aaaa');

    expect(totalSequences).to.be.equal(1);
  });

  it('the chain is in lower case and uppercase', () => {
    const totalSequences = getSequencesNumber('aaaagggg');

    expect(totalSequences).to.be.equal(2);
  });

  it('the chain is in lower case and uppercase with invalid sequences', () => {
    const totalSequences = getSequencesNumber('aaaaxxxxxxxxxxxgggg');

    expect(totalSequences).to.be.equal(2);
  });
});
