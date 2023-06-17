const { UserList } = require('../FakeData');

const resolvers = {
	Query: {
		users() {
			return UserList;
		},
		user(_, args) {
		
		}
	},
};

module.exports = { resolvers };
