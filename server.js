const koa = require('koa');
const {dbConnection} = require('./helper/dbConnection');

const app = new koa();

app.use(async (ctx) => {
    console.log('Hello world');
})

app.listen(3000, () => {
    dbConnection();
    console.log('Server is running on port 3000');
});