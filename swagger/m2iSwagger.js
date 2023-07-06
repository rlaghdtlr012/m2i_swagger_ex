/**
 * @openapi
 * /ex:
 *   get:
 *     summary: 예시 api
 *     parameters:
 *       - in: query
 *         name: number
 *         type: int
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                     properties:
 *                         number:
 *                             type: int
 *                             example: 3
 *                         writer:
 *                             type: string
 *                             example: 철수
 *                         title:
 *                             type: string
 *                             example: 제목입니다.
 *                         contents:
 *                             type: string
 *                             example: 내용입니다.
 */