import { render, screen } from "@testing-library/react";
import Clock from "./index";

describe("when clock is rendered", () => {
    test("when minutes and seconds spans is rendered", () => {
        render(<Clock time={0} />);

        const spanNumbers = screen.getAllByRole("clockNumber");
        spanNumbers.forEach(number => {
            expect(number.textContent).toEqual("0");
        });

        const spanSeparator = screen.getByRole("clockSeparator");
        expect(spanSeparator.textContent).toEqual(":");
    });


    test("when time is different of zero", () => {
        render(<Clock time={3600} />) // time in seconds
        const spanNumbers = screen.getAllByRole("clockNumber");
        expect(spanNumbers[0].textContent).toEqual("6");
    })
});