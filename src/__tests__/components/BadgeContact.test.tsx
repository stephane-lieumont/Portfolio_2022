/* eslint-disable react/react-in-jsx-scope */
import BadgeContact from "~/components/BadgeContact";
import { render, screen } from "~/config/config.jest";

describe("When call Component BadgeContact", () => {
  test("Should render BadgeContact default component", () => {
    render(<BadgeContact />);
    const component = screen.getByTestId("badge-contact");
    expect(component).toBeInTheDocument();
  });
});
