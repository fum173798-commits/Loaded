// Simple script to handle download buttons
document.addEventListener('DOMContentLoaded', function() {
  const downloadButtons = document.querySelectorAll('.download-btn');
  downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
      const songTitle = this.previousElementSibling.textContent.trim();
      // Create a filename from the song title
      const filename = songTitle.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '') + '.mp3';
      // Assume music files are in a 'music' folder
      const fileUrl = './music/' + filename;
      
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
});

// Optional: Toggle dropdown with JS instead of checkbox
const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', function() {
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});