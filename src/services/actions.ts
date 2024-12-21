"use server";

export async function formDataServerActions(
  endpoint: string,
  payload: FormData
) {
  const prodBaseUrl = "";
  const devBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const baseUrl =
    process.env.NODE_ENV === "development" ? devBaseUrl : prodBaseUrl;
  const url = `${baseUrl}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: payload,
      cache: "no-store",
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
  const prodBaseUrl = "";
  const devBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const baseUrl =
    process.env.NODE_ENV === "development" ? devBaseUrl : prodBaseUrl;
  const url = `${baseUrl}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong" };
  }
}
