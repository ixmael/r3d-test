import { StatsType } from '../../../types';

/**
 * Fetch the stats from the repository
 * @param chain
 * @returns the stats
 */
const getStats = (repository: any) => async (): Promise<StatsType> => {
  let stats: StatsType | null = null;
  let err: any = null;

  await repository
    .getStats()
    .then((statsRaw: any) => {
      // "transform"
      stats = statsRaw as StatsType;
    })
    .catch((errOnGetStats: any) => {
      err = errOnGetStats;
    });

  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    } else if(stats) {
      resolve(stats);
    } else {
      reject(new Error('Unknown error'));
    }
  });
};

export default getStats;
