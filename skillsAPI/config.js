var currentEnv = 'development';

module.exports = function() {

	var returnConfig = {};
	var config = {
		development: {
			port : 3000,
			dbString : 'mongodb://localhost/test'
		},
		production: {
			port : 3005,
			dbString : 'mongodb://localhost/test'
		}
	};

	if (currentEnv === 'development')
		returnConfig = config.development;
	else if (currentEnv === 'production')
		returnConfig = config.production;

	return returnConfig;
}();