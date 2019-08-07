import ProductList from "../components/ProductList";




import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag';
import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
    link: createHttpLink({
        uri: "http://localhost:1337/graphql",
        fetch: fetch,
    }),
    cache: new InMemoryCache(),
});





const Index = (props) => {

    // client
    // .query({
    //     query: gql`
    //         {
    //             products {
    //                 id
    //                 title
    //                 description
    //                 image {
    //                     url
    //                 }
    //             }
    //         }
    //     `
    // })
    // .then(result => console.log(result.data.products));





    return (
        <ApolloProvider client={client}>
            <ProductList />
        </ApolloProvider>
    );
};

export default Index;