const { render, screen, fireEvent } = require("@testing-library/react");
import App from "./App";

describe("Red-Blue Button", () => {
  test("Button change color when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });
    fireEvent.click(button);
    expect(button).toHaveStyle("background-color:blue");
  });

  test("Button change text when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent("changed to blue");
  });

  test("button has correct initial color", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });
    expect(button).toHaveStyle("background-color:red");
  });

  test("button has initial correct text", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });

    expect(button).toHaveTextContent("click me");
  });
});

describe("Blue-Red Button", () => {
  it("should change color when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });
    fireEvent.click(button);
    expect(button).toHaveStyle("background-color:blue");
  });

  it("should change text when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent("changed to blue");
  });

  it("should has correct initial color", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });
    expect(button).toHaveStyle("background-color:red");
  });

  it("should has initial correct text", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click/i });

    expect(button).toHaveTextContent("click me");
  });
});
