export function addLoginApi(body) {
  return apiHelper(addCMSApiReducer, "POST", "/login/", body);
}
