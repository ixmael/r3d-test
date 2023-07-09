import { ChainServiceInterface } from '../../../types';

import hasSequences from './hasSequences';
import saveChain from './saveChain';
import getStats from './getStats';

/**
 * Implements the Chain Service
 * @param services
 * @returns a service
 */
const chainService = (services: any): ChainServiceInterface => {
  return {
    hasSequences,
    saveChain: saveChain(services.repository),
    getStats: getStats(services.repository),
  } as ChainServiceInterface;
};

export default chainService;
