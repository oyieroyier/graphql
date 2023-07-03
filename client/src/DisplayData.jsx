import { useQuery, gql } from '@apollo/client';
import React from 'react';

const QUERY_ALL_USERS = gql`
	query GetAllUsers {
		users {
			username
			nationality
			friends {
				name
				age
				id
			}
		}
	}
`;
const DisplayData = () => {
	const { data, loading, error } = useQuery(QUERY_ALL_USERS);
	if (loading) {
		return <h1>Data is Loading</h1>;
	}
	if (data) {
		console.log(data);
	}
	if (error) {
		return <h1>{error.message}</h1>;
	}

	return (
		<div>
			{data &&
				data.users.map((person) => (
					<div key={person.username}>
						<h1>Username: {person.username}</h1>
						<h1>Nationality {person.nationality}</h1>
						{/* <h1>{person.friends}</h1> */}
					</div>
				))}
		</div>
	);
};

export default DisplayData;
