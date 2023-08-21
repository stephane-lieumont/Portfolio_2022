/* eslint-disable react/react-in-jsx-scope */
import { SpecialitiesDevData } from "~/__mocks__/datas/dev.projects.data";
import Specialities from "~/components/Specialities";
import { render, screen } from "~/config/config.jest";

describe("When call Component Specialities", () => {
  test("Should render Specialities default component", () => {
    render(<Specialities />);
    const component = screen.getByTestId("specialities");

    expect(component).toBeInTheDocument();
  });

  test("Should render Specialities with params component", () => {
    render(<Specialities specialities={SpecialitiesDevData} contentLoaded />);
    const component = screen.getByTestId("specialities");

    expect(component).toBeInTheDocument();
  });
});
