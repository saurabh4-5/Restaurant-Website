// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Menu data
const menuData = {
    starters: [
        { name: "Truffle Samosa", price: "₹450", desc: "Crispy pastry, truffle potato filling, mint chutney." },
        { name: "Tandoori Broccoli", price: "₹520", desc: "Charred broccoli, hung curd marinade, toasted almonds." }
    ],
    main: [
        { name: "Lamb Rogan Josh", price: "₹1200", desc: "Slow-cooked Kashmiri lamb, aromatic spices, saffron rice." },
        { name: "Paneer Lababdar", price: "₹950", desc: "Cottage cheese, creamy tomato gravy, fenugreek, butter naan." }
    ],
    desserts: [
        { name: "Gulab Jamun Brûlée", price: "₹400", desc: "Classic gulab jamun, caramelized sugar crust, rose essence." },
        { name: "Pista Kulfi", price: "₹350", desc: "Pistachio ice cream, falooda, saffron syrup." }
    ],
    drinks: [
        { name: "Saffron Martini", price: "₹700", desc: "Vodka, saffron, cardamom, lemon twist." },
        { name: "Masala Chai Fizz", price: "₹350", desc: "Spiced tea, soda, citrus, fresh mint." }
    ]
};

// Render menu items
function renderMenu(category) {
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';
    menuData[category].forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <div class="price">${item.price}</div>
            <p>${item.desc}</p>
        `;
        menuItems.appendChild(card);
    });
}

// Menu tab switching
const menuTabs = document.querySelectorAll('.menu-tab');
menuTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        menuTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        renderMenu(this.dataset.category);
    });
});
// Initial menu load
renderMenu('starters');

// Reservation form (basic validation)
const reservationForm = document.querySelector('.reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your reservation! We look forward to welcoming you.');
        reservationForm.reset();
    });
}
