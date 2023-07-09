/**
 *
 * @param conn
 * @returns
 */
const getStats = (conn: any) => async (): Promise<any> => {
  let results: any = {};
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

    const aggCursor = await conn.db('r3d').collection('chains').aggregate(pipeline);
    await aggCursor.forEach((statList: any) => {
      results['count_sequence_string'] = statList.count_sequence_string[0].total;
      results['count_no_sequence_string'] = statList.count_no_sequence_string[0].total;
    });
  } catch (errorOnSearch: any) {
    err = errorOnSearch;
  }

  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    } else {
      resolve(results);
    }
  });
};

export default getStats;
