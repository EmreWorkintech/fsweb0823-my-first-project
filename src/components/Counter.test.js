import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

/*
beforeAll
beforeEach
afterAll
afterEach
*/

beforeEach(() => {
  render(<Counter />);
});

describe("Increase Tests", () => {
  let display;
  beforeEach(() => {
    display = screen.getByTestId("counter-display");
  });

  test("starts with the initial value: 0", () => {
    expect(display).toHaveTextContent(/Counter: 0/);
  });

  test("increases counter by 1 after button click", async () => {
    //arrange
    const incButton = screen.getByTestId("increase");
    //act
    userEvent.click(incButton);
    const newDisplay = await screen.findByTestId("counter-display");

    //assert
    expect(newDisplay).toHaveTextContent(/Counter: 1/);
  });

  test("decreases counter by 1 after button click", async () => {
    //arrange
    const incButton = screen.getByTestId("increase");
    const decButton = screen.getByTestId("decrease");
    //act
    userEvent.click(incButton);
    userEvent.click(incButton);
    userEvent.click(decButton);

    await waitFor(() => {
      const newDisplay = screen.getByTestId("counter-display");
      expect(newDisplay).toHaveTextContent(/Counter: 1/);
    });
  });

  test("all buttons displayed correctly", async () => {
    //arrange
    const buttons = screen.getAllByRole("button");
    //assert
    expect(buttons).toHaveLength(2);
  });

  test("clicks the increase button by index of button array", async () => {
    //arrange
    const buttons = screen.getAllByRole("button");
    //act
    userEvent.click(buttons[1]);
    const newDisplay = await screen.findByTestId("counter-display");

    //assert
    expect(newDisplay).toHaveTextContent(/Counter: 1/); //tüm assertionların true olmasını bekler. yoksa test fail olur.
    expect(newDisplay).toHaveTextContent(/Counter: 1/);
    expect(newDisplay).toHaveTextContent(/Counter: 1/);
    expect(newDisplay).toHaveTextContent(/Counter: 1/);
    expect(newDisplay).toHaveTextContent(/Counter: 1/);
  });
});
