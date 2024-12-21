export const formDataPayload = (values: any) => {
  const obj = { ...values };
  const stringifiedObj = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", stringifiedObj);
  return formData;
};
