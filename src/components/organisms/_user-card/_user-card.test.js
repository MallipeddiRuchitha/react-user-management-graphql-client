import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserCard from './_user-card';
import { ApolloProvider } from 'react-apollo'

const client={};

describe("UserCard component",() =>{
    
     
    test("Matches the snapshot",() => {
        const userCard = create(<ApolloProvider client={client}><UserCard /></ApolloProvider>);
        expect(userCard.toJSON()).toMatchSnapshot();

    })
    test("userCard element is rendered",() => {
        const { getByTestId, getByText } = render(<ApolloProvider client={client}><UserCard /></ApolloProvider>);
        expect(getByTestId("userCard")).toBeInTheDocument();
        
    });

    test("DeleteIcon is rendered",() => {
        
        const { getByTestId, getByText,getByRole } = render(<ApolloProvider client={client}><UserCard /></ApolloProvider>);
        expect(getByTestId("deleteIcon")).toBeInTheDocument();
    });
    test("EditIcon is rendered",() => {
        
        const { getByTestId, getByText,getByRole } = render(<ApolloProvider client={client}><UserCard /></ApolloProvider>);
        expect(getByTestId("editIcon")).toBeInTheDocument();
    });
    test(" when EditIcon is clicked input must be rendered",() => {
        
        const { getAllByTestId, getByTestId } = render(<ApolloProvider client={client}><UserCard /></ApolloProvider>);
        fireEvent.click(getByTestId("editIcon"));
        expect(getAllByTestId("input")).toHaveLength(2);
    });

    
});