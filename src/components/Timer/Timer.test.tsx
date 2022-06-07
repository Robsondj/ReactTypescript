import { act, fireEvent, render, screen } from "@testing-library/react"
import Timer from ".";

describe("timer is rendered", () => {

    test("when timer is rendered", () => {
        jest.useFakeTimers();
        render(<Timer selected={{
            task: "teste",
            time: "00:10",
            selected: true,
            completed: false,
            id: "qqqqqq"
        }} finishTask={() => {}} />
        );
        const title = screen.getByText("Escolha um card e inicie o Cronômetro");
        expect(title).toBeTruthy();
        const button = screen.getByText("Começar");

        fireEvent.click(button);

        act(() => {
            jest.runAllTimers();
        });

        const spanNumbers = screen.getAllByRole("clockNumber");
        spanNumbers.forEach(number => {
            expect(number.textContent).toEqual("0");
        });
    });
});