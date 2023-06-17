const { gql } = require('apollo-server');

typeDefs = gql`
	type User {
		id: ID!
		name: String!
		username: String!
		age: Int!
		nationality: Nationality!
		friends: [User]
		favoriteMovies: [Movie]
	}

	type Movie {
		id: ID!
		name: String!
		yearOfPublication: Int!
		isInTheaters: Boolean!
	}

	type Query {
		users: [User!]!
		user(id: ID!): User
		movies: [Movie!]!
		movie(name: String!): Movie!
	}

	input CreateUserInput {
		name: String!
		username: String!
		age: Int!
		nationality: Nationality = KENYA
	}

	input UpdateUsernameInput{
		id: ID!
		newUsername: String!
	}

	type Mutation {
		createUser(input: CreateUserInput!): User
		updateUsername(input: UpdateUsernameInput!): User
	}

	enum Nationality {
		GERMANY
		CHILE
		CANADA
		BRAZIL
		INDIA
		KENYA
	}
`;

module.exports = { typeDefs };
