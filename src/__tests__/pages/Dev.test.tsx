/* eslint-disable react/react-in-jsx-scope */
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "~/config/config.jest";
import Dev from "~/pages/Dev";
import store from "~/store/main.store";

window.scrollTo = jest.fn();

describe("When call Dev Page", () => {
  test("Should render Dev default", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Dev />
        </MemoryRouter>
      </Provider>
    );

    const component = screen.getByTestId("dev-page");

    expect(component).toBeInTheDocument();
  });
});
