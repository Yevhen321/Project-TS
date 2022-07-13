export const validEmail = (text: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
  if (text.match(pattern)) {
    return true;
  }
  return false;
};
