export const prepareUserState = ({ companyName, firstName, lastName }) => {
  return { companyName: companyName.trim(), firstName: firstName.trim(), lastName: lastName.trim() };
};
