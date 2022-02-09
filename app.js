const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const productRouter = require('./routes/product');

app.use(express.json());
app.use('/product', productRouter);

app.get('/', (req, res) => {
  res.send('<h1>How to build a Node.js Express API with a DynamoDB and host it on Elastic Beanstalk</h1>');
})

app.get('/health', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log('Demo app is up and listening to port: ' + port);
})