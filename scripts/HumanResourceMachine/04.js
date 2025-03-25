export const scramblerHandler = (inbox) => {
  const outbox = [];
  let count = 0;

  while (count < inbox.length) {
    outbox.push(inbox[count + 1]);
    outbox.push(inbox[count]);
    count += 2;
  }

  return outbox;
};
