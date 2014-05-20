
module.exports = function(userModel) {
    var userProviderDef = require('./../providers/userProvider').userProvider;
    var userProvider = new userProviderDef(userModel);

    var getFn = function(req, res) {
        if (typeof req.query.searchBy != 'undefined') {
            if (req.query.searchBy === 'skill') {
                userProvider.findBySkill(req.query.p, function(err, users) {
                    res.send(users);
                });
            }
            else if (req.query.searchBy === 'name') {
                userProvider.findByName(req.query.p, function(err, users) {
                    res.send(users);
                });
            }
        }
        else {
            userProvider.findByFilter({}, function(err, users) {
                res.send(users);
            });
        }
    }

    var getByIdFn = function(req, res) {
    
        var filterData = {_id: 0};
        filterData._id = req.params.id;

        userProvider.findByFilter(filterData, function(err, users) {
            if (!err) {
                res.send(users);
            }
            else {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('resource not found');
            }
        });
    }

    var postNewFn = function(req, res) {

        userProvider.addNewUser(req.body, function() {
            var s1 = JSON.stringify(req.body);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('OK');
        });
    }

    var updateFn = function(req, res) {
        var user = {_id : 0};
        user._id = req.params.id;
        userProvider.updateUser(user, req.body, function() {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('');
        });
    }

    var deleteFn = function(req, res) {
        var user = {_id : 0};
        user._id = req.params.id;
        userProvider.deleteUser(user, function() {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('');
        });
    }

    var userMethods = {
        get : getFn,
        getById : getByIdFn,
        post : postNewFn,
        update : updateFn,
        remove : deleteFn
    }

    return userMethods;
};


