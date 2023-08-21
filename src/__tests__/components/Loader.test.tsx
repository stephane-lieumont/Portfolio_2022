/* eslint-disable react/react-in-jsx-scope */
import Loader from "~/components/Loader";
import { render, screen } from "~/config/config.jest";

describe("When call Component Loader", () => {
  test("Should render Loader default component", () => {
    render(<Loader />);

    const component = screen.getByTestId("loader");

    expect(component).toBeInTheDocument();
  });
});
