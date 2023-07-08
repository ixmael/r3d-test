"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = __importDefault(require(".."));
describe('Test getSequencenNumber calculation', () => {
    it('the chain is empty', () => {
        const totalSequences = (0, __1.default)('');
        (0, chai_1.expect)(totalSequences).to.be.equal(0);
    });
    it('the chain is less than a sequence', () => {
        const totalSequences = (0, __1.default)('AAA');
        (0, chai_1.expect)(totalSequences).to.be.equal(0);
    });
    it('the chain has not a sequence', () => {
        const totalSequences = (0, __1.default)('AAATTTCCCGGG');
        (0, chai_1.expect)(totalSequences).to.be.equal(0);
    });
    it('the chain has a sequence', () => {
        const totalSequences = (0, __1.default)('AAATTTCCCCGGG');
        (0, chai_1.expect)(totalSequences).to.be.equal(1);
    });
    it('the chain is only a sequence', () => {
        const totalSequences = (0, __1.default)('CCCC');
        (0, chai_1.expect)(totalSequences).to.be.equal(1);
    });
    it('the chain has only a sequence', () => {
        const totalSequences = (0, __1.default)('CCCCCCCCCCCCCCCCCCCCCC');
        (0, chai_1.expect)(totalSequences).to.be.equal(1);
    });
    it('the chain has two sequences', () => {
        const totalSequences = (0, __1.default)('CCCCTTTT');
        (0, chai_1.expect)(totalSequences).to.be.equal(2);
    });
    it('the chain has two sequences separated by non sequences', () => {
        const totalSequences = (0, __1.default)('CCCCATTTT');
        (0, chai_1.expect)(totalSequences).to.be.equal(2);
    });
    it('the chain has two inner sequences', () => {
        const totalSequences = (0, __1.default)('GGCCCCAATTTTGG');
        (0, chai_1.expect)(totalSequences).to.be.equal(2);
    });
    it('the chain start with a sequence and a inner sequence', () => {
        const totalSequences = (0, __1.default)('CCCCAATTTTGG');
        (0, chai_1.expect)(totalSequences).to.be.equal(2);
    });
    it('the chain starts with a sequence and ends with a sequence', () => {
        const totalSequences = (0, __1.default)('CCCCAGGATTTT');
        (0, chai_1.expect)(totalSequences).to.be.equal(2);
    });
    it('the chain has ten sequences', () => {
        const totalSequences = (0, __1.default)('CCCCATTTTGCCCCATTTTCCCCATTTTGCCCCATTTTGCCCCATTTT');
        (0, chai_1.expect)(totalSequences).to.be.equal(10);
    });
});
