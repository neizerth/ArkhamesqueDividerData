import { IMAGES_ASSETS_PASSWORD, IMAGES_ASSETS_USER } from "@/config/app";

export const getCredentialsHeaders = (): HeadersInit | undefined => {
	if (!IMAGES_ASSETS_USER || !IMAGES_ASSETS_PASSWORD) {
		return;
	}
  const credentials = `${IMAGES_ASSETS_USER}:${IMAGES_ASSETS_PASSWORD}`
  const hash = btoa(credentials);
  return {
    Authorization: `Basic ${hash}`
  }
}
