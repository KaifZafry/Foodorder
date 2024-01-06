import { render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
import Hero from "../Hero";



global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the body component with the search button", async() => {
    await act(async()=>
        render(
        <BrowserRouter>
            <Hero/>
        </BrowserRouter>
        )
    )

    // const search= screen.getByRole("button", {name: "Search"});
    // console.log(search)
    // expect(search).toBeInTheDocument()
})