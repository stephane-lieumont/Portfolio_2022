/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "~/config/config.jest";
import Footer from "~/layout/Footer";

describe("When call Layout Footer", () => {
  test("Should render Footer default layout", () => {
    render(<Footer />);
    const component = screen.getByTestId("footer");

    expect(component).toBeInTheDocument();
  });
});
