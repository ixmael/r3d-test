/**
 *
 * @param request
 * @param response
 */
const statsHandler = (services: any) => (_: any, response: any) => {

  services
    .chainService
    .getStats()
    .then((stats: any) => {
      response
        .setHeader('Content-Type', 'application/json')
        .status(200)
        .end(JSON.stringify(stats));
    })
    .catch((err: any) => {
      console.log('err', err);
      response
        .status(500)
        .send();
    });
};

export default statsHandler;
