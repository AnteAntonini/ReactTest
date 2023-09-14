import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../LoginForm";
import { useLoginForm } from "../useLoginForm";

jest.mock("../useLoginForm");

describe("LoginForm Component", () => {
  it("renders login form with initial state", () => {
    // Mock the useLoginForm hook return values
    useLoginForm.mockReturnValue({
      handleLogin: jest.fn(),
      handleChange: jest.fn(),
      errorMessages: "",
    });

    const { getByText, getByPlaceholderText } = render(
      <LoginForm message="Test" />
    );

    // Check if the form elements are present
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your password")).toBeInTheDocument();
    expect(getByText("Log In")).toBeInTheDocument();
  });

  it("handles form submission", async () => {
    // Mock the useLoginForm hook return values
    const mockHandleLogin = jest.fn();
    useLoginForm.mockReturnValue({
      handleLogin: mockHandleLogin,
      handleChange: jest.fn(),
      errorMessages: "",
    });

    const { getByText, getByPlaceholderText } = render(
      <LoginForm message="Test" />
    );

    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const submitButton = getByText("Log In");

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    // Wait for the handleLogin function to be called
    await waitFor(() => {
      expect(mockHandleLogin).toHaveBeenCalled();
    });
  });

  it("displays error messages", () => {
    // Mock the useLoginForm hook return values to include an error message
    useLoginForm.mockReturnValue({
      handleLogin: jest.fn(),
      handleChange: jest.fn(),
      errorMessages: "Invalid credentials",
    });

    const { getByText } = render(<LoginForm message="Test" />);

    expect(getByText("Invalid credentials")).toBeInTheDocument();
  });
});

describe("Test snapshot", () => {
  it("Component should match snapshot", () => {
    useLoginForm.mockReturnValue({
      handleLogin: jest.fn(),
      handleChange: jest.fn(),
      errorMessages: "",
    });
    const { asFragment } = render(<LoginForm message="Test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
