export const exercise07 = (inbox) => {
  const outbox = inbox.filter((number) => number !== 0);
  return outbox;
};
