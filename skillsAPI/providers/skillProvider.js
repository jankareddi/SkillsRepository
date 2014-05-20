
var skillProvider = function(skillModel){
	this.skillModel = skillModel;
};

skillProvider.prototype.getSkills = function(callback) {
	this.skillModel.find({}, function(err, skills) {
		if (!err) {
			callback(null, skills);
		}
		else {
			callback(err, null);
		}
	});
};

skillProvider.prototype.addSkill = function(skillData, callback) {
	var newSkill = new this.skillModel(skillData);
	newSkill.save();
	callback();
};

skillProvider.prototype.updateSkill = function(skillData, updatedSkillName, callback) {
	this.skillModel.findOne(skillData, function(err, skill) {
		if (!err) {
			skill.name = updatedSkillName;
			skill.save();
			callback(null);
		}
		else {
			callback(err);
		}
	});
};

skillProvider.prototype.deleteSkill = function(skillData, callback) {
	this.skillModel.findOne(skillData, function(err, skill) {
		if (!err) {
			skill.remove();
			callback(null);
		}
		else {
			callback(err);
		}
	});
};

module.exports.skillProvider = skillProvider;