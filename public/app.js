function convertSlug() {
    const slug = document.getElementById('slugInput').value;
    const convertedText = slug
        .replace(/-/g, ' ')
        .replace(/^\w/, (char) => char.toUpperCase());

    document.getElementById('convertedText').innerText = convertedText;
}
