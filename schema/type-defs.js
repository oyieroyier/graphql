const { gql } = require('apollo-server');

typeDefs = gql`
	type User {
		id: ID!
		name: String!
		username: String!
		age: Int!
		nationality: Nationality!
		friends: [User]
	}

	type Query {
		users: [User!]!
		user(id: ID!): User
	}

	enum Nationality {
		GERMANY
		CHILE
		CANADA
		BRAZIL
		INDIA
	}
`;

module.exports = { typeDefs };
