import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
const App = () => {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: 'http://localhost:3001/graphql',
	});
	return (
		<ApolloProvider client={client}>
			<div>
				<h1>List of Users</h1>
			</div>
		</ApolloProvider>
	);
};

export default App;
