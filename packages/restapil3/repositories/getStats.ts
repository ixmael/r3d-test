import { Db } from 'mongodb';

import { StatsRepositoryType } from '../types';

/**
 * Get the stats from the repository
 * @param database
 * @returns the stats from the repository
 */
const getStats = (database: Db) => async (): Promise<StatsRepositoryType> => {
  let results: StatsRepositoryType = {
    count_sequence_string: 0,
    count_no_sequence_string: 0,
  } as StatsRepositoryType;
  let err: any = null;
  try {
    const pipeline = [
      {
        '$facet': {
          'count_sequence_string': [
            {
              '$match': {
                'number_of_sequence': {
                  '$gt': 0,
                },
              },
            },
            {
              '$count': 'total'
            },
          ],
          'count_no_sequence_string': [
            {
              '$match': {
                'number_of_sequence': {
                  '$eq': 0,
                },
              },
            },
            {
              '$count': 'total'
            },
          ]
        },
      },
    ];

    const aggCursor = await database.collection('chains').aggregate(pipeline);
    await aggCursor.forEach((statList: any) => {
      results.count_sequence_string = statList?.count_sequence_string[0]?.total || 0;
      results.count_no_sequence_string = statList?.count_no_sequence_string[0]?.total || 0;
    });
  } catch (errorOnSearch: any) {
    err = errorOnSearch;
  }

  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    } else {
      resolve(results as StatsRepositoryType);
    }
  });
};

export default getStats;
