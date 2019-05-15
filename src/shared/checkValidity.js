export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = rules.required && value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLenght) {
    isValid = value.length <= rules.maxLenght && isValid;
  }

  return isValid;
};
