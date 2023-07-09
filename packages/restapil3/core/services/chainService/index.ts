import hasSequences from './hasSequences';
import saveChain from './saveChain';
import getStats from './getStats';

/**
 *
 * @param services
 * @returns
 */
const chainService = (services: any) => {
  return {
    hasSequences,
    saveChain: saveChain(services.repository),
    getStats: getStats(services.repository),
  };
};

export default chainService;
