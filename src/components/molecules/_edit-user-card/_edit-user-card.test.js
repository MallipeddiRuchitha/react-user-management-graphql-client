import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditUserCard from './_edit-user-card';




describe("EditUserCard component",() =>{
    
     
    test("Matches the snapshot",() => {
        const editUserCard = create(<EditUserCard />);
        expect(editUserCard.toJSON()).toMatchSnapshot();

    })
    test("EditUserCard element is rendered",() => {
        const { getByTestId, getByText } = render(<EditUserCard />);
        expect(getByTestId("editUserCard")).toBeInTheDocument();
        
    });
  
   
   
    
});