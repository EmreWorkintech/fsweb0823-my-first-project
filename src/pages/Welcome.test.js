import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Welcome from "./Welcome";
import userEvent from "@testing-library/user-event";

/*
beforeAll
beforeEach
afterAll
afterEach
*/

beforeEach(() => {
  render(<Welcome />);
});

describe("Type name in a Input", () => {
  test("types and cliks correctly", async () => {
    userEvent.type(screen.getByPlaceholderText("Adınız"), "XYZ");
    userEvent.click(screen.getByRole("button"));

    const message = await screen.findByText(/Welcome XYZ/i);
    expect(message).toBeInTheDocument();
  });
});
