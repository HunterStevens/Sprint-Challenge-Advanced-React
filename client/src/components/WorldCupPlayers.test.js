import React from "react";
import { render, fireEvent} from "@testing-library/react";
import WorldCupPlayers from './WorldCupPlayers';
import { act } from 'react-dom/test-utils';


test("check if the page is rendered with cards displaying", () =>{
    const {getByTestId, getByText} = render(<WorldCupPlayers/>);

    const headerTag = getByTestId(/playerhead/i);
    expect(headerTag).toBeInTheDocument();

    const cardBody = getByTestId(/playerBody/i);
    expect(cardBody).toBeVisible();
})