import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import WorldCupPlayers from './WorldCupPlayers';
import { act } from 'react-dom/test-utils';

test("check if the page is rendered with cards displaying", () =>{
    const {getByTestId, getByText, queryByText} = render(<WorldCupPlayers/>);

    const headerTag = queryByText(/players info/i);
    expect(headerTag).toBeInTheDocument();

    const cardName = getByText(/name:/i);
    expect(cardName).toBeVisible();
})