const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'M2I Swagger 명세서',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/m2iSwagger.js'], // files containing annotations as above
};

app.listen(8080, function() {
	console.log('listening on 8080');
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/ex', (req, res) => {
  res.send('Hello World!');
});
