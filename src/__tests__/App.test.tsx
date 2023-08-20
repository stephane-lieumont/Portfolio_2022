/* eslint-disable react/react-in-jsx-scope */
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import App from "~/App";
import { render, screen } from "~/config/config.jest";
import store from "~/store/main.store";

window.scrollTo = jest.fn();

describe("When call React App", () => {
  test("Should render App default", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const component = screen.getByTestId("app");

    expect(component).toBeInTheDocument();
  });
});
