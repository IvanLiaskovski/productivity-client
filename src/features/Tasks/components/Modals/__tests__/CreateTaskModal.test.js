import { render, screen } from "../../../../../utils/tests/test-util";
import userEvent from "@testing-library/user-event";
import CreateTaskModal from "../CreateTaskModal";

describe("CreateTaskModal tests", () => {
  test("Upon double-clicking, it should display the child elements and open the 'Create Task' modal", async () => {
    render(
      <CreateTaskModal>
        <div className="h-96 w-96" data-testid="create-modal-child"></div>
      </CreateTaskModal>,
    );

    const child = screen.getByTestId("create-modal-child");
    expect(child).toBeInTheDocument();

    const textarea = screen.queryByRole("textbox", { name: "Name:" });
    expect(textarea).not.toBeInTheDocument();

    await userEvent.dblClick(child);
    const textarea2 = screen.getByRole("textbox", { name: "Name:" });

    expect(textarea2).toBeInTheDocument();
  });
});
