var picPaths = ['images/SacredFlameBanner.png', 'images/SanguineEmbraceBanner.png']; // Array of image paths
  var curPic = 0; // Counter for current image index

  function swapImage() {
    var img = document.getElementById('banner');
    img.style.opacity = 0;
    setTimeout(function() {
        curPic = (curPic + 1) % picPaths.length;
        img.src = picPaths[curPic];
        img.style.opacity = 1; // Fade in new image
      }, 500);
  }

  window.onload = function() {
    setInterval(swapImage, 7000); // Call swapImage() every 5 seconds
  }