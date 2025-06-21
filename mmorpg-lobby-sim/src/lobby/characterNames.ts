export function generateAsciiName(name: string): string | null {
    const asciiRegex = /^[\x20-\x7E]+$/; // Allow only printable ASCII characters
    const minLength = 3;
    const maxLength = 15;

    if (name.length < minLength || name.length > maxLength) {
        console.error(`Name must be between ${minLength} and ${maxLength} characters.`);
        return null;
    }

    if (!asciiRegex.test(name)) {
        console.error("Name must only contain printable ASCII characters.");
        return null;
    }

    return name;
}