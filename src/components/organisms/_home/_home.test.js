import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home,{ USER_GET_QUERY} from './_home';
import { ApolloProvider } from 'react-apollo'
import { createMockClient } from 'mock-apollo-client';
//import { MockedProvider } from '@apollo/client/testing';

describe("Home component",() =>{
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
        USER_GET_QUERY,
        () => Promise.resolve({ data: { data: {
            user: [{ id: '1', name: 'abc', email: 'abc@gmail.com' }],
           } } }));

    const mocks = [
        {
          request: {
            query: USER_GET_QUERY,
           
          },
          result: {
            data: {
             user: [{ id: '1', name: 'abc', email: 'abc@gmail.com' }],
            },
          },
        },
      ];
     
    test("Matches the snapshot",() => {
        const home = create(  <ApolloProvider client={mockClient}><Home /></ApolloProvider>);
        expect(home.toJSON()).toMatchSnapshot();

    })   

    test("home element is rendered",() => {
        const { getByTestId, getByText } = render( <ApolloProvider client={mockClient}><Home /></ApolloProvider>);
        expect(getByTestId("home")).toBeInTheDocument();
        
    });
    test("title is displayed",() => {
        const { getByTestId, getByText } = render( <ApolloProvider client={mockClient}><Home /></ApolloProvider>);
        expect(getByText("User Management")).toBeInTheDocument();
        
    });
    test("Add element must be appeared  on clicking addButton",() => {
        const { getByTestId, getByText } = render( <ApolloProvider client={mockClient}><Home /></ApolloProvider>);
        fireEvent.click(getByText("ADD USER"));
        expect(getByText("Create user")).toBeInTheDocument();
        
    });
    

    
    
});