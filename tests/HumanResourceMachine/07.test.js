import { exercise07 } from "../../scripts/HumanResourceMachine/07";

test("Exercise07", () => {
  const inbox = [4, 0, -4, "F", 0, 0, -3, 0];
  const outbox = [4, -4, "F", -3];

  expect(outbox).toEqual(exercise07(inbox));
});
