document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const card = document.getElementById('card').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!name || !email || !address || !card || !expiry || !cvv) {
        showPopup('Please fill all fields.');
    } else {
        showPopup('Order placed successfully!');
    }
});

function showPopup(message) {
    const popup = document.getElementById('orderPopup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.style.display = 'block';

    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function () {
        popup.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
}