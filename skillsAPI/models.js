module.exports = function(mongoose) {

	var Schema = mongoose.Schema;
	var UserSchema = new Schema({
		userID: String,
		firstName: String,
		lastName: String,
		role: String,
		skills: [{type: {type: String}, level: String}]
	});

	var SkillSchema = new Schema({
		name: String
	});

	var models = {
		User : mongoose.model('User', UserSchema),
		Skill: mongoose.model('Skill', SkillSchema)
	};

	return models;
};