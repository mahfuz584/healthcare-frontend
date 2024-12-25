export const formDataPayload = (values: any) => {
  const obj = { ...values };
  const stringifiedObj = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", stringifiedObj);
  // console.log(
  //   "🚀 ~ formDataPayload ~ formData",
  //   Object.fromEntries(formData.entries())
  // );
  return formData;
};
