module.exports = function(skillModel) {
	var skillProviderDef = require('./../providers/skillProvider').skillProvider;
	var skillProvider = new skillProviderDef(skillModel);

	var getAllFn = function(req, res) {
		skillProvider.getSkills(function(err, skills) {
			if (!err) {
				res.send(skills);
			}
		});
	}

	var addNewFn = function(req, res) {
		skillProvider.addSkill(req.body, function() {
			res.writeHead(200, {'Content-Type': 'text/plain'});
	        res.end('OK');
		});
	}

	var updateFn = function(req, res) {
		var skill = {_id : 0};
		skill._id = req.params.skillId;
		skillProvider.updateSkill(skill, req.body.name, function() {
			res.writeHead(200, {'Content-Type': 'text/plain'});
	    	res.end('');
		});
	}

	var deleteFn = function(req, res) {
		var skill = {_id : 0};
		skill._id = req.params.skillId;
		skillProvider.deleteSkill(skill, function() {
			res.writeHead(200, {'Content-Type': 'text/plain'});
	    	res.end('');
		});
	}

	var skillMethods = {
		getAll : getAllFn,
		post : addNewFn,
		update : updateFn,
		remove : deleteFn
	}

	return skillMethods;
};
