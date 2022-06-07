import { fireEvent, render, screen } from "@testing-library/react";
import List from ".";

describe("when list is rendered", () => {
    const tasks = [
        {
          task: "teste 1",
          time: "01:00",
          selected: true,
          completed: false,
          id: "qqqqqq"
      },
      {
        task: "teste 2",
        time: "01:00",
        selected: true,
        completed: false,
        id: "wwwww"
      },
      {
        task: "teste 3",
        time: "01:00",
        selected: true,
        completed: false,
        id: "rrrrr"
      }
    
    ];

    const mockOnclick = jest.fn();

    test("list has several items", () => {
        render(<List tasks={tasks} choseTask={mockOnclick} />);

        const items = screen.getAllByRole("listitem");
        items.forEach(item => expect(item).toBeTruthy());

        fireEvent.click(items[0]);
        expect(mockOnclick.mock.calls.length).toEqual(1);
    });
});