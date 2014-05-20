var userProvider = function(userModel){
	this.userModel = userModel;
};

userProvider.prototype.addNewUser = function(userData, callback) {
	var newUser = new this.userModel(userData);
	newUser.save();
	callback();
};

userProvider.prototype.findByFilter = function(filterData, callback) {
	this.userModel.find(filterData, function(err, users) {
		if (!err) {
			callback(null, users)
		}
		else {
			callback(err, null);
		}
	});
};

userProvider.prototype.findBySkill = function(filterData, callback) {
	this.userModel.find({'skills.type': filterData}, function(err, users) {
		if (!err) {
			callback(null, users)
		}
		else {
			callback(err, null);
		}
	});
};

userProvider.prototype.findByName = function(filterData, callback) {
	var query = this.userModel.find({})
	.where('firstName').equals(filterData)
	.or('lastName').equals(filterData);
	
	query.exec(function(err, users) {
		if (!err) {
			callback(null, users)
		}
		else {
			callback(err, null);
		}
	});
};

userProvider.prototype.updateUser = function(userData, updatedUser, callback) {
	this.userModel.findOne(userData, function(err, user) {
		if (!err) {
			user.firstName = updatedUser.firstName;
			user.lastName = updatedUser.lastName;
			user.userID = updatedUser.userID;
			user.skills = updatedUser.skills;
			user.save();
			callback(null);
		}
		else {
			callback(err);
		}
	});
};

userProvider.prototype.deleteUser = function(userData, callback) {
	this.userModel.findOne(userData, function(err, user) {
		if (!err) {
			user.remove();
			callback(null);
		}
		else {
			callback(err);
		}
	});
};

module.exports.userProvider = userProvider;