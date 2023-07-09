/**
 * @swagger
 * components:
 *   schemas:
 *     Stats:
 *       type: object
 *       properties:
 *         count_sequence_string:
 *           type: number
 *           description: count the chains with one or more sequences
 *         count_no_sequence_string:
 *           type: number
 *           description: count the chains without sequences
 *       example:
 *         count_sequence_string: 8
 *         count_no_sequence_string: 60
 * tags:
 *   name: Stats
 *   description: The stats
 * /stats:
 *   post:
 *     summary: Get the stats
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Show the stats
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Stats'
 *       500:
 *         description: There is an error on the server
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
