export const prodBaseUrl = "";
export const devBaseUrl = process.env.NEXT_PUBLIC_API_URL;
const baseUrl =
  process.env.NODE_ENV === "development" ? devBaseUrl : prodBaseUrl;

export async function serverSideDataFetch(endpoint: string) {
  const url = `${baseUrl}/${endpoint}`;
  console.log("🚀 ~ serverSideDataFetch ~ url:", url);
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 30,
      },
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
