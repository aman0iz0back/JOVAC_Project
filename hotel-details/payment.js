// // window.onload = function() {
// //     const hotelName = localStorage.getItem('hotelName') || 'Not Selected';
// //     const hotelPrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
// //     const hotelDescription = localStorage.getItem('hotelDescription') || '';

// //     document.getElementById('hotel-name').textContent = `Hotel: ${hotelName}`;
// //     document.getElementById('hotel-price').textContent = `Price: ₹ ${hotelPrice}`;
// //     document.getElementById('hotel-description').textContent = hotelDescription;
// // }

// // function submitVisitDetails() {
// //     const visitorName = document.getElementById('visitorName').value;
// //     const visitorEmail = document.getElementById('visitorEmail').value;
// //     const noOfDays = parseInt(document.getElementById('noOfDays').value);
// //     const noOfAdults = parseInt(document.getElementById('noOfAdults').value);
// //     const noOfChildren = parseInt(document.getElementById('noOfChildren').value);
// //     const noOfRooms = parseInt(document.getElementById('noOfRooms').value);

// //     if (!visitorName || !visitorEmail || !noOfDays || !noOfAdults || !noOfRooms) {
// //         alert('Please fill in all fields');
// //         return;
// //     }

// //     localStorage.setItem('visitorName', visitorName);
// //     localStorage.setItem('visitorEmail', visitorEmail);
// //     localStorage.setItem('noOfDays', noOfDays);
// //     localStorage.setItem('noOfAdults', noOfAdults);
// //     localStorage.setItem('noOfChildren', noOfChildren);
// //     localStorage.setItem('noOfRooms', noOfRooms);

// //     const basePrice = parseInt(localStorage.getItem('hotelPrice'));
// //     const totalPrice = basePrice * noOfDays * noOfRooms;
// //     localStorage.setItem('totalPrice', totalPrice);

// //     document.getElementById('total-price').textContent = `Total Price: ₹ ${totalPrice}`;

// //     document.querySelector('.visit-details').classList.add('hidden');
// //     document.querySelector('.payment-options').classList.remove('hidden');
// // }

// // function selectPaymentMethod(method) {
// //     const paymentBox = document.getElementById('payment-box');
// //     paymentBox.innerHTML = '';

// //     let paymentForm = '';

// //     if (method === 'credit-card') {
// //         paymentForm = `
// //             <h4>Credit/Debit Card Payment</h4>
// //             <input type="text" id="cardNumber" placeholder="Card Number" required>
// //             <input type="text" id="holderName" placeholder="Card Holder Name" required>
// //             <input type="text" id="cvv" placeholder="CVV" required>
// //             <button onclick="confirmPayment('credit-card')">Pay Now</button>
// //             <p id="cardWarning" class="warning"></p>
// //         `;
// //     } else if (method === 'upi') {
// //         paymentForm = `
// //             <h4>UPI Payment</h4>
// //             <input type="text" id="upiInput" placeholder="UPI ID" required>
// //             <button onclick="confirmPayment('upi')">Pay Now</button>
// //             <p id="upiWarning" class="warning"></p>
// //         `;
// //     } else if (method === 'paypal') {
// //         paymentForm = `
// //             <h4>PayPal Payment</h4>
// //             <input type="email" id="paypalEmail" placeholder="PayPal Email" required>
// //             <button onclick="confirmPayment('paypal')">Pay Now</button>
// //             <p id="paypalWarning" class="warning"></p>
// //         `;
// //     }

// //     paymentBox.innerHTML = paymentForm;
// //     paymentBox.classList.remove('hidden');
// // }

// // function confirmPayment(method) {
// //     console.log(`Confirming payment method: ${method}`);
// //     const confirmMessage = "Are you sure you want to proceed with the payment?";
// //     if (confirm(confirmMessage)) {
// //         placeOrder(method);
// //     }
// // }

// // function placeOrder(method) {
// //     let warningMessage = '';
// //     let isValid = true;

// //     const orderData = {
// //         hotelName: localStorage.getItem('hotelName') || 'Not Selected',
// //         hotelPrice: parseInt(localStorage.getItem('hotelPrice')) || 0,
// //         visitorName: localStorage.getItem('visitorName'),
// //         visitorEmail: localStorage.getItem('visitorEmail'),
// //         noOfDays: parseInt(localStorage.getItem('noOfDays')),
// //         noOfAdults: parseInt(localStorage.getItem('noOfAdults')),
// //         noOfChildren: parseInt(localStorage.getItem('noOfChildren')),
// //         noOfRooms: parseInt(localStorage.getItem('noOfRooms')),
// //         totalPrice: parseInt(localStorage.getItem('totalPrice')),
// //         paymentMethod: method
// //     };

// //     if (method === 'credit-card') {
// //         const cardNumber = document.getElementById('cardNumber').value;
// //         const holderName = document.getElementById('holderName').value;
// //         const cvv = document.getElementById('cvv').value;

// //         if (cardNumber.length !== 16 || holderName === '' || cvv === '') {
// //             warningMessage = 'Enter valid card details.';
// //             isValid = false;
// //         }
// //     } else if (method === 'upi') {
// //         const upiInput = document.getElementById('upiInput').value;

// //         if (upiInput === '') {
// //             warningMessage = 'Enter your UPI ID.';
// //             isValid = false;
// //         }
// //     } else if (method === 'paypal') {
// //         const paypalEmail = document.getElementById('paypalEmail').value;

// //         if (paypalEmail === '') {
// //             warningMessage = 'Enter your PayPal Email.';
// //             isValid = false;
// //         }
// //     }

// //     if (!isValid) {
// //         document.getElementById(`${method === 'credit-card' ? 'card' : method}Warning`).innerText = warningMessage;
// //         return;
// //     }

// //     localStorage.setItem('orderData', JSON.stringify(orderData));
// //     window.location.href = 'bill.html';
// // }

// window.onload = function() {
//     const hotelName = localStorage.getItem('hotelName') || 'Not Selected';
//     const hotelPrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
//     const hotelDescription = localStorage.getItem('hotelDescription') || '';

//     document.getElementById('hotel-name').textContent = `Hotel: ${hotelName}`;
//     document.getElementById('hotel-price').textContent = `Price: ₹ ${hotelPrice}`;
//     document.getElementById('hotel-description').textContent = hotelDescription;
// }

// function submitVisitDetails() {
//     const visitorName = document.getElementById('visitorName').value;
//     const visitorEmail = document.getElementById('visitorEmail').value;
//     const noOfDays = parseInt(document.getElementById('noOfDays').value);
//     const fromDate = document.getElementById('fromDate').value;
//     const toDate = document.getElementById('toDate').value;
//     const noOfAdults = parseInt(document.getElementById('noOfAdults').value);
//     const noOfChildren = parseInt(document.getElementById('noOfChildren').value);
//     const noOfRooms = parseInt(document.getElementById('noOfRooms').value);

//     // Date validation: Ensure 'To Date' is after 'From Date'
//     if (new Date(toDate) < new Date(fromDate)) {
//         alert("The 'To Date' must be after the 'From Date'.");
//         return;
//     }

//     if (!visitorName || !visitorEmail || !noOfDays || !fromDate || !toDate || !noOfAdults || !noOfRooms) {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     // Store visit details in localStorage
//     localStorage.setItem('visitorName', visitorName);
//     localStorage.setItem('visitorEmail', visitorEmail);
//     localStorage.setItem('noOfDays', noOfDays);
//     localStorage.setItem('fromDate', fromDate);
//     localStorage.setItem('toDate', toDate);
//     localStorage.setItem('noOfAdults', noOfAdults);
//     localStorage.setItem('noOfChildren', noOfChildren);
//     localStorage.setItem('noOfRooms', noOfRooms);

//     const basePrice = parseInt(localStorage.getItem('hotelPrice'));
//     const totalPrice = basePrice * noOfDays * noOfRooms;
//     localStorage.setItem('totalPrice', totalPrice);

//     document.getElementById('total-price').textContent = `Total Price: ₹ ${totalPrice}`;

//     // Switch to payment options section
//     document.querySelector('.visit-details').classList.add('hidden');
//     document.querySelector('.payment-options').classList.remove('hidden');
// }

// function selectPaymentMethod(method) {
//     const paymentBox = document.getElementById('payment-box');
//     paymentBox.innerHTML = '';

//     let paymentForm = '';

//     if (method === 'credit-card') {
//         paymentForm = `
//             <h4>Credit/Debit Card Payment</h4>
//             <input type="text" id="cardNumber" placeholder="Card Number" required>
//             <input type="text" id="holderName" placeholder="Card Holder Name" required>
//             <input type="text" id="cvv" placeholder="CVV" required>
//             <button onclick="confirmPayment('credit-card')">Pay Now</button>
//             <p id="cardWarning" class="warning"></p>
//         `;
//     } else if (method === 'upi') {
//         paymentForm = `
//             <h4>UPI Payment</h4>
//             <input type="text" id="upiInput" placeholder="UPI ID" required>
//             <button onclick="confirmPayment('upi')">Pay Now</button>
//             <p id="upiWarning" class="warning"></p>
//         `;
//     } else if (method === 'paypal') {
//         paymentForm = `
//             <h4>PayPal Payment</h4>
//             <input type="email" id="paypalEmail" placeholder="PayPal Email" required>
//             <button onclick="confirmPayment('paypal')">Pay Now</button>
//             <p id="paypalWarning" class="warning"></p>
//         `;
//     }

//     paymentBox.innerHTML = paymentForm;
//     paymentBox.classList.remove('hidden');
// }

// function confirmPayment(method) {
//     console.log(`Confirming payment method: ${method}`);
//     const confirmMessage = "Are you sure you want to proceed with the payment?";
//     if (confirm(confirmMessage)) {
//         placeOrder(method);
//     }
// }

// function placeOrder(method) {
//     let warningMessage = '';
//     let isValid = true;

//     const orderData = {
//         hotelName: localStorage.getItem('hotelName') || 'Not Selected',
//         hotelPrice: parseInt(localStorage.getItem('hotelPrice')) || 0,
//         visitorName: localStorage.getItem('visitorName'),
//         visitorEmail: localStorage.getItem('visitorEmail'),
//         noOfDays: parseInt(localStorage.getItem('noOfDays')),
//         fromDate: localStorage.getItem('fromDate'),
//         toDate: localStorage.getItem('toDate'),
//         noOfAdults: parseInt(localStorage.getItem('noOfAdults')),
//         noOfChildren: parseInt(localStorage.getItem('noOfChildren')),
//         noOfRooms: parseInt(localStorage.getItem('noOfRooms')),
//         totalPrice: parseInt(localStorage.getItem('totalPrice')),
//         paymentMethod: method
//     };

//     // Payment method validation
//     if (method === 'credit-card') {
//         const cardNumber = document.getElementById('cardNumber').value;
//         const holderName = document.getElementById('holderName').value;
//         const cvv = document.getElementById('cvv').value;

//         if (cardNumber.length !== 16 || holderName === '' || cvv === '') {
//             warningMessage = 'Enter valid card details.';
//             isValid = false;
//         }
//     } else if (method === 'upi') {
//         const upiInput = document.getElementById('upiInput').value;

//         if (upiInput === '') {
//             warningMessage = 'Enter your UPI ID.';
//             isValid = false;
//         }
//     } else if (method === 'paypal') {
//         const paypalEmail = document.getElementById('paypalEmail').value;

//         if (paypalEmail === '') {
//             warningMessage = 'Enter your PayPal Email.';
//             isValid = false;
//         }
//     }

//     if (!isValid) {
//         document.getElementById(`${method === 'credit-card' ? 'card' : method}Warning`).innerText = warningMessage;
//         return;
//     }

//     // Store order data and redirect to bill page
//     localStorage.setItem('orderData', JSON.stringify(orderData));
//     window.location.href = 'bill.html';
// }

// window.onload = function() {
//     const hotelName = localStorage.getItem('hotelName') || 'Not Selected';
//     const hotelPrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
//     const hotelDescription = localStorage.getItem('hotelDescription') || '';

//     document.getElementById('hotel-name').textContent = `Hotel: ${hotelName}`;
//     document.getElementById('hotel-price').textContent = `Price: ₹ ${hotelPrice}`;
//     document.getElementById('hotel-description').textContent = hotelDescription;
// }

// function calculateDays() {
//     const fromDate = new Date(document.getElementById('fromDate').value);
//     const toDate = new Date(document.getElementById('toDate').value);

//     if (fromDate && toDate && toDate >= fromDate) {
//         const timeDiff = toDate - fromDate;
//         const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // Add 1 to include both days
//         return dayDiff;
//     }
//     return 0;
// }

// function submitVisitDetails() {
//     const visitorName = document.getElementById('visitorName').value;
//     const visitorEmail = document.getElementById('visitorEmail').value;
//     const fromDate = document.getElementById('fromDate').value;
//     const toDate = document.getElementById('toDate').value;
//     const noOfAdults = parseInt(document.getElementById('noOfAdults').value);
//     const noOfChildren = parseInt(document.getElementById('noOfChildren').value);
//     const noOfRooms = parseInt(document.getElementById('noOfRooms').value);

//     const noOfDays = calculateDays();

//     // Date validation: Ensure 'To Date' is after 'From Date'
//     if (new Date(toDate) < new Date(fromDate)) {
//         alert("The 'To Date' must be after the 'From Date'.");
//         return;
//     }

//     if (!visitorName || !visitorEmail || !fromDate || !toDate || !noOfAdults || !noOfRooms) {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     // Store visit details in localStorage
//     localStorage.setItem('visitorName', visitorName);
//     localStorage.setItem('visitorEmail', visitorEmail);
//     localStorage.setItem('fromDate', fromDate);
//     localStorage.setItem('toDate', toDate);
//     localStorage.setItem('noOfAdults', noOfAdults);
//     localStorage.setItem('noOfChildren', noOfChildren);
//     localStorage.setItem('noOfRooms', noOfRooms);
//     localStorage.setItem('noOfDays', noOfDays);

//     const basePrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
//     const totalPrice = basePrice * noOfDays * noOfRooms;
//     localStorage.setItem('totalPrice', totalPrice);

//     document.getElementById('total-price').textContent = `Total Price: ₹ ${totalPrice}`;

//     // Switch to payment options section
//     document.querySelector('.visit-details').classList.add('hidden');
//     document.querySelector('.payment-options').classList.remove('hidden');
// }

// function selectPaymentMethod(method) {
//     const paymentBox = document.getElementById('payment-box');
//     paymentBox.innerHTML = '';

//     let paymentForm = '';

//     if (method === 'credit-card') {
//         paymentForm = `
//             <h4>Credit/Debit Card Payment</h4>
//             <input type="text" id="cardNumber" placeholder="Card Number" required>
//             <input type="text" id="holderName" placeholder="Card Holder Name" required>
//             <input type="text" id="cvv" placeholder="CVV" required>
//             <button onclick="confirmPayment('credit-card')">Pay Now</button>
//             <p id="cardWarning" class="warning"></p>
//         `;
//     } else if (method === 'upi') {
//         paymentForm = `
//             <h4>UPI Payment</h4>
//             <input type="text" id="upiInput" placeholder="UPI ID" required>
//             <button onclick="confirmPayment('upi')">Pay Now</button>
//             <p id="upiWarning" class="warning"></p>
//         `;
//     } else if (method === 'paypal') {
//         paymentForm = `
//             <h4>PayPal Payment</h4>
//             <input type="email" id="paypalEmail" placeholder="PayPal Email" required>
//             <button onclick="confirmPayment('paypal')">Pay Now</button>
//             <p id="paypalWarning" class="warning"></p>
//         `;
//     }

//     paymentBox.innerHTML = paymentForm;
//     paymentBox.classList.remove('hidden');
// }

// function confirmPayment(method) {
//     console.log(`Confirming payment method: ${method}`);
//     const confirmMessage = "Are you sure you want to proceed with the payment?";
//     if (confirm(confirmMessage)) {
//         placeOrder(method);
//     }
// }

// function placeOrder(method) {
//     let warningMessage = '';
//     let isValid = true;

//     const orderData = {
//         hotelName: localStorage.getItem('hotelName') || 'Not Selected',
//         hotelPrice: parseInt(localStorage.getItem('hotelPrice')) || 0,
//         visitorName: localStorage.getItem('visitorName'),
//         visitorEmail: localStorage.getItem('visitorEmail'),
//         noOfDays: parseInt(localStorage.getItem('noOfDays')),
//         fromDate: localStorage.getItem('fromDate'),
//         toDate: localStorage.getItem('toDate'),
//         noOfAdults: parseInt(localStorage.getItem('noOfAdults')),
//         noOfChildren: parseInt(localStorage.getItem('noOfChildren')),
//         noOfRooms: parseInt(localStorage.getItem('noOfRooms')),
//         totalPrice: parseInt(localStorage.getItem('totalPrice')),
//         paymentMethod: method
//     };

//     // Payment method validation
//     if (method === 'credit-card') {
//         const cardNumber = document.getElementById('cardNumber').value;
//         const holderName = document.getElementById('holderName').value;
//         const cvv = document.getElementById('cvv').value;

//         if (cardNumber.length !== 16 || holderName === '' || cvv === '') {
//             warningMessage = 'Enter valid card details.';
//             isValid = false;
//         }
//     } else if (method === 'upi') {
//         const upiInput = document.getElementById('upiInput').value;

//         if (upiInput === '') {
//             warningMessage = 'Enter your UPI ID.';
//             isValid = false;
//         }
//     } else if (method === 'paypal') {
//         const paypalEmail = document.getElementById('paypalEmail').value;

//         if (paypalEmail === '') {
//             warningMessage = 'Enter your PayPal Email.';
//             isValid = false;
//         }
//     }

//     if (!isValid) {
//         document.getElementById(`${method === 'credit-card' ? 'card' : method}Warning`).innerText = warningMessage;
//         return;
//     }

//     // Store order data and redirect to bill page
//     localStorage.setItem('orderData', JSON.stringify(orderData));
//     window.location.href = 'bill.html';
// }


// window.onload = function() {
//     const hotelName = localStorage.getItem('hotelName') || 'Not Selected';
//     const hotelPrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
//     const hotelDescription = localStorage.getItem('hotelDescription') || '';

//     document.getElementById('hotel-name').textContent = `Hotel: ${hotelName}`;
//     document.getElementById('hotel-price').textContent = `Price: ₹ ${hotelPrice}`;
//     document.getElementById('hotel-description').textContent = hotelDescription;

//     // Disable past dates for "From Date"
//     const fromDateInput = document.getElementById('fromDate');
//     const today = new Date().toISOString().split('T')[0];
//     fromDateInput.setAttribute('min', today);
// }

// function calculateDays() {
//     const fromDate = new Date(document.getElementById('fromDate').value);
//     const toDate = new Date(document.getElementById('toDate').value);

//     if (fromDate && toDate && toDate >= fromDate) {
//         const timeDiff = toDate - fromDate;
//         const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // Add 1 to include both days
//         return dayDiff;
//     }
//     return 0;
// }

// function submitVisitDetails() {
//     const visitorName = document.getElementById('visitorName').value;
//     const visitorEmail = document.getElementById('visitorEmail').value;
//     const fromDate = document.getElementById('fromDate').value;
//     const toDate = document.getElementById('toDate').value;
//     const noOfAdults = parseInt(document.getElementById('noOfAdults').value);
//     const noOfChildren = parseInt(document.getElementById('noOfChildren').value);
//     const noOfRooms = parseInt(document.getElementById('noOfRooms').value);

//     // Date validation: Ensure 'To Date' is after 'From Date' and valid dates are selected
//     if (!fromDate || !toDate) {
//         alert("Please select both 'From Date' and 'To Date'.");
//         return;
//     }

//     if (new Date(toDate) < new Date(fromDate)) {
//         alert("The 'To Date' must be after or on the same day as the 'From Date'.");
//         return;
//     }

//     const noOfDays = calculateDays();

//     if (!visitorName || !visitorEmail || !fromDate || !toDate || !noOfAdults || !noOfRooms) {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     // Store visit details in localStorage
//     localStorage.setItem('visitorName', visitorName);
//     localStorage.setItem('visitorEmail', visitorEmail);
//     localStorage.setItem('fromDate', fromDate);
//     localStorage.setItem('toDate', toDate);
//     localStorage.setItem('noOfAdults', noOfAdults);
//     localStorage.setItem('noOfChildren', noOfChildren);
//     localStorage.setItem('noOfRooms', noOfRooms);
//     localStorage.setItem('noOfDays', noOfDays);

//     const basePrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
//     const totalPrice = basePrice * noOfDays-1 * noOfRooms;
//     localStorage.setItem('totalPrice', totalPrice);

//     document.getElementById('total-price').textContent = `Total Price: ₹ ${totalPrice}`;

//     // Switch to payment options section
//     document.querySelector('.visit-details').classList.add('hidden');
//     document.querySelector('.payment-options').classList.remove('hidden');
// }

// function selectPaymentMethod(method) {
//     const paymentBox = document.getElementById('payment-box');
//     paymentBox.innerHTML = '';

//     let paymentForm = '';

//     if (method === 'credit-card') {
//         paymentForm = `
//             <h4>Credit/Debit Card Payment</h4>
//             <input type="text" id="cardNumber" placeholder="Card Number" required>
//             <input type="text" id="holderName" placeholder="Card Holder Name" required>
//             <input type="text" id="cvv" placeholder="CVV" required>
//             <button onclick="confirmPayment('credit-card')">Pay Now</button>
//             <p id="cardWarning" class="warning"></p>
//         `;
//     } else if (method === 'upi') {
//         paymentForm = `
//             <h4>UPI Payment</h4>
//             <input type="text" id="upiInput" placeholder="UPI ID" required>
//             <button onclick="confirmPayment('upi')">Pay Now</button>
//             <p id="upiWarning" class="warning"></p>
//         `;
//     } else if (method === 'paypal') {
//         paymentForm = `
//             <h4>PayPal Payment</h4>
//             <input type="email" id="paypalEmail" placeholder="PayPal Email" required>
//             <button onclick="confirmPayment('paypal')">Pay Now</button>
//             <p id="paypalWarning" class="warning"></p>
//         `;
//     }

//     paymentBox.innerHTML = paymentForm;
//     paymentBox.classList.remove('hidden');
// }

// function confirmPayment(method) {
//     console.log(`Confirming payment method: ${method}`);
//     const confirmMessage = "Are you sure you want to proceed with the payment?";
//     if (confirm(confirmMessage)) {
//         placeOrder(method);
//     }
// }

// function placeOrder(method) {
//     let warningMessage = '';
//     let isValid = true;

//     const orderData = {
//         hotelName: localStorage.getItem('hotelName') || 'Not Selected',
//         hotelPrice: parseInt(localStorage.getItem('hotelPrice')) || 0,
//         visitorName: localStorage.getItem('visitorName'),
//         visitorEmail: localStorage.getItem('visitorEmail'),
//         noOfDays: parseInt(localStorage.getItem('noOfDays')),
//         fromDate: localStorage.getItem('fromDate'),
//         toDate: localStorage.getItem('toDate'),
//         noOfAdults: parseInt(localStorage.getItem('noOfAdults')),
//         noOfChildren: parseInt(localStorage.getItem('noOfChildren')),
//         noOfRooms: parseInt(localStorage.getItem('noOfRooms')),
//         totalPrice: parseInt(localStorage.getItem('totalPrice')),
//         paymentMethod: method
//     };

//     // Payment method validation
//     if (method === 'credit-card') {
//         const cardNumber = document.getElementById('cardNumber').value;
//         const holderName = document.getElementById('holderName').value;
//         const cvv = document.getElementById('cvv').value;

//         if (cardNumber.length !== 16 || holderName === '' || cvv === '') {
//             warningMessage = 'Enter valid card details.';
//             isValid = false;
//         }
//     } else if (method === 'upi') {
//         const upiInput = document.getElementById('upiInput').value;

//         if (upiInput === '') {
//             warningMessage = 'Enter your UPI ID.';
//             isValid = false;
//         }
//     } else if (method === 'paypal') {
//         const paypalEmail = document.getElementById('paypalEmail').value;

//         if (paypalEmail === '') {
//             warningMessage = 'Enter your PayPal Email.';
//             isValid = false;
//         }
//     }

//     if (!isValid) {
//         document.getElementById(`${method === 'credit-card' ? 'card' : method}Warning`).innerText = warningMessage;
//         return;
//     }

//     // Store order data and redirect to bill page
//     localStorage.setItem('orderData', JSON.stringify(orderData));
//     window.location.href = 'bill.html';
// }

window.onload = function() {
    const hotelName = localStorage.getItem('hotelName') || 'Not Selected';
    const hotelPrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
    const hotelDescription = localStorage.getItem('hotelDescription') || '';

    document.getElementById('hotel-name').textContent = `Hotel: ${hotelName}`;
    document.getElementById('hotel-price').textContent = `Price: ₹ ${hotelPrice}`;
    document.getElementById('hotel-description').textContent = hotelDescription;

    // Disable past dates for "From Date"
    const fromDateInput = document.getElementById('fromDate');
    const today = new Date().toISOString().split('T')[0];
    fromDateInput.setAttribute('min', today);

    // Set constraints on "To Date" when "From Date" changes
    fromDateInput.addEventListener('change', function() {
        const fromDateValue = this.value;
        const toDateInput = document.getElementById('toDate');

        // Set the minimum date for "To Date" based on "From Date"
        toDateInput.setAttribute('min', fromDateValue);

        // Clear "To Date" if it's earlier than the new "From Date"
        if (toDateInput.value && toDateInput.value < fromDateValue) {
            toDateInput.value = '';
        }
    });
};

function calculateDays() {
    const fromDate = new Date(document.getElementById('fromDate').value);
    const toDate = new Date(document.getElementById('toDate').value);

    if (fromDate && toDate && toDate >= fromDate) {
        const timeDiff = toDate - fromDate;
        const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // Add 1 to include both days
        return dayDiff;
    }
    return 0;
}

function submitVisitDetails() {
    const visitorName = document.getElementById('visitorName').value;
    const visitorEmail = document.getElementById('visitorEmail').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const noOfAdults = parseInt(document.getElementById('noOfAdults').value);
    const noOfChildren = parseInt(document.getElementById('noOfChildren').value);
    const noOfRooms = parseInt(document.getElementById('noOfRooms').value);

    // Date validation: Ensure 'To Date' is after 'From Date' and valid dates are selected
    if (!fromDate || !toDate) {
        alert("Please select both 'From Date' and 'To Date'.");
        return;
    }

    if (new Date(toDate) < new Date(fromDate)) {
        alert("The 'To Date' must be after or on the same day as the 'From Date'.");
        return;
    }

    const noOfDays = calculateDays();

    if (!visitorName || !visitorEmail || !fromDate || !toDate || !noOfAdults || !noOfRooms) {
        alert('Please fill in all required fields.');
        return;
    }

    // Store visit details in localStorage
    localStorage.setItem('visitorName', visitorName);
    localStorage.setItem('visitorEmail', visitorEmail);
    localStorage.setItem('fromDate', fromDate);
    localStorage.setItem('toDate', toDate);
    localStorage.setItem('noOfAdults', noOfAdults);
    localStorage.setItem('noOfChildren', noOfChildren);
    localStorage.setItem('noOfRooms', noOfRooms);
    localStorage.setItem('noOfDays', noOfDays);

    const basePrice = parseInt(localStorage.getItem('hotelPrice')) || 0;
    const totalPrice = basePrice * (noOfDays ) * noOfRooms;
    localStorage.setItem('totalPrice', totalPrice);

    document.getElementById('total-price').textContent = `Total Price: ₹ ${totalPrice}`;

    // Switch to payment options section
    document.querySelector('.visit-details').classList.add('hidden');
    document.querySelector('.payment-options').classList.remove('hidden');
}

function selectPaymentMethod(method) {
    const paymentBox = document.getElementById('payment-box');
    paymentBox.innerHTML = '';

    let paymentForm = '';

    if (method === 'credit-card') {
        paymentForm = `
            <h4>Credit/Debit Card Payment</h4>
            <input type="text" id="cardNumber" placeholder="Card Number" required>
            <input type="text" id="holderName" placeholder="Card Holder Name" required>
            <input type="text" id="cvv" placeholder="CVV" required>
            <button onclick="confirmPayment('credit-card')">Pay Now</button>
            <p id="cardWarning" class="warning"></p>
        `;
    } else if (method === 'upi') {
        paymentForm = `
            <h4>UPI Payment</h4>
            <input type="text" id="upiInput" placeholder="UPI ID" required>
            <button onclick="confirmPayment('upi')">Pay Now</button>
            <p id="upiWarning" class="warning"></p>
        `;
    } else if (method === 'paypal') {
        paymentForm = `
            <h4>PayPal Payment</h4>
            <input type="email" id="paypalEmail" placeholder="PayPal Email" required>
            <button onclick="confirmPayment('paypal')">Pay Now</button>
            <p id="paypalWarning" class="warning"></p>
        `;
    }

    paymentBox.innerHTML = paymentForm;
    paymentBox.classList.remove('hidden');
}

function confirmPayment(method) {
    console.log(`Confirming payment method: ${method}`);
    const confirmMessage = "Are you sure you want to proceed with the payment?";
    if (confirm(confirmMessage)) {
        placeOrder(method);
    }
}

function placeOrder(method) {
    let warningMessage = '';
    let isValid = true;

    const orderData = {
        hotelName: localStorage.getItem('hotelName') || 'Not Selected',
        hotelPrice: parseInt(localStorage.getItem('hotelPrice')) || 0,
        visitorName: localStorage.getItem('visitorName'),
        visitorEmail: localStorage.getItem('visitorEmail'),
        noOfDays: parseInt(localStorage.getItem('noOfDays')),
        fromDate: localStorage.getItem('fromDate'),
        toDate: localStorage.getItem('toDate'),
        noOfAdults: parseInt(localStorage.getItem('noOfAdults')),
        noOfChildren: parseInt(localStorage.getItem('noOfChildren')),
        noOfRooms: parseInt(localStorage.getItem('noOfRooms')),
        totalPrice: parseInt(localStorage.getItem('totalPrice')),
        paymentMethod: method
    };

    // Payment method validation
    if (method === 'credit-card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const holderName = document.getElementById('holderName').value;
        const cvv = document.getElementById('cvv').value;

        if (cardNumber.length !== 16 || holderName === '' || cvv === '') {
            warningMessage = 'Enter valid card details.';
            isValid = false;
        }
    } else if (method === 'upi') {
        const upiInput = document.getElementById('upiInput').value;

        if (upiInput === '') {
            warningMessage = 'Enter your UPI ID.';
            isValid = false;
        }
    } else if (method === 'paypal') {
        const paypalEmail = document.getElementById('paypalEmail').value;

        if (paypalEmail === '') {
            warningMessage = 'Enter your PayPal Email.';
            isValid = false;
        }
    }

    if (!isValid) {
        document.getElementById(`${method === 'credit-card' ? 'card' : method}Warning`).innerText = warningMessage;
        return;
    }

    // Store order data and redirect to bill page
    localStorage.setItem('orderData', JSON.stringify(orderData));
    window.location.href = 'bill.html';
}
