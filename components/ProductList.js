import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const ProductList = (props) => {
    const { loading, error, data } = useQuery(gql`
                 {
                     products {
                         id
                         title
                         description
                         image {
                             url
                         }
                     }
                 }
             `);

    console.log(data.products, ">> File: ProductList, Line: 18");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {"test"}
        </div>
    );
};

export default ProductList;
