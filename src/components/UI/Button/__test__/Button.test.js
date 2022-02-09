import { screen } from '@testing-library/react';
import { render,unmountComponentAtNode } from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import Button from '../Button';

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



it("renders with or without the correct label", () => {
    act(() => {
      render(<Button label="Go back"/>, container);
    });
    expect(container.textContent).toBe("Go back");
  
  
    act(() => {
      render(<Button label="Create campaign" />, container);
    });
    expect(container.textContent).toBe("Create campaign");
  
    act(() => {
      render(<Button label="End" />, container);
    });
    expect(container.textContent).toBe("End");
  });
  

it("Button can be clicked", () => {
    const onChange = jest.fn();
    act(() => {
      render(<Button onChange={onChange} label="Create campaign"/>, container);
    });
  
    // get a hold of the button element, and trigger some clicks on it
    const button = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Create campaign");
  
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  
    expect(onChange).toHaveBeenCalledTimes(1);
  
    act(() => {
      for (let i = 0; i < 5; i++) {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
  });





