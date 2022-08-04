import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals    from './reportWebVitals';
import { ApolloClient, 
        ApolloProvider, 
        HttpLink, 
        InMemoryCache, 
        gql }             from '@apollo/client';
import { setContext }     from '@apollo/client/link/context';


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('vendor-token')
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});


const query = gql`
query {
  fetchItems {
    name,
    price
  },
  allVendors
}
`

client.query({ query })
  .then((response) => {
    console.log(response.data)
  })

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
