function convertSlug() {
    const slug = document.getElementById('slugInput').value;
    const convertedText = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
    
    document.getElementById('convertedText').innerText = convertedText;
  }
  