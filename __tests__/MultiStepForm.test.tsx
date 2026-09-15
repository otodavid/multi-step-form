import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MultiStepForm } from "../app/components/MultiStepForm";

test("stays on personal info and shows required errors when Next is clicked empty", async () => {
  render(<MultiStepForm />);

  screen.getByRole("button", { name: /next steps/i }).click();

  expect(await screen.findByText("Name is required")).toBeDefined();
  expect(screen.getByText("Email is required")).toBeDefined();
  expect(screen.getByText("Phone number is required")).toBeDefined();
  expect(
    screen.getByRole("heading", { name: "Personal Info" }),
  ).toBeDefined();
});
