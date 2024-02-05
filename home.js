function getSecretCode (value) {
  let code = value * 42;
  return code;
}

let secretCode =getSecretCode(2)
showMessage( secretCode );