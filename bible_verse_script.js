const verseElement = document.getElementById("verse-content");

// Get the Bible data from the loaded JSON file
const bibleData = document.getElementById("bible-data").textContent;
const parsedBibleData = JSON.parse(bibleData);

// Function to get a random Bible verse
function getRandomVerse() {
    // Choose a random book
    const randomBookIndex = Math.floor(Math.random() * parsedBibleData.books.length);
    const randomBook = parsedBibleData.books[randomBookIndex];

    // Choose a random chapter from the selected book
    const randomChapterIndex = Math.floor(Math.random() * randomBook.chapters);
    const chapterVerseCount = randomBook.verseCounts[randomChapterIndex];

    // Choose a random verse from the selected chapter
    const randomVerseIndex = Math.floor(Math.random() * chapterVerseCount) + 1;

    // Form the passage reference
    const passageReference = `${randomBook.name} ${randomChapterIndex + 1}:${randomVerseIndex}`;

    fetchBiblePassage(passageReference);
}

function fetchBiblePassage(passageReference) {
    const API_KEY = 'ed1888c4b947db2e13d6acab4841fbd06340115b';

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

// Call the function to get a random Bible verse when the page loads
getRandomVerse();