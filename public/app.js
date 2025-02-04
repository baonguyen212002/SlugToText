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

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
