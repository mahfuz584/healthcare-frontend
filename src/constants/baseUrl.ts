const prodUrl = "";
const devUrl = process.env.NEXT_PUBLIC_API_URL as string;
export const baseUrl = process.env.NODE_ENV === "production" ? prodUrl : devUrl;
