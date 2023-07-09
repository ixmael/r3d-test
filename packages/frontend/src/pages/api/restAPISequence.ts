export default function restAPISequence(chain: string) {
  const chainObjeted = {
    chain,
  };

  const request = new Request('http://localhost:3007/sequence', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chainObjeted),
  });

  return fetch(request)
    .then((response) => {
      if (response.status === 200 || response.status === 403) {
        return true;
      }
    })
    .catch((err) => {
      return err;
    });
};
