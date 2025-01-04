import { baseUrl } from "constants/baseUrl";

export async function formDataServerActions(
  endpoint: string,
  payload: FormData
) {
  const url = `${baseUrl}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: payload,
    });

    const data = await response.json();
    return data;
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong" };
  }
}
export async function rawDataServerActions(
  endpoint: string,
  payload: FormData
) {
  const url = `${baseUrl}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong" };
  }
}
