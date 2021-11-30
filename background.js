chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
      id: 'mainWindow',
      innerBounds: {
        'width': 800,
        'height': 600
      }
    }
  );
});

var getActive = browser.tabs.query({active: true, currentWindow: true});
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favourite-colour",
    value: "red"
  });
}

