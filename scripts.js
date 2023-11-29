function generateShortcut() {
    const iphoneType = document.getElementById('iphoneType').value;
    const bibleTranslation = document.getElementById('bibleTranslation').value;
  
    let shortcutLink = '';
  
    // Replace this logic with your actual generation of the iOS shortcut link
    // For this example, assuming the link is the same for both iPhone 13 Pro and iPhone 13
    if (iphoneType === 'iPhone13Pro' || iphoneType === 'iPhone13') {
        shortcutLink = 'https://www.icloud.com/shortcuts/27d9402cffa54697a3befb362e2a65c8';
    } else {
        // Handle other iPhone models if needed
    }
  
    if (shortcutLink) {
        // Redirect to the generated iCloud link when the button is clicked
        window.open(shortcutLink, '_blank');
    } else {
        // If the link couldn't be generated, display an error message or handle it accordingly
        alert('Unable to generate the iOS shortcut link for the selected options.');
    }
}
