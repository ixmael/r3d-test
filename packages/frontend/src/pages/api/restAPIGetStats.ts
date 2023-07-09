export default function restAPIGetStats() {
  const request = new Request('http://localhost:3007/stats', {
    method: 'GET',
  });

  return fetch(request)
    .then((response) => response.json())
    .then((stats) => {
      return stats;
    })
    .catch((err) => {
      return err;
    });
};
