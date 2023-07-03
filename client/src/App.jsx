import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DisplayData from './DisplayData';
const App = () => {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: 'http://localhost:4000/graphql',
	});
	return (
		<ApolloProvider client={client}>
			<div>
				<h1>List of Users</h1>
				<DisplayData />
			</div>
		</ApolloProvider>
	);
};

export default App;
