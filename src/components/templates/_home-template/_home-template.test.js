import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeTemplate from './_home-template';
import { ApolloProvider } from 'react-apollo';
import { USER_GET_QUERY} from '../../organisms/_home/_home';
import { createMockClient } from 'mock-apollo-client';
describe("HomeTemplate component",() =>{
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
        USER_GET_QUERY,
        () => Promise.resolve({ data: { data: {
            user: [{ id: '1', name: 'abc', email: 'abc@gmail.com' }],
           } } }));
     
    test("Matches the snapshot",() => {
        const mockClient = createMockClient();
    mockClient.setRequestHandler(
        USER_GET_QUERY,
        () => Promise.resolve({ data: { data: {
            user: [{ id: '1', name: 'abc', email: 'abc@gmail.com' }],
           } } }));
        const userCard = create(<ApolloProvider client={mockClient}><HomeTemplate /></ApolloProvider>);
        expect(userCard.toJSON()).toMatchSnapshot();

    })
    test("home template element is rendered",() => {
        const { getByTestId, getByText } = render(<ApolloProvider client={mockClient}><HomeTemplate /></ApolloProvider>);
        expect(getByTestId("homeTemplate")).toBeInTheDocument();
        
    });

    

    
});