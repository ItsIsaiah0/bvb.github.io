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
  
    // Display the generated link in the shortcutInfo div
    const shortcutInfo = document.getElementById('shortcutInfo');
    if (shortcutLink) {
      shortcutInfo.innerHTML = `
        <h2>iOS Shortcut Information</h2>
        <p>Download your custom iOS shortcut for ${iphoneType} using ${bibleTranslation} translation:</p>
        <a href="${shortcutLink}" download>Download Shortcut</a>
      `;
    } else {
      shortcutInfo.innerHTML = `
        <p>Unable to generate the iOS shortcut link for the selected options.</p>
      `;
    }
  }