export function objectToFormData(
	object: Record<
	string,
	string | {filename: string; data: Blob} | Record<string, unknown>
	>,
): FormData {
	const formData = new FormData();

	for (const key of Object.keys(object)) {
		// eslint-disable-next-line security/detect-object-injection
		const value = object[key]!;

		if (typeof value === 'string') {
			formData.append(key, value);
			continue;
		}

		if (
			Object.prototype.hasOwnProperty.call(value, 'data')
            && Object.prototype.hasOwnProperty.call(value, 'filename')
		) {
			formData.append(key, value.data as Blob, value.filename as string);
			continue;
		}

		formData.append(key, JSON.stringify(value));
	}

	return formData;
}
