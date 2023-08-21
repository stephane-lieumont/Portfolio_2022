/* eslint-disable react/react-in-jsx-scope */
import Carousel from "~/components/Carousel";
import { fireEvent, render, screen, waitFor } from "~/config/config.jest";
import { SliderImagesData } from "~/datas/3d.projects.data";
import * as hooks from "~/hooks/useOnLoadImages";

jest.mock("~/datas/3d.projects.data", () =>
  jest.requireActual("~/__mocks__/datas/3d.projects.data")
);
jest.useFakeTimers();

describe("When call Component Caroussel", () => {
  test("Should render Caroussel default component", () => {
    jest.spyOn(hooks, "useOnLoadImages");

    render(<Carousel slides={SliderImagesData} />);

    const component = screen.getByTestId("caroussel");

    const handleLoadImage = jest.fn();
    const handleErrorImage = jest.fn();

    const image = screen.getAllByRole("img")[0] as HTMLImageElement;

    image.addEventListener("load", handleLoadImage);
    image.addEventListener("error", handleErrorImage);

    fireEvent.load(image);
    fireEvent.error(image);

    expect(component).toBeInTheDocument();
  });

  test("Should render Caroussel unvisible component", () => {
    render(<Carousel slides={SliderImagesData} visible={false} />);

    const component = screen.getByTestId("caroussel");
    expect(component).toBeInTheDocument();
  });

  test("Should render Caroussel with custom delay component", async () => {
    render(<Carousel slides={SliderImagesData} delay={200} />);

    const component = screen.getByTestId("caroussel");
    expect(component).toBeInTheDocument();
  });

  test("Should add first image slide on img url", async () => {
    render(<Carousel slides={SliderImagesData} />);

    const handleLoadImage = jest.fn();
    const image = screen.getAllByRole("img")[0] as HTMLImageElement;
    image.addEventListener("onload", handleLoadImage);

    fireEvent.load(image);

    expect(image.src).toContain("maison-moderne-2014.jpg");
  });

  test("Should render Caroussel with timer event", async () => {
    const delay = 100;
    const delayTest = delay * (SliderImagesData.length * 2);

    jest.spyOn(hooks, "useOnLoadImages").mockImplementation(() => true);
    jest.spyOn(global, "setTimeout");

    render(<Carousel slides={SliderImagesData} delay={delay} />);

    const image = screen.getAllByRole("img")[0] as HTMLImageElement;
    fireEvent.load(image);

    await waitFor(async () => {
      await new Promise((r) => setTimeout(r, delayTest));
    });

    expect(setTimeout).toBeCalled();
  });
});
