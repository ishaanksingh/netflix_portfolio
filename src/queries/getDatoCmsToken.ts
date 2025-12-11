// Temporary simple version just so the app does not crash without DatoCMS.
//
// In the original project this picked a token based on hostname
// and threw an error if none was configured. That breaks in Codespaces,
// so we just return a dummy token instead.

const getDatoCmsToken = () => {
  // If you ever add a real token, you can put it in an env variable and read it here.
  return '';
};

export default getDatoCmsToken;
export { getDatoCmsToken };
