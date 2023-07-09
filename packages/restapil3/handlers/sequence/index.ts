/**
 *
 * @param request
 * @param response
 */
const sequenceHandler = (services: any) => (request: any, response: any) => {
  services
    .chainService
    .saveChain(request.body.chain)
    .then((hasSequences: any) => {

      if (hasSequences) {
        response
          .status(200)
          .send();
      } else {
        response
        .status(403)
        .send();
      }

    })
    .catch((err: any) => {

      response
        .status(403)
        .send();

    });
};

export default sequenceHandler;
