// requiring our packages
const bodyParser= require('body-parser');
const express= require('express');
const path= require('path');
// assigning app and PORT. PORT is  assigned to where the port used for localhost would be 8069;
// or if run on heroku or another (PaaS) platform as a  service, the port will  be used according to the
// designation of the PaaS. Heroke is a PaaS that allows for CI/CD, continuous integration/continuous deployment.
const app =express();
let PORT = process.env.PORT || 8069;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);



app.listen(PORT, function(){
    console.log('App  is listening on PORT http://localhost:'+PORT);
})