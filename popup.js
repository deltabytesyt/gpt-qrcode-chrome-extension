document.addEventListener('DOMContentLoaded', function() {
  var qrContainer = document.getElementById('qr-container');
  var generateButton = document.getElementById('generate-button');

  generateButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      var url = tab.url;
      var qrCode = 'https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=' + encodeURIComponent(url);

      qrContainer.innerHTML = '<img src="' + qrCode + '">';

      setTimeout(function() {
        window.print();
      }, 1000);
    });
  });
});
