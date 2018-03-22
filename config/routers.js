module.exports = function (app, utils, models, auth) {
    var Auth = require('../app/lib/auth')(app, utils);
    var auth = Auth;

    var ctrls = utils.loadControllers(models);
    var names = utils.getModelNames();
    // var auth = auth.load();

    app.get('/api', (req, res) => {
        res.render('index')
    })
    
    app.get('/api/khachhang/check/:sdt', ctrls['khachhang'].check );

    app.post('/api/choduyetkh', ctrls['choduyetkh'].insert);
    Auth.load();


    //set get default api
    names.forEach(function (name) {

        console.log('Route /' + name + " completed.");
        app.get('/api/' + name + '/:limit([0-9]+)/:page([0-9]+)', ctrls[name].list); // get list with page
        app.get('/api/' + name, ctrls[name].list); // get list with default page = 1
        app.get('/api/' + name + '/:id', ctrls[name].get); // get by id
        if(name != 'choduyetkh') app.post('/api/' + name, ctrls[name].insert); // insert
        app.post('/api/' + name + '/search', ctrls[name].search); // search
       
        if(name != 'chitiethd' && name != 'chitietdh' && name != 'chitietnh') {
            app.delete('/api/' + name + '/:id', ctrls[name].delete); // delete
            app.put('/api/' + name + '/:id', ctrls[name].update); // update
        } else {
            app.delete('/api/' + name + '/:id/:id2', ctrls[name].delete); // delete
            app.put('/api/' + name + '/:id/:id2', ctrls[name].update); // update
        }
    });

    //app.post('/api/auth', auth.load);

    // catch-all
    app.get('*', function (req, res) { res.status(404).json({ error: 'Invalid GET request' }) })
    app.post('*', function (req, res) { res.status(404).json({ error: 'Invalid POST request' }) })
    app.delete('*', function (req, res) { res.status(404).json({ error: 'Invalid DELETE request' }) })
}