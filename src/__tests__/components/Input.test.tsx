/* eslint-disable react/react-in-jsx-scope */
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { act } from "react-dom/test-utils";
import Input from "~/components/Input";
import { fireEvent, render, screen } from "~/config/config.jest";
import { HTMLFormType } from "~/interfaces/forms.intf";

describe("When call Component Input", () => {
  test("Should render Input default component", () => {
    render(<Input />);

    const component = screen.getByTestId("input");

    expect(component).toBeInTheDocument();
  });

  test("Should render Input textarea component", () => {
    render(<Input htmlFormType={HTMLFormType.textarea} />);

    const component = screen.getByTestId("input");

    expect(component).toBeInTheDocument();
  });

  test("Should render Input with append icon component", () => {
    render(<Input appendIcon={faAddressBook} />);

    const component = screen.getByTestId("input");

    expect(component).toBeInTheDocument();
  });

  test("Should render Input with prepend icon component", () => {
    render(<Input prependIcon={faAddressBook} />);

    const component = screen.getByTestId("input-container");

    expect(component).toBeInTheDocument();
  });

  test("Should render Input with error icon component", () => {
    render(<Input error={true} />);

    const component = screen.getByTestId("input-container");

    expect(component).toBeInTheDocument();
  });

  test("Should render Input disabled icon component", () => {
    render(<Input disabled />);

    const component = screen.getByTestId("input-container");

    expect(component).toBeInTheDocument();
  });

  test("Should render Input disabled icon component", () => {
    const callbackClick = jest.fn();

    render(<Input readOnly onClick={callbackClick} />);

    const handleWrapperClick = jest.fn();

    const component = screen.getByTestId("input-container");
    const wrapper = screen.getByTestId("wrapper");

    wrapper.addEventListener("click", handleWrapperClick);

    act(() => {
      fireEvent.click(wrapper);
    });

    expect(component).toBeInTheDocument();
    expect(handleWrapperClick).toBeCalled();
  });

  test("Should click on Input and enter text", () => {
    const callbackChange = jest.fn();
    const callbackClick = jest.fn();
    const callbackBlur = jest.fn();

    render(<Input onChange={callbackChange} onClick={callbackClick} onBlur={callbackBlur} />);

    const handleWrapperClick = jest.fn();
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    const handleBlur = jest.fn();

    const wrapper = screen.getByTestId("wrapper");
    const input = screen.getByTestId("input");

    wrapper.addEventListener("click", handleWrapperClick);
    input.addEventListener("click", handleClick);
    input.addEventListener("change", handleChange);
    input.addEventListener("blur", handleBlur);

    act(() => {
      fireEvent.click(wrapper);
      fireEvent.click(input);
      fireEvent.change(input, { target: { value: "test" } });
      fireEvent.blur(input);
    });

    expect(handleClick).toBeCalled();
    expect(handleWrapperClick).toBeCalled();
    expect(handleChange).toBeCalled();
    expect(handleBlur).toBeCalled();
  });
});
