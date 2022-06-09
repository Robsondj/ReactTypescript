import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

describe("when form is rendered", () => {

    const mockOnclick = jest.fn();
    
    test("it has inputs and button", () => {
        render(<Form setTasks={mockOnclick} />);

        expect(screen.getByLabelText("Adicione um novo estudo")).toBeTruthy();
        expect(screen.getByLabelText("Tempo")).toBeTruthy();
        expect(screen.getByRole("button")).toBeTruthy();
    });

    test("button is working properly", () => {
        render(<Form setTasks={mockOnclick} />);

        fireEvent.click(screen.getByRole("button"));
        expect(mockOnclick.mock.calls.length).toEqual(1);
    });
});