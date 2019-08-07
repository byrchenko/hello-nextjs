import gql from "graphql-tag";

export const productQuery = gql`
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
`;