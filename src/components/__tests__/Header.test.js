import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load on the web page", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbutton = screen.getByRole("button",{name: "login"});
  // const loginbutton = screen.getByText("login");

  expect(loginbutton).toBeInTheDocument();
});
// it("should render header component onclick  with login to logout", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginbtn = screen.getAllByRole("button",{name: "login"});
//   // const loginbutton = screen.getByText("login");
//   fireEvent.click(loginbtn);

//   const logoutbutton = screen.getAllByRole("button",{name:"logout"});

//   expect(logoutbutton).toBeInTheDocument();
// });
it("should render header component onclick with login to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtn = screen.getAllByRole("button", { name: "login" });
  fireEvent.click(loginbtn[0]); // Assuming there is only one login button

  const logoutbutton = screen.getAllByRole("button", { name: "logout" });

  expect(logoutbutton).toHaveLength(1); // Check if there is exactly one logout button
});


it("should render header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  // const loginbutton = screen.getByText("login");

  expect(cartItems).toBeInTheDocument();
});
