export const add = (a, b) => {
  return (a + b)
};

export const subtract = (a, b) => {
  return (a - b)
};

export const multiply = (a, b) => {
  return (a * b)
};

export const divide = (a, b) => {
  return (a / b)
};

//not sure about if we need the brackets above this

export const power = (a, b) => {
  return Math.pow(a, b);
};

export const round = (a) => {
  return Math.round(a)
};

export const roundUp = (a) => {
  return Math.ceil(a)
};

export const roundDown = (a) => {
  return Math.floor(a)
};

export const absolute = (a) => {
  return Math.abs(a)
};

export const quotient = (a, b) => {
  return parseInt(a/b);
};

export const remainder = (a, b) => {
  return a % b;
};
