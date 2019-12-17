import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/users';
import auth from './routes/auth';
import event from './routes/event';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/event', event);

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(6060, () => {
    console.log('Running on localhost 6060')
});
