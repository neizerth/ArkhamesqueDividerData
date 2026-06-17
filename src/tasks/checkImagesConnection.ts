import { IMAGES_ASSETS_URL } from "@/config/app";
import { getCredentialsHeaders } from "@/util/common";

const CONNECTION_TIMEOUT_MS = 1000;

export const checkImagesConnection = async (): Promise<void> => {
	if (!IMAGES_ASSETS_URL) {
		throw new Error("IMAGES_ASSETS_URL is not set");
	}

	const response = await fetch(IMAGES_ASSETS_URL, {
		method: "HEAD",
		headers: getCredentialsHeaders(),
		signal: AbortSignal.timeout(CONNECTION_TIMEOUT_MS),
	});

	if (!response.ok) {
		throw new Error(
			`Images assets unavailable: ${response.status} ${response.statusText}`,
		);
	}
};
