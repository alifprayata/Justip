var zoomLevel = 100; // Level zoom awal

document.getElementById("zoom-in-btn").addEventListener("click", function() {
  zoomIn();
});

document.getElementById("zoom-out-btn").addEventListener("click", function() {
  zoomOut();
});

function zoomIn() {
  zoomLevel += 10; 
  updateZoom();
}

function zoomOut() {
  zoomLevel -= 10; 
  updateZoom();
}

function updateZoom() {
    var mapImage = document.getElementById("map-image");
    mapImage.style.width = zoomLevel + "%";
    mapImage.style.height = zoomLevel + "%";
    mapImage.style.transform = "translate(-50%, -50%)"; 
  }
  
