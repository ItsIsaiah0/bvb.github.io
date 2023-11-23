const API_KEY = 'ed1888c4b947db2e13d6acab4841fbd06340115b';
const passageReference = 'John+11:35'; // Change this to the desired passage reference

function fetchBiblePassage() {
    const verseElement = document.getElementById("verse-content");

    fetch(`https://api.esv.org/v3/passage/text/?q=${passageReference}&include-passage-references=false&include-short-copyright=false&include-verse-numbers=false&include-headings=false`, {
        headers: {
            'Authorization': `Token ${API_KEY}`
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data && data.passages && data.passages.length > 0) {
                const verseContent = data.passages[0].trim(); // Extract the verse content
                const verseReference = data.canonical;

                const formattedText = `"${verseContent}" - ${verseReference}`;
                verseElement.textContent = formattedText;
            } else {
                verseElement.textContent = "No passage found.";
            }
        })
        .catch(error => {
            console.error('Error fetching ESV passage:', error);
            verseElement.textContent = "An error occurred while fetching the passage.";
        });
}

// Call the function to fetch the Bible passage when the page loads
fetchBiblePassage();