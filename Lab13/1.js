let newWindow;

function openWindow() {
  newWindow = window.open("", "", "width=300,height=300");
}

function changeWindowSize() {
  newWindow.resizeTo(500, 500);
}

function moveWindow() {
  newWindow.moveTo(200, 200);
}

function closeWindow() {
  newWindow.close();
}

openWindow();
setTimeout(changeWindowSize, 2000);
setTimeout(moveWindow, 4000);
setTimeout(closeWindow, 6000);