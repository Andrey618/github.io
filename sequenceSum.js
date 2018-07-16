// BEGIN
  // Visualize Execution: https://goo.gl/UlTxCs
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
  // END
