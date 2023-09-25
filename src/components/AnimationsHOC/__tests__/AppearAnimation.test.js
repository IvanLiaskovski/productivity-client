import { render, screen, waitFor } from "@testing-library/react";
import AppearAnimation from "../AppearAnimation";

const animationAppearanceTest = async (
  animationType,
  initialStyle,
  finalStyle,
) => {
  render(
    <AppearAnimation animationType={animationType}>
      Test content appearance
    </AppearAnimation>,
  );

  const animatedElement = screen.getByText("Test content appearance");

  expect(animatedElement).toBeInTheDocument();
  expect(animatedElement).toHaveStyle(initialStyle);

  await waitFor(() => {
    expect(animatedElement).toHaveStyle(finalStyle);
  });
};

test("Animation fade appearance", async () =>
  await animationAppearanceTest("fade", "opacity: 0", "opacity: 1"));

test("Animation slideDown appearance", async () => {
  await animationAppearanceTest(
    "slideDown",
    "transform: translateY(-200%)",
    "transform: translateY(0)",
  );
});
