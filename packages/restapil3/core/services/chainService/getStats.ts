/**
 *
 * @param chain
 * @returns
 */
const getStats = (repository: any) => async (): Promise<any> => {
  let stats: any = {};
  let err: any = null;

  await repository
    .getStats()
    .then((statsRaw: any) => {
      stats = statsRaw;
    })
    .catch((errOnGetStats: any) => {
      err = errOnGetStats;
    });

  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    } else {
      resolve(stats);
    }
  });
};

export default getStats;
