import { fireEvent, render, screen } from "@testing-library/react";
import Item from ".";

describe("when item is rendered", () => {

    const mockOnClick = jest.fn();

    const task = {
        task: "teste 1",
        time: "01:00",
        selected: true,
        completed: false,
        id: "qqqqqq"
    };

    test("item has all properties", () => {

        render(<Item 
            choseTask={mockOnClick}
            {...task} 
            />);

        const item = screen.getByRole("listitem");
        const title = screen.getByText("teste 1");
        const time = screen.getByRole("time");
        expect(item).toBeTruthy();
        expect(title).toBeTruthy();
        expect(time).toBeTruthy();
    });

    test("when item is clicked", () => {
        render(<Item 
            choseTask={mockOnClick}
            {...task} 
            />);

        const item = screen.getByRole("listitem");
        fireEvent.click(item);

        expect(mockOnClick.mock.calls.length).toEqual(1);
    });
});