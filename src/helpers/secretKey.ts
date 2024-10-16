export default function checkSecretKey(key: string): void {
    if (!key || key === "") {
        throw new Error("licence_secret_key is required.");
    }
}