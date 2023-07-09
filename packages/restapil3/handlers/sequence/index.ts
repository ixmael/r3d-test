/**
 *
 * @param request
 * @param response
 */
const sequenceHandler = (services: any) => (request: any, response: any) => {
  if (!request.body.chain || typeof request.body.chain !== 'string') {
    response
      .status(400)
      .send('malformed request');
  } else {
    // If the request is malformed, this sections throws an error, but this
    // not handle it
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
      .catch((_: Error) => {

        response
          .status(500)
          .send('internal server error');

      });
  }
};

export default sequenceHandler;
