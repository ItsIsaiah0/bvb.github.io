// Function to handle button click event
document.getElementById('download-btn').addEventListener('click', function () {
    const phoneType = document.getElementById('phone-type').value;
    const bibleVersion = document.getElementById('bible-type').value;

    // Logic to generate the download link based on user selection
    const downloadLink = generateDownloadLink(phoneType, bibleVersion);
    const instructionsSection = document.querySelector('.instructions');

    // Display instructions and the generated download link
    instructionsSection.style.display = 'block';
    instructionsSection.innerHTML = `
        <h2>Instructions:</h2>
        <p>Follow these steps to set up the shortcut on your ${phoneType} using ${bibleVersion} version.</p>
        <a href="${downloadLink}" download>Download the Shortcut</a>
        <!-- Include detailed instructions here -->
    `;
});

// Function to generate download link based on user selection
function generateDownloadLink(phoneType, bibleVersion) {
    if (phoneType === 'iPhone 13 Pro' && bibleVersion === 'ESV') {
        // For iPhone 13 Pro with ESV Bible version
        return 'https://www.icloud.com/shortcuts/27d9402cffa54697a3befb362e2a65c8';
    } else if (phoneType === 'iPhone 13' && bibleVersion === 'ESV') {
        // For iPhone 13 with ESV Bible version
        return 'https://www.icloud.com/shortcuts/27d9402cffa54697a3befb362e2a65c8';
        {
            // For future expansion or unsupported combinations
            return 'https://placeholder-link.com';
        }
    }
}
