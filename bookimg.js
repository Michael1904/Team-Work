const roomPrices = {
    luxury: 300,
    deluxe: 200,
    premium: 150,
    standard: 100,
    economy: 80
};

const bookingForm = document.getElementById('bookingForm');
const roomSelect = document.getElementById('room');
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const totalPriceSpan = document.getElementById('totalPrice');

function calculatePrice() {
    const roomType = roomSelect.value;
    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);
    const nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);

    if (nights > 0 && roomPrices[roomType]) {
        const totalPrice = nights * roomPrices[roomType];
        totalPriceSpan.textContent = totalPrice.toFixed(2);
    } else {
        totalPriceSpan.textContent = '0';
    }
}

roomSelect.addEventListener('change', calculatePrice);
checkinInput.addEventListener('change', calculatePrice);
checkoutInput.addEventListener('change', calculatePrice);