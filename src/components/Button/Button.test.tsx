import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

describe("button is rendered", () => {
    
    test("when button has a children attribute", () => {
        render(
            <Button>Test</Button>
        );
        const button = screen.getByRole("button");
        expect(button.textContent).not.toBeNull();
    });

    test("when button has a type", () => {
        render(<Button type="button" />);
        const button = screen.getByRole("button");
        expect(button).toHaveProperty("type");
    });

    test("when button has a onclick function", () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(mockOnClick.mock.calls.length).toEqual(1);
    });
});