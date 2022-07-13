export const validPassword = (text: string) => {
  const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])[A-Za-z0-9]{6,}$/g;
  if (text.match(pattern)) {
    return true;
  }
  return false;
};
