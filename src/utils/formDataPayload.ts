export const formDataPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const stringifiedObj = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", stringifiedObj);
  formData.append("file", file as Blob);
  console.log(
    "🚀 ~ formDataPayload ~ formData",
    Object.fromEntries(formData.entries())
  );
  return formData;
};
