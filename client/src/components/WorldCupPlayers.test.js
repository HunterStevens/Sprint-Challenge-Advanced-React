import React from "react";
import { render, fireEvent} from "@testing-library/react";
import WorldCupPlayers from './WorldCupPlayers';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';


test("check if the page is rendered", () =>{
    const {getByTestId} = render(<WorldCupPlayers/>);

    const headerTag = getByTestId(/playerhead/i);
    expect(headerTag).toBeVisible();

    const cardBody = getByTestId(/playerBody/i);
    expect(cardBody).toBeVisible();
})

test("check if the cards are displaying", () =>{
  const info = {name:"Hunter", country:"USA", searches:"2"}

  render(<WorldCupPlayers info={info}/>)
})