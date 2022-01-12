function facterial(num) {
  console.trace();
  // let result =
  if (num <= 1) {
    return 1;
  }
  return num * facterial(num - 1);
}