import { exercise08 } from "../../scripts/HumanResourceMachine/08";

test("Exercise08", () => {
  const inbox = [1, -2, 1, 0]
  const outbox = [3, -6, 3, 0]
  expect(outbox).toEqual(exercise08(inbox))
})
