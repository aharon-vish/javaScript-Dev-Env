/**
 * Created by AharonVishinsky on 16/01/2017.
 */
import  express from 'express';
import  path from 'path';
import  open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

const port = 3000;
const app = express();
const compilre = webpack(config);

app.use(require('webpack-dev-middleware')(compilre, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});