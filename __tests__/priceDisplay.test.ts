import { expect, test } from "vitest";
import { priceDisplay } from "../app/utils/helper";

test("formats a monthly plan price without a leading plus", () => {
  expect(priceDisplay(9, "monthly", false)).toBe("$9/mo");
});
