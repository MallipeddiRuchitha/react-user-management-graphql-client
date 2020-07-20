import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './home-page';
import { ApolloProvider } from 'react-apollo'
import { createMockClient } from 'mock-apollo-client';
import { USER_GET_QUERY} from '../../components/organisms/_home/_home';
describe("HomePage component",() =>{
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
        USER_GET_QUERY,
        () => Promise.resolve({ data: { data: {
            user: [{ id: '1', name: 'abc', email: 'abc@gmail.com' }],
           } } }));
     
    test("Matches the snapshot",() => {
        const userCard = create(<ApolloProvider client={mockClient}><HomePage /></ApolloProvider>);
        expect(userCard.toJSON()).toMatchSnapshot();

    })
    test("home page element is rendered",() => {
        const { getByTestId, getByText } = render(<ApolloProvider client={mockClient}><HomePage /></ApolloProvider>);
        expect(getByTestId("homePage")).toBeInTheDocument();
        
    });

    

    
});