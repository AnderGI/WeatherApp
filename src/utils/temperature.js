export const getTempInfo = (tempK) => {
  return {
    C: Math.round(tempToC(tempK)),
    F: Math.round(tempToF(tempK)),
  };
};

function tempToC(tempK) {
  return tempK - 273.15;
}

function tempToF(tempK) {
  return (tempToC(tempK) * 9) / 5 + 32;
}
