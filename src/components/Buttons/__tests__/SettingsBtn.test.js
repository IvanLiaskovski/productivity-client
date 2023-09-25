import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SettingsBtn from "../SettingsBtn";

const clickEventMock = jest.mock();

test("SettingBtn render", () => {
  const user = userEvent.setup();
  render(<SettingsBtn className="mt-2" onClick={() => clickEventMock()} />);

  const settingsBtnElement = screen.getByRole("button");

  expect(settingsBtnElement).toBeInTheDocument();
  expect(settingsBtnElement).toHaveClass("mt-2");

  user.click(settingsBtnElement);
  expect(clickEventMock.mock.call).toHaveLength(1);
});
