// popup.js

function home() {
    console.log("Page: home")
    document.getElementById('home').style.display = 'block';
    document.getElementById('connect').style.display = 'none';
    document.getElementById('info1').style.display = 'none';
    document.getElementById('info2').style.display = 'none';
    document.getElementById('troubleshooting-page').style.display = 'none';
}

function connect() {
    console.log("Page: connect")
    document.getElementById('home').style.display = 'none';
    document.getElementById('connect').style.display = 'block';
     document.getElementById('info1').style.display = 'none';
     document.getElementById('info2').style.display = 'none';
     document.getElementById('troubleshooting-page').style.display = 'none';
}

function info1() {
    console.log("Page: info1")
    document.getElementById('home').style.display = 'none';
    document.getElementById('connect').style.display = 'none';
     document.getElementById('info1').style.display = 'block';
     document.getElementById('info2').style.display = 'none';
      document.getElementById('troubleshooting-page').style.display = 'none';
}

function info2() {
    console.log("Page: info1")
    document.getElementById('home').style.display = 'none';
    document.getElementById('connect').style.display = 'none';
     document.getElementById('info1').style.display = 'none';
     document.getElementById('info2').style.display = 'block';
      document.getElementById('troubleshooting-page').style.display = 'none';
}

function troubleshooting() {
  console.log("Page: troubleshooting")
    document.getElementById('home').style.display = 'none';
    document.getElementById('connect').style.display = 'none';
     document.getElementById('info1').style.display = 'none';
     document.getElementById('info2').style.display = 'none';
     document.getElementById('troubleshooting-page').style.display = 'block';
}

async function triggerCasting() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab?.id) return;

    if (tab.url?.startsWith("chrome://")) {
      console.error("Cannot cast from internal Chrome pages.");
      return;
    }

    await chrome.tabs.sendMessage(tab.id, { action: "START_CASTING" });
  } catch (error) {
    console.error("Failed to communicate with content script. Is it injected?", error);
  }
}

document.getElementById('cast-button').addEventListener('click', () => {
  console.log("Starting guided connection...")
  info1();
});

document.getElementById('next1').addEventListener('click', () => {
 
    console.log("Prompting connection...")

    info2();

});

document.getElementById('troubleshooting').addEventListener('click', () => {
 
     console.log('Troubleshooting connection...')

    troubleshooting();

});

document.getElementById('done').addEventListener('click', () => {
 
     console.log('Closing window...')

    window.close();

});

home();