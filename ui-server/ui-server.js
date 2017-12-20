import express from 'express';
import path from 'path';

import serverRender from './renderers/server';

const app = express();
const port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// serve the public folder.
app.use(express.static('ui-server/public'))

// Render the index page
app.get('/', (req, res) => {
    const initialContent = serverRender();
    res.render('index', { initialContent });
});

app.listen(port, () => console.log(`UI server started listening on port ${port}!`))
