import { useQuery } from "@apollo/react-hooks";
import React from "react";
import gql from 'graphql-tag';

export function queryDecorator(query) {
    const data = useQuery(query);

    return (Component) => {
        return (
            <Component {...data} />
        )
    }
}