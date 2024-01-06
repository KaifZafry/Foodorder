import { render,screen } from "@testing-library/react"
import RestaurentCard, { withPromotedLabel } from "../Restaurent"
import resCardmock from "../mocks/resCard.mock.json"

it("should render Restaurant card data with props data", ()=>{
    render(<RestaurentCard resData={resCardmock}/>)

    const name= screen.getByText("Hotel Malabar");
    expect(name).toBeInTheDocument();
})
it("should render Restaurant card with promoted label", ()=>{

    const mockRestaurantCard=()=>  <RestaurentCard resData={resCardmock}/>

    const RestaurantCardwithPromptedLabel= withPromotedLabel(mockRestaurantCard)
    render(<RestaurantCardwithPromptedLabel />)

    const label= screen.getByText("Now Open");
    expect(label).toBeInTheDocument();
})