let popup = document.getElementById('popup');
let popupOpen = document.querySelector('.popupOpen');
let popupClose = document.querySelector('.popupClose');

popupOpen.onclick = () => {
    popup.style.display = 'block';
}
popupClose.onclick = () => {
    popup.style.display = 'none';
}

buttonHelpMain.onclick = () => {
    alert("Привет!");
}