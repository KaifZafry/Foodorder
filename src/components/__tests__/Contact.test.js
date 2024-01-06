import { render,screen } from "@testing-library/react";
import Contact from "../Contact";

test("should contact render", ()=>{
    render(<Contact/>);
    const heading= screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("should render the button in our page", ()=>{
    render(<Contact/>);

    // Querying 
    const button= screen.getByRole("button");
    // Assertion

    expect(button).toBeInTheDocument();
})

test("should render the input field in our page", ()=>{
    render(<Contact/>);

    const input= screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
});