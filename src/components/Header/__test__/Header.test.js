import { screen } from '@testing-library/react';
import Header from '../Header';
import logo from "../../../assets/img/natwestlogo.png"
import { render,unmountComponentAtNode } from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";


let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// it("changes value when clicked", () => {
//   const onChange = jest.fn();
//   act(() => {
//     render(<Header onChange={onChange} />, container);
//   });

//   // get a hold of the button element, and trigger some clicks on it
//   const button = document.querySelector("[data-testid=toggle]");
//   expect(button.innerHTML).toBe("Turn on");

//   act(() => {
//     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(onChange).toHaveBeenCalledTimes(1);
//   expect(button.innerHTML).toBe("Turn off");

//   act(() => {
//     for (let i = 0; i < 5; i++) {
//       button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     }
//   });

//   expect(onChange).toHaveBeenCalledTimes(6);
//   expect(button.innerHTML).toBe("Turn on");
// });


// it("renders with or without a name", () => {
//   act(() => {
//     render(<Header name="Hello"/>, container);
//   });
//   expect(container.textContent).toBe("Hello");


//   act(() => {
//     render(<Header name="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Jenny");

//   act(() => {
//     render(<Header name="Margaret" />, container);
//   });
//   expect(container.textContent).toBe("Margaret");
// });


