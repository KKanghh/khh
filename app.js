const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8081);

app.get('/', (req, res) => {
    res.send('Hi');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})