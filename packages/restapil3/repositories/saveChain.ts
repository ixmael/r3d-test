/**
 *
 * @param conn
 * @returns
 */
const saveChain = (conn: any) => async (chain: string, number_of_sequence: number): Promise<boolean> => {
  // Try to save
  let err: any = null;
  try {
    await conn.db('r3d').collection('chains').insertOne({
      chain,
      number_of_sequence,
    });
  } catch (errorOnSave: any) {
    err = errorOnSave;
  }

  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    } else {
      resolve(true);
    }
  });
};

export default saveChain;
