"use server";

export async function serverActions(endpoint: string, payload: FormData) {
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
    if (!response.ok) {
      throw new Error("An error occurred while fetching the data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
