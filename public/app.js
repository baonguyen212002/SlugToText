function convertSlug() {
    const slug = document.getElementById('slugInput').value;
    const convertedText = slug
        .replace(/-/g, ' ')
        .replace(/^\w/, (char) => char.toUpperCase());

    document.getElementById('convertedText').innerText = convertedText;
}
function copyToClipboard() {
    const textToCopy = document.getElementById('convertedText').innerText;
    if (textToCopy) { 
        navigator.clipboard.writeText(textToCopy);
    }
}