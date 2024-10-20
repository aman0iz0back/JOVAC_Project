// function loadLocation(locationKey) {
//     const content = document.getElementById('content');

//     const locations = {
//         kashmir: {
//             title: "Kashmir",
//             stars: "★★★★★",
//             description: "Heaven on Earth, Kashmir is one of the most beautiful travel destinations to visit in North India...",
//             image: "./files/t1.jpg"
//         },
//         istanbul: {
//             title: "Istanbul",
//             stars: "★★★★½",
//             description: "Istanbul offers unique historical and cultural riches and has hosted many different civilizations...",
//             image: "./files/t2.jpg"
//         },
//         paris: {
//             title: "Paris",
//             stars: "★★★★½",
//             description: "Paris is a diverse and sophisticated city with countless landmarks and world-famous French cuisine...",
//             image: "./files/t3.jpg"
//         },
//         bali: {
//             title: "Bali",
//             stars: "★★★★½",
//             description: "Bali's beauty goes way deeper than its appearances, with a range of accommodations available...",
//             image: "./files/t4.jpg"
//         },
//         dubai: {
//             title: "Dubai",
//             stars: "★★★★★",
//             description: "Dubai is an ideal holiday destination for families, with theme parks, beaches, and the famous Burj Khalifa...",
//             image: "./files/t5.jpg"
//         },
//         geneva: {
//             title: "Geneva",
//             stars: "★★★★½",
//             description: "Geneva is a charming city with a plethora of attractions and tremendous natural beauty...",
//             image: "./files/t6.jpg"
//         },
//         "port-blair": {
//             title: "Port Blair",
//             stars: "★★★★½",
//             description: "Port Blair includes a host of attractive locales, clean beaches, and many must-see attractions...",
//             image: "./files/t7.jpg"
//         },
//         rome: {
//             title: "Rome",
//             stars: "★★★★",
//             description: "Rome is a fascinating place with incredible works of art and world-renowned cuisine...",
//             image: "./files/t8.jpg"
//         }
//     };

//     const location = locations[locationKey];

//     if (location) {
//         // 1. Location Details
//         content.innerHTML = ` 
//             <div class="location-detail">
//                 <h1>${location.title}</h1>
//                 <div class="stars">${location.stars}</div>
//                 <p>${location.description}</p>
//                 <div class="location-img">
//                     <img src="${location.image}" alt="${location.title}">
//                 </div>
//             </div>
//         `;

//         // 2. Add Package Section (All packages included)
//         const packageSection = `
//             <section class="package">
//                 <div class="package-title">
//                     <h2>Packages</h2>
//                 </div>
//                 <div class="package-content">
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p1.jpg" alt="">
//                             <h3>Rs.9,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location"> 
//                                 <h4>Bronze</h4>
//                                 <ul class="pac-details">
//                                     <li>2 Star Hotel</li>
//                                     <li>5 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/bronze.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p2.jpg" alt="">
//                             <h3>Rs.19,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Silver</h4>
//                                 <ul class="pac-details">
//                                     <li>3 Star Hotel</li>
//                                     <li>7 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/silver.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p3.jpg" alt="">
//                             <h3>Rs.29,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Gold</h4>
//                                 <ul class="pac-details">
//                                     <li>4 Star Hotel</li>
//                                     <li>10 Nights Stay</li>
//                                     <li>Breakfast and Dinner</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/gold.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p4.jpg" alt="">
//                             <h3>Rs.39,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Platinum</h4>
//                                 <ul class="pac-details">
//                                     <li>5 Star Hotel</li>
//                                     <li>14 Nights Stay</li>
//                                     <li>Breakfast, Lunch and Dinner</li>
//                                     <li>Bonfire</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/platinum.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div> 
//             </section>
//         `;
//         content.innerHTML += packageSection; 
//     } else {
//         content.innerHTML = "<p>Location not found.</p>"; 
//     }
// }


// window.addEventListener('hashchange', () => { 
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// });

// window.onload = () => {
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// };

// function loadLocation(locationKey) {
//     const content = document.getElementById('content');

//     const locations = {
//         kashmir: {
//             title: "Kashmir",
//             stars: "★★★★★",
//             description: "Heaven on Earth, Kashmir is one of the most beautiful travel destinations to visit in North India...",
//             extendedDescription: "Known for its breathtaking landscapes, Kashmir offers a perfect blend of natural beauty and cultural richness. From the serene Dal Lake to the majestic Himalayan peaks, visitors can enjoy scenic boat rides, trekking, and skiing. The region is also famous for its exquisite handicrafts, particularly Pashmina shawls and intricate woodwork.",
//             image: "./files/t1.jpg",
//             video: "https://www.youtube.com/embed/placeholder-kashmir"
//         },
//         istanbul: {
//             title: "Istanbul",
//             stars: "★★★★½",
//             description: "Istanbul offers unique historical and cultural riches and has hosted many different civilizations...",
//             extendedDescription: "Straddling two continents, Istanbul is a melting pot of cultures. The city boasts iconic landmarks like the Hagia Sophia and Blue Mosque, showcasing its rich Byzantine and Ottoman heritage. Visitors can explore bustling bazaars, enjoy Turkish cuisine, and take a scenic cruise along the Bosphorus strait.",
//             image: "./files/t2.jpg",
//             video: "https://www.youtube.com/embed/placeholder-istanbul"
//         },
//         paris: {
//             title: "Paris",
//             stars: "★★★★½",
//             description: "Paris is a diverse and sophisticated city with countless landmarks and world-famous French cuisine...",
//             extendedDescription: "The City of Light captivates with its iconic Eiffel Tower, world-class museums like the Louvre, and charming neighborhoods such as Montmartre. Art lovers can explore impressionist masterpieces, while food enthusiasts can indulge in exquisite French pastries and gourmet dining. Don't miss a romantic Seine river cruise or a stroll along the Champs-Élysées.",
//             image: "./files/t3.jpg",
//             video: "https://www.youtube.com/embed/placeholder-paris"
//         },
//         bali: {
//             title: "Bali",
//             stars: "★★★★½",
//             description: "Bali's beauty goes way deeper than its appearances, with a range of accommodations available...",
//             extendedDescription: "Known as the Island of the Gods, Bali offers a perfect mix of pristine beaches, lush rice terraces, and spiritual retreats. Visitors can explore ancient temples, participate in traditional ceremonies, or unwind in luxurious spa resorts. The island is also a haven for surfers and yoga enthusiasts, with numerous world-class spots and retreats.",
//             image: "./files/t4.jpg",
//             video: "https://www.youtube.com/embed/placeholder-bali"
//         },
//         dubai: {
//             title: "Dubai",
//             stars: "★★★★★",
//             description: "Dubai is an ideal holiday destination for families, with theme parks, beaches, and the famous Burj Khalifa...",
//             extendedDescription: "A city of superlatives, Dubai boasts the world's tallest building, the Burj Khalifa, and artificial islands shaped like palm trees. Visitors can experience luxury shopping in enormous malls, desert safaris in the nearby dunes, and a blend of traditional Arab culture and futuristic architecture. Don't miss the spectacular fountain shows and the opportunity to ski indoors at Ski Dubai.",
//             image: "./files/t5.jpg",
//             video: "https://www.youtube.com/embed/placeholder-dubai"
//         },
//         geneva: {
//             title: "Geneva",
//             stars: "★★★★½",
//             description: "Geneva is a charming city with a plethora of attractions and tremendous natural beauty...",
//             extendedDescription: "Nestled between the Alps and Jura mountains, Geneva offers stunning views of Lake Geneva and Mont Blanc. The city is home to numerous international organizations, giving it a cosmopolitan flair. Visitors can explore the Old Town, visit the UN headquarters, and enjoy Swiss chocolate and watch-making traditions. The nearby Alps provide excellent opportunities for skiing and hiking.",
//             image: "./files/t6.jpg",
//             video: "https://www.youtube.com/embed/placeholder-geneva"
//         },
//         "port-blair": {
//             title: "Port Blair",
//             stars: "★★★★½",
//             description: "Port Blair includes a host of attractive locales, clean beaches, and many must-see attractions...",
//             extendedDescription: "The capital of the Andaman and Nicobar Islands, Port Blair serves as a gateway to pristine beaches and lush forests. History buffs can explore the Cellular Jail, a former British prison, while nature lovers can enjoy snorkeling and scuba diving in crystal-clear waters. The city also offers insights into the indigenous tribes of the islands and their unique cultures.",
//             image: "./files/t7.jpg",
//             video: "https://www.youtube.com/embed/placeholder-port-blair"
//         },
//         rome: {
//             title: "Rome",
//             stars: "★★★★",
//             description: "Rome is a fascinating place with incredible works of art and world-renowned cuisine...",
//             extendedDescription: "The Eternal City is a living museum of ancient history and Renaissance art. Visitors can explore iconic landmarks like the Colosseum, Roman Forum, and Vatican City. Art enthusiasts will be captivated by Michelangelo's Sistine Chapel and countless masterpieces in museums and churches. Don't forget to indulge in authentic Italian cuisine, toss a coin in the Trevi Fountain, and people-watch in charming piazzas.",
//             image: "./files/t8.jpg",
//             video: "https://www.youtube.com/embed/placeholder-rome"
//         }
//     };

//     const location = locations[locationKey];

//     if (location) {
//         // 1. Location Details
//         content.innerHTML = ` 
//             <div class="location-detail">
//                 <h1>${location.title}</h1>
//                 <div class="stars">${location.stars}</div>
//                 <p>${location.description}</p>
//                 <div class="location-img">
//                     <img src="${location.image}" alt="${location.title}">
//                 </div>
//                 <h2>About ${location.title}</h2>
//                 <p>${location.extendedDescription}</p>
//                 <div class="location-video">
//                     <iframe width="560" height="315" src="${location.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 </div>
//             </div>
//         `;

//         // 2. Add Package Section (All packages included)
//         const packageSection = `
//             <section class="package">
//                 <div class="package-title">
//                     <h2>Packages</h2>
//                 </div>
//                 <div class="package-content">
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p1.jpg" alt="">
//                             <h3>Rs.9,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location"> 
//                                 <h4>Bronze</h4>
//                                 <ul class="pac-details">
//                                     <li>2 Star Hotel</li>
//                                     <li>5 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/bronze.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p2.jpg" alt="">
//                             <h3>Rs.19,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Silver</h4>
//                                 <ul class="pac-details">
//                                     <li>3 Star Hotel</li>
//                                     <li>7 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/silver.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p3.jpg" alt="">
//                             <h3>Rs.29,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Gold</h4>
//                                 <ul class="pac-details">
//                                     <li>4 Star Hotel</li>
//                                     <li>10 Nights Stay</li>
//                                     <li>Breakfast and Dinner</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/gold.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p4.jpg" alt="">
//                             <h3>Rs.39,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Platinum</h4>
//                                 <ul class="pac-details">
//                                     <li>5 Star Hotel</li>
//                                     <li>14 Nights Stay</li>
//                                     <li>Breakfast, Lunch and Dinner</li>
//                                     <li>Bonfire</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/platinum.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div> 
//             </section>
//         `;
//         content.innerHTML += packageSection; 
//     } else {
//         content.innerHTML = "<p>Location not found.</p>"; 
//     }
// }

// window.addEventListener('hashchange', () => { 
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// });

// window.onload = () => {
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// };


// function loadLocation(locationKey) {
//     const content = document.getElementById('content');

//     const locations = {
//         kashmir: {
//             title: "Kashmir",
//             stars: "★★★★★",
//             description: "Heaven on Earth, Kashmir is one of the most beautiful travel destinations to visit in North India...",
//             extendedDescription: "Known for its breathtaking landscapes, Kashmir offers a perfect blend of natural beauty and cultural richness. From the serene Dal Lake to the majestic Himalayan peaks, visitors can enjoy scenic boat rides, trekking, and skiing. The region is also famous for its exquisite handicrafts, particularly Pashmina shawls and intricate woodwork.",
//             images: [
//                 "./files/t1.jpg",
//                 "./files/kashmir21.jpg",
//                 "./files/kashmir3.jpg",
//                 "./files/kashmir4.jpg",
//                 "./files/kashmir5.jpg",
//                 "./files/kashmir6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-kashmir"
//         },
//         istanbul: {
//             title: "Istanbul",
//             stars: "★★★★½",
//             description: "Istanbul offers unique historical and cultural riches and has hosted many different civilizations...",
//             extendedDescription: "Straddling two continents, Istanbul is a melting pot of cultures. The city boasts iconic landmarks like the Hagia Sophia and Blue Mosque, showcasing its rich Byzantine and Ottoman heritage. Visitors can explore bustling bazaars, enjoy Turkish cuisine, and take a scenic cruise along the Bosphorus strait.",
//             images: [
//                 "./files/t2.jpg",
//                 "./files/istanbul2.jpg",
//                 "./files/istanbul3.jpg",
//                 "./files/istanbul4.jpg",
//                 "./files/istanbul5.jpg",
//                 "./files/istanbul6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-istanbul"
//         },
//         paris: {
//             title: "Paris",
//             stars: "★★★★½",
//             description: "Paris is a diverse and sophisticated city with countless landmarks and world-famous French cuisine...",
//             extendedDescription: "The City of Light captivates with its iconic Eiffel Tower, world-class museums like the Louvre, and charming neighborhoods such as Montmartre. Art lovers can explore impressionist masterpieces, while food enthusiasts can indulge in exquisite French pastries and gourmet dining. Don't miss a romantic Seine river cruise or a stroll along the Champs-Élysées.",
//             images: [
//                 "./files/t3.jpg",
//                 "./files/paris2.jpg",
//                 "./files/paris3.jpg",
//                 "./files/paris4.jpg",
//                 "./files/paris5.jpg",
//                 "./files/paris6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-paris"
//         },
//         bali: {
//             title: "Bali",
//             stars: "★★★★½",
//             description: "Bali's beauty goes way deeper than its appearances, with a range of accommodations available...",
//             extendedDescription: "Known as the Island of the Gods, Bali offers a perfect mix of pristine beaches, lush rice terraces, and spiritual retreats. Visitors can explore ancient temples, participate in traditional ceremonies, or unwind in luxurious spa resorts. The island is also a haven for surfers and yoga enthusiasts, with numerous world-class spots and retreats.",
//             images: [
//                 "./files/t4.jpg",
//                 "./files/bali2.jpg",
//                 "./files/bali3.jpg",
//                 "./files/bali4.jpg",
//                 "./files/bali5.jpg",
//                 "./files/bali6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-bali"
//         },
//         dubai: {
//             title: "Dubai",
//             stars: "★★★★★",
//             description: "Dubai is an ideal holiday destination for families, with theme parks, beaches, and the famous Burj Khalifa...",
//             extendedDescription: "A city of superlatives, Dubai boasts the world's tallest building, the Burj Khalifa, and artificial islands shaped like palm trees. Visitors can experience luxury shopping in enormous malls, desert safaris in the nearby dunes, and a blend of traditional Arab culture and futuristic architecture. Don't miss the spectacular fountain shows and the opportunity to ski indoors at Ski Dubai.",
//             images: [
//                 "./files/t5.jpg",
//                 "./files/dubai2.jpg",
//                 "./files/dubai3.jpg",
//                 "./files/dubai4.jpg",
//                 "./files/dubai5.jpg",
//                 "./files/dubai6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-dubai"
//         },
//         geneva: {
//             title: "Geneva",
//             stars: "★★★★½",
//             description: "Geneva is a charming city with a plethora of attractions and tremendous natural beauty...",
//             extendedDescription: "Nestled between the Alps and Jura mountains, Geneva offers stunning views of Lake Geneva and Mont Blanc. The city is home to numerous international organizations, giving it a cosmopolitan flair. Visitors can explore the Old Town, visit the UN headquarters, and enjoy Swiss chocolate and watch-making traditions. The nearby Alps provide excellent opportunities for skiing and hiking.",
//             images: [
//                 "./files/t6.jpg",
//                 "./files/geneva2.jpg",
//                 "./files/geneva3.jpg",
//                 "./files/geneva4.jpg",
//                 "./files/geneva5.jpg",
//                 "./files/geneva6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-geneva"
//         },
//         "port-blair": {
//             title: "Port Blair",
//             stars: "★★★★½",
//             description: "Port Blair includes a host of attractive locales, clean beaches, and many must-see attractions...",
//             extendedDescription: "The capital of the Andaman and Nicobar Islands, Port Blair serves as a gateway to pristine beaches and lush forests. History buffs can explore the Cellular Jail, a former British prison, while nature lovers can enjoy snorkeling and scuba diving in crystal-clear waters. The city also offers insights into the indigenous tribes of the islands and their unique cultures.",
//             images: [
//                 "./files/t7.jpg",
//                 "./files/port-blair2.jpg",
//                 "./files/port-blair3.jpg",
//                 "./files/port-blair4.jpg",
//                 "./files/port-blair5.jpg",
//                 "./files/port-blair6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-port-blair"
//         },
//         rome: {
//             title: "Rome",
//             stars: "★★★★",
//             description: "Rome is a fascinating place with incredible works of art and world-renowned cuisine...",
//             extendedDescription: "The Eternal City is a living museum of ancient history and Renaissance art. Visitors can explore iconic landmarks like the Colosseum, Roman Forum, and Vatican City. Art enthusiasts will be captivated by Michelangelo's Sistine Chapel and countless masterpieces in museums and churches. Don't forget to indulge in authentic Italian cuisine, toss a coin in the Trevi Fountain, and people-watch in charming piazzas.",
//             images: [
//                 "./files/t8.jpg",
//                 "./files/rome2.jpg",
//                 "./files/rome3.jpg",
//                 "./files/rome4.jpg",
//                 "./files/rome5.jpg",
//                 "./files/rome6.jpg"
//             ],
//             video: "https://www.youtube.com/embed/placeholder-rome"
//         }
//     };

//     const location = locations[locationKey];

//     if (location) {
//         // 1. Location Details
//         content.innerHTML = ` 
//             <div class="location-detail">
//                 <h1>${location.title}</h1>
//                 <div class="stars">${location.stars}</div>
//                 <p>${location.description}</p>
//                 <div class="location-gallery">
//                     <div class="gallery-container">
//                         <button class="gallery-nav prev" aria-label="Previous image">&#10094;</button>
//                         <img src="${location.images[0]}" alt="${location.title}" class="gallery-image">
//                         <button class="gallery-nav next" aria-label="Next image">&#10095;</button>
//                     </div>
//                     <p class="gallery-counter">Image 1 of ${location.images.length}</p>
//                 </div>
//                 <h2>About ${location.title}</h2>
//                 <p>${location.extendedDescription}</p>
//                 <div class="location-video">
//                     <iframe width="560" height="315" src="${location.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 </div>
//             </div>
//         `;

//         // 2. Add Package Section
//         const packageSection = `
//             <section class="package">
//                 <div class="package-title">
//                     <h2>Packages</h2>
//                 </div>
//                 <div class="package-content">
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p1.jpg" alt="">
//                             <h3>Rs.9,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location"> 
//                                 <h4>Bronze</h4>
//                                 <ul class="pac-details">
//                                     <li>2 Star Hotel</li>
//                                     <li>5 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/bronze.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p2.jpg" alt="">
//                             <h3>Rs.19,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Silver</h4>
//                                 <ul class="pac-details">
//                                     <li>3 Star Hotel</li>
//                                     <li>7 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/silver.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p3.jpg" alt="">
//                             <h3>Rs.29,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Gold</h4>
//                                 <ul class="pac-details">
//                                     <li>4 Star Hotel</li>
//                                     <li>10 Nights Stay</li>
//                                     <li>Breakfast and Dinner</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/gold.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p4.jpg" alt="">
//                             <h3>Rs.39,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Platinum</h4>
//                                 <ul class="pac-details">
//                                     <li>5 Star Hotel</li>
//                                     <li>14 Nights Stay</li>
//                                     <li>Breakfast, Lunch and Dinner</li>
//                                     <li>Bonfire</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/platinum.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div> 
//             </section>
//         `;
//         content.innerHTML += packageSection;

//         // 3. Add gallery functionality
//         let currentImageIndex = 0;
//         const galleryImage = document.querySelector('.gallery-image');
//         const prevButton = document.querySelector('.gallery-nav.prev');
//         const nextButton = document.querySelector('.gallery-nav.next');
//         const galleryCounter = document.querySelector('.gallery-counter');

//         function updateImage() {
//             galleryImage.src = location.images[currentImageIndex];
//             galleryImage.alt = `${location.title} - Image ${currentImageIndex + 1}`;
//             galleryCounter.textContent = `Image ${currentImageIndex + 1} of ${location.images.length}`;
//         }

//         prevButton.addEventListener('click', () => {
//             currentImageIndex = (currentImageIndex - 1 + location.images.length) % location.images.length;
//             updateImage();
//         });

//         nextButton.addEventListener('click', () => {
//             currentImageIndex = (currentImageIndex + 1) % location.images.length;
//             updateImage();
//         });

//         // Keyboard navigation
//         document.addEventListener('keydown', (e) => {
//             if (e.key === 'ArrowLeft') {
//                 prevButton.click();
//             } else if (e.key === 'ArrowRight') {
//                 nextButton.click();
//             }
//         });
//     } else {
//         content.innerHTML = "<p>Location not found.</p>"; 
//     }
// }

// window.addEventListener('hashchange', () => { 
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// });

// window.onload = () => {
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// };


// locations.js

// locations.js

// const locations = {
//     kashmir: {
//         title: "Kashmir",
//         stars: "★★★★★",
//         description: "Heaven on Earth, Kashmir is one of the most beautiful travel destinations to visit in North India...",
//         extendedDescription: "Known for its breathtaking landscapes, Kashmir offers a perfect blend of natural beauty and cultural richness. From the serene Dal Lake to the majestic Himalayan peaks, visitors can enjoy scenic boat rides, trekking, and skiing. The region is also famous for its exquisite handicrafts, particularly Pashmina shawls and intricate woodwork.",
//         brief: "Kashmir, often referred to as 'Paradise on Earth', is a region of breathtaking natural beauty and rich cultural heritage. Nestled in the northernmost part of India, it's known for its snow-capped mountains, pristine lakes, and lush valleys. The region offers a unique blend of adventure and tranquility, making it a perfect destination for nature lovers and those seeking spiritual solace.",
//         images: [
//             "./files/t1.jpg",
//             "./files/kashmir21.jpg",
//             "./files/kashmir3.jpg",
//             "./files/kashmir4.jpg",
//             "./files/kashmir5.jpg",
//             "./files/kashmir6.jpg"
//         ],
//         video: "https://www.youtube.com/embed/placeholder-kashmir"
//     },
//     istanbul: {
//         title: "Istanbul",
//         stars: "★★★★½",
//         description: "Istanbul offers unique historical and cultural riches and has hosted many different civilizations...",
//         extendedDescription: "Straddling two continents, Istanbul is a melting pot of cultures. The city boasts iconic landmarks like the Hagia Sophia and Blue Mosque, showcasing its rich Byzantine and Ottoman heritage. Visitors can explore bustling bazaars, enjoy Turkish cuisine, and take a scenic cruise along the Bosphorus strait.",
//         brief: "Istanbul, the largest city in Turkey, is a fascinating blend of East and West, straddling both Europe and Asia across the Bosphorus Strait. With its rich history spanning two millennia, Istanbul offers a unique mix of ancient and modern. From the magnificent Hagia Sophia and Blue Mosque to the bustling Grand Bazaar, the city is a treasure trove of cultural experiences.",
//         images: [
//             "./files/t2.jpg",
//             "./files/istanbul2.jpg",
//             "./files/istanbul3.jpg",
//             "./files/istanbul4.jpg",
//             "./files/istanbul5.jpg",
//             "./files/istanbul6.jpg"
//         ],
//         video: "https://www.youtube.com/embed/placeholder-istanbul"
//     },
//     // ... (other locations with added 'brief' property)
// };

// function loadLocation(locationKey) {
//     const content = document.getElementById('content');
//     const location = locations[locationKey];

//     if (location) {
//         content.innerHTML = `
//             <div class="location-detail">
//                 <h1>${location.title}</h1>
//                 <div class="stars">${location.stars}</div>
//                 <p>${location.description}</p>
//                 <div class="location-gallery">
//                     <img src="${location.images[0]}" alt="${location.title} - Main Image" class="gallery-image main-image">
//                     <div class="gallery-thumbnails">
//                         ${location.images.slice(1).map((img, index) => `
//                             <img src="${img}" alt="${location.title} - Image ${index + 2}" class="gallery-thumbnail">
//                         `).join('')}
//                     </div>
//                 </div>
//                 <h2>About ${location.title}</h2>
//                 <p>${location.extendedDescription}</p>
//                 <h3>Brief Overview</h3>
//                 <p>${location.brief}</p>
//                 <div class="location-video">
//                     <iframe width="560" height="315" src="${location.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 </div>
//             </div>
//         `;

//         // Add Package Section (unchanged)
//         const packageSection = `
//             <section class="package">
//                 <div class="package-title">
//                     <h2>Packages</h2>
//                 </div>
//                 <div class="package-content">
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p1.jpg" alt="">
//                             <h3>Rs.9,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location"> 
//                                 <h4>Bronze</h4>
//                                 <ul class="pac-details">
//                                     <li>2 Star Hotel</li>
//                                     <li>5 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/bronze.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p2.jpg" alt="">
//                             <h3>Rs.19,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Silver</h4>
//                                 <ul class="pac-details">
//                                     <li>3 Star Hotel</li>
//                                     <li>7 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/silver.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p3.jpg" alt="">
//                             <h3>Rs.29,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Gold</h4>
//                                 <ul class="pac-details">
//                                     <li>4 Star Hotel</li>
//                                     <li>10 Nights Stay</li>
//                                     <li>Breakfast and Dinner</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/gold.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p4.jpg" alt="">
//                             <h3>Rs.39,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Platinum</h4>
//                                 <ul class="pac-details">
//                                     <li>5 Star Hotel</li>
//                                     <li>14 Nights Stay</li>
//                                     <li>Breakfast, Lunch and Dinner</li>
//                                     <li>Bonfire</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/platinum.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div> 
//             </section>
//         `;
//         content.innerHTML += packageSection;
//     } else {
//         content.innerHTML = "<p>Location not found.</p>"; 
//     }
// }

// window.addEventListener('hashchange', () => { 
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// });

// window.onload = () => {
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// };

// const locations = {
//     kashmir: {
//         title: "Kashmir",
//         stars: "★★★★★",
//         description: "Heaven on Earth, Kashmir is one of the most beautiful travel destinations to visit in North India. Known for its breathtaking landscapes, Kashmir offers a perfect blend of natural beauty and cultural richness. From the serene Dal Lake to the majestic Himalayan peaks, visitors can enjoy scenic boat rides, trekking, and skiing.",
//         images: [
//             "./files/t1.jpg",
//             "./files/kashmir21.jpg",
//             "./files/kashmir3.jpg",
//             "./files/kashmir4.jpg",
//             "./files/kashmir5.jpg"
//         ],
//     },
//     istanbul: {
//         title: "Istanbul",
//         stars: "★★★★½",
//         description: "Istanbul offers unique historical and cultural riches and has hosted many different civilizations. Straddling two continents, Istanbul is a melting pot of cultures. The city boasts iconic landmarks like the Hagia Sophia and Blue Mosque, showcasing its rich Byzantine and Ottoman heritage. Visitors can explore bustling bazaars, enjoy Turkish cuisine, and take a scenic cruise along the Bosphorus strait.",
//         images: [
//             "./files/t2.jpg",
//             "./files/istanbul21.jpg",
//             "./files/istanbul3.jpg",
//             "./files/istanbul4.jpg",
//             "./files/istanbul5.jpg"
//         ],
//     },
//     paris: {
//         title: "Paris",
//         stars: "★★★★½",
//         description: "Paris is a diverse and sophisticated city with countless landmarks and world-famous French cuisine. The City of Light captivates with its iconic Eiffel Tower, world-class museums like the Louvre, and charming neighborhoods such as Montmartre. Art lovers can explore impressionist masterpieces, while food enthusiasts can indulge in exquisite French pastries and gourmet dining.",
//         images: [
//             "./files/t3.jpg",
//             "./files/paris2.jpg",
//             "./files/paris3.jpg",
//             "./files/paris4.jpg",
//             "./files/paris5.jpg"
//         ],
//     },
//     bali: {
//         title: "Bali",
//         stars: "★★★★½",
//         description: "Bali's beauty goes way deeper than its appearances, with a range of accommodations available. Known as the Island of the Gods, Bali offers a perfect mix of pristine beaches, lush rice terraces, and spiritual retreats. Visitors can explore ancient temples, participate in traditional ceremonies, or unwind in luxurious spa resorts. The island is also a haven for surfers and yoga enthusiasts.",
//         images: [
//             "./files/t4.jpg",
//             "./files/bali2.jpg",
//             "./files/bali3.jpg",
//             "./files/bali4.jpg",
//             "./files/bali5.jpg"
//         ],
//     },
//     dubai: {
//         title: "Dubai",
//         stars: "★★★★★",
//         description: "Dubai is an ideal holiday destination for families, with theme parks, beaches, and the famous Burj Khalifa. A city of superlatives, Dubai boasts the world's tallest building, the Burj Khalifa, and artificial islands shaped like palm trees. Visitors can experience luxury shopping in enormous malls, desert safaris in the nearby dunes, and a blend of traditional Arab culture and futuristic architecture.",
//         images: [
//             "./files/t5.jpg",
//             "./files/dubai2.jpg",
//             "./files/duabi3.jpg",
//             "./files/duabi4.jpg",
//             "./files/duabi5.jpg"
//         ],
//     },
//     geneva: {
//         title: "Geneva",
//         stars: "★★★★½",
//         description: "Geneva is a charming city with a plethora of attractions and tremendous natural beauty. Nestled between the Alps and Jura mountains, Geneva offers stunning views of Lake Geneva and Mont Blanc. The city is home to numerous international organizations, giving it a cosmopolitan flair. Visitors can explore the Old Town, visit the UN headquarters, and enjoy Swiss chocolate and watch-making traditions.",
//         images: [
//             "./files/t6.jpg",
//             "./files/geneva2.jpg",
//             "./files/geneva3.jpg",
//             "./files/geneva4.jpg",
//             "./files/geneva5.jpg"
//         ],
//     },
//     "port-blair": {
//         title: "Port Blair",
//         stars: "★★★★½",
//         description: "Port Blair includes a host of attractive locales, clean beaches, and many must-see attractions. The capital of the Andaman and Nicobar Islands, Port Blair serves as a gateway to pristine beaches and lush forests. History buffs can explore the Cellular Jail, a former British prison, while nature lovers can enjoy snorkeling and scuba diving in crystal-clear waters.",
//         images: [
//             "./files/t7.jpg",
//             "./files/port-blair2.jpg",
//             "./files/port-blair3.jpg",
//             "./files/port-blair4.jpg",
//             "./files/port-blair5.jpg"
//         ],
//     },
//     rome: {
//         title: "Rome",
//         stars: "★★★★",
//         description: "Rome is a fascinating place with incredible works of art and world-renowned cuisine. The Eternal City is a living museum of ancient history and Renaissance art. Visitors can explore iconic landmarks like the Colosseum, Roman Forum, and Vatican City. Art enthusiasts will be captivated by Michelangelo's Sistine Chapel and countless masterpieces in museums and churches. ",
//         images: [
//             "./files/t8.jpg",
//             "./files/rome2.jpg",
//             "./files/rome3.jpg",
//             "./files/rome4.jpg",
//             "./files/rome5.jpg"
//         ],
//     }
// };

// function loadLocation(locationKey) {
//     const content = document.getElementById('content');
//     const location = locations[locationKey];

//     if (location) {
//         content.innerHTML = `
//             <div class="location-detail">
//                 <h1>${location.title}</h1>
//                 <div class="stars">${location.stars}</div>
//                 <div class="location-gallery">
//                     <div class="main-image-container">
//                         <img src="${location.images[0]}" alt="${location.title} - Main Image" class="main-image">
//                     </div>
//                     <div class="side-images-container">
//                         <img src="${location.images[1]}" alt="${location.title} - Image 2" class="side-image">
//                         <img src="${location.images[2]}" alt="${location.title} - Image 3" class="side-image">
//                     </div>
//                     <div class="side-images-container">
//                         <img src="${location.images[3]}" alt="${location.title} - Image 4" class="side-image">
//                         <img src="${location.images[4]}" alt="${location.title} - Image 5" class="side-image">
//                     </div>
//                 </div>
//                 <div class="description-box">
//                     <p>${location.description}</p>
//                 </div>
//             </div>
//             <section class="package">
//                 <div class="package-title">
//                     <h2>Packages</h2>
//                 </div>
//                 <div class="package-content">
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p1.jpg" alt="">
//                             <h3>Rs.9,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location"> 
//                                 <h4>Bronze</h4>
//                                 <ul class="pac-details">
//                                     <li>2 Star Hotel</li>
//                                     <li>5 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/bronze.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p2.jpg" alt="">
//                             <h3>Rs.19,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Silver</h4>
//                                 <ul class="pac-details">
//                                     <li>3 Star Hotel</li>
//                                     <li>7 Nights Stay</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/silver.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p3.jpg" alt="">
//                             <h3>Rs.29,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Gold</h4>
//                                 <ul class="pac-details">
//                                     <li>4 Star Hotel</li>
//                                     <li>10 Nights Stay</li>
//                                     <li>Breakfast and Dinner</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/gold.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="box">
//                         <div class="image">
//                             <img src="./files/p4.jpg" alt="">
//                             <h3>Rs.39,999/-</h3>
//                         </div>
//                         <div class="dest-content">
//                             <div class="location">
//                                 <h4>Platinum</h4>
//                                 <ul class="pac-details">
//                                     <li>5 Star Hotel</li>
//                                     <li>14 Nights Stay</li>
//                                     <li>Breakfast, Lunch and Dinner</li>
//                                     <li>Bonfire</li>
//                                     <li>Free photo Session</li>
//                                     <li>Friendly Tour Guide</li>
//                                     <li>24/7 Customer Help Center</li>
//                                 </ul>
//                                 <a href="./hotel-details/platinum.html" class="button">Explore Hotels</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div> 
//             </section>
//         `;
//     } else {
//         content.innerHTML = "<p>Location not found.</p>"; 
//     }
// }

// window.addEventListener('hashchange', () => { 
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// });

// window.onload = () => {
//     const locationKey = window.location.hash.substring(1);
//     loadLocation(locationKey);
// };


const locations = {
    kashmir: {
        title: "Kashmir",
        stars: "★★★★★",
        description: "Kashmir, often referred to as 'Paradise on Earth', is a region of breathtaking natural beauty and rich cultural heritage. Nestled in the northernmost part of India, it's known for its snow-capped mountains, pristine lakes, and lush valleys. The region offers a unique blend of adventure and tranquility, making it a perfect destination for nature lovers and those seeking spiritual solace.",
        extendedDescription: "Kashmir's beauty is not just skin deep. The region boasts a rich tapestry of history and culture that dates back thousands of years. From the intricate Kashmiri handicrafts like Pashmina shawls and papier-mâché to the aromatic Kashmiri cuisine, every aspect of the region tells a story. The warmth and hospitality of the Kashmiri people add to the charm, making visitors feel at home in this Himalayan paradise.",
        placesToVisit: [
            "Dal Lake - Take a shikara ride on the serene waters",
            "Gulmarg - Experience world-class skiing and the highest gondola ride",
            "Pahalgam - Trek through picturesque valleys and enjoy river rafting",
            "Sonamarg - Visit the 'Meadow of Gold' and see the Thajiwas Glacier",
            "Mughal Gardens - Explore the beautiful Shalimar Bagh and Nishat Bagh"
        ],
        images: [
            "./files/t1.jpg",
            "./files/kashmir21.jpg",
            "./files/kashmir3.jpg",
            "./files/kashmir4.jpg",
            "./files/kashmir5.jpg"
        ],
        videoTitle: "Kashmir: A Symphony of Nature's Grandeur",
        videoFile: "./videos/kashmir_wonderland.mp4"
    },
    istanbul: {
        title: "Istanbul",
        stars: "★★★★½",
        description: "Istanbul, straddling two continents, is a captivating blend of East and West. This historic city, once the capital of two great empires, offers a unique fusion of ancient traditions and modern innovations. From the magnificent Hagia Sophia to the bustling Grand Bazaar, Istanbul is a treasure trove of cultural experiences.",
        extendedDescription: "The city's rich history is evident in its stunning architecture, from Byzantine churches to Ottoman mosques and palaces. But Istanbul is not just about the past; it's a vibrant, dynamic metropolis with a thriving arts scene, world-class cuisine, and vibrant nightlife. The Bosphorus Strait, which divides the city between Europe and Asia, offers breathtaking views and a unique geographical setting that few cities in the world can match.",
        placesToVisit: [
            "Hagia Sophia - Marvel at this architectural wonder turned museum",
            "Blue Mosque - Admire the stunning blue Iznik tiles",
            "Topkapi Palace - Explore the opulent home of Ottoman sultans",
            "Grand Bazaar - Shop in one of the world's largest and oldest covered markets",
            "Bosphorus Cruise - Enjoy a scenic boat tour between two continents"
        ],
        images: [
            "./files/t2.jpg",
            "./files/istanbul21.jpg",
            "./files/istanbul3.jpg",
            "./files/istanbul4.jpg",
            "./files/istanbul5.jpg"
        ],
        videoTitle: "Istanbul: Where Continents Collide",
        videoFile: "./videos/istanbul_crossroads.mp4"
    },
    paris: {
        title: "Paris",
        stars: "★★★★½",
        description: "Paris, the City of Light, is a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
        extendedDescription: "Paris is not just a city; it's an experience that engages all your senses. From the aroma of freshly baked croissants wafting from corner bakeries to the sight of world-famous artworks in the Louvre, Paris is a feast for the soul. The city's charm lies in its ability to blend the grandeur of its historical monuments with the simple pleasures of sitting at a sidewalk cafe, watching the world go by.",
        placesToVisit: [
            "Eiffel Tower - Ascend this iconic iron lattice tower for panoramic views",
            "Louvre Museum - Home to the Mona Lisa and countless other masterpieces",
            "Notre-Dame Cathedral - Admire the Gothic architecture (currently under restoration)",
            "Montmartre - Explore this charming hilltop neighborhood and visit Sacré-Cœur",
            "Champs-Élysées - Stroll down one of the world's most famous avenues"
        ],
        images: [
            "./files/t3.jpg",
            "./files/paris2.jpg",
            "./files/paris3.jpg",
            "./files/paris4.jpg",
            "./files/paris5.jpg"
        ],
        videoTitle: "Paris: A Love Affair with Art and Life",
        videoFile: "./videos/paris_romance.mp4"
    },
    bali: {
        title: "Bali",
        stars: "★★★★½",
        description: "Bali, the Island of the Gods, is a tropical paradise that offers a perfect blend of natural beauty, rich culture, and spiritual experiences. From pristine beaches and lush rice terraces to ancient temples and vibrant arts scene, Bali caters to all types of travelers seeking relaxation, adventure, or cultural immersion.",
        extendedDescription: "Beyond its picturesque landscapes, Bali's true magic lies in its unique culture and warm-hearted people. The island is dotted with thousands of Hindu temples, where colorful ceremonies and traditional dances are a common sight. Bali's artistic heritage is evident in its intricate handicrafts, music, and paintings. For those seeking wellness and spirituality, Bali offers numerous yoga retreats, spa treatments, and meditation centers.",
        placesToVisit: [
            "Ubud - Explore art galleries, rice terraces, and the Sacred Monkey Forest",
            "Tanah Lot Temple - Visit this iconic sea temple at sunset",
            "Uluwatu Temple - Watch a traditional Kecak fire dance with ocean views",
            "Seminyak - Enjoy trendy beach clubs, boutiques, and fine dining",
            "Nusa Penida - Discover stunning cliffs and beaches on this nearby island"
        ],
        images: [
            "./files/t4.jpg",
            "./files/bali2.jpg",
            "./files/bali3.jpg",
            "./files/bali4.jpg",
            "./files/bali5.jpg"
        ],
        videoTitle: "Bali: Where Serenity Meets Adventure",
        videoFile: "./videos/bali_paradise.mp4"
    },
    dubai: {
        title: "Dubai",
        stars: "★★★★★",
        description: "Dubai, a city of superlatives, is known for its ultramodern architecture, luxury shopping, and vibrant nightlife scene. This glittering jewel of the United Arab Emirates has transformed from a humble fishing village to a global metropolis, home to the world's tallest building, artificial islands, and indoor ski slopes.",
        extendedDescription: "While Dubai is famous for its futuristic skyline and extravagant attractions, it also preserves its rich Arabian heritage. Visitors can explore the historic Al Fahidi district, take a traditional abra ride across Dubai Creek, or experience the hospitality of Bedouin culture in the desert. The city's multicultural population is reflected in its diverse culinary scene, offering everything from street food to Michelin-starred restaurants.",
        placesToVisit: [
            "Burj Khalifa - Ascend the world's tallest building for breathtaking views",
            "Dubai Mall - Shop, dine, and visit the Dubai Aquarium",
            "Palm Jumeirah - Explore this palm-shaped artificial island",
            "Dubai Museum - Learn about the city's history in Al Fahidi Fort",
            "Desert Safari - Experience dune bashing, camel rides, and Bedouin camps"
        ],
        images: [
            "./files/t5.jpg",
            "./files/dubai2.jpg",
            "./files/duabi3.jpg",
            "./files/duabi4.jpg",
            "./files/duabi5.jpg"
        ],
        videoTitle: "Dubai: Where Dreams Touch the Sky",
        videoFile: "./videos/dubai_oasis.mp4"
    },
    geneva: {
        title: "Geneva",
        stars: "★★★★½",
        description: "Geneva, nestled between the Alps and Jura mountains, is a global hub for diplomacy and banking. This Swiss city on the shores of Lake Geneva (Lac Léman) is home to numerous international organizations, including the United Nations and the Red Cross. Known for its high quality of life, Geneva offers a perfect blend of natural beauty and cosmopolitan sophistication.",
        extendedDescription: "Beyond its role on the world stage, Geneva charms visitors with its old-world elegance and picturesque setting. The city's symbol, the Jet d'Eau fountain, shoots water 140 meters into the air, creating a stunning backdrop for the lakefront promenades. Geneva's Old Town, with its cobblestone streets and historic buildings, offers a glimpse into the city's rich past. The city is also a gateway to some of Switzerland's most beautiful alpine scenery and ski resorts.",
        placesToVisit: [
            "Jet d'Eau - See the iconic fountain on Lake Geneva",
            "Palais des Nations - Tour the European headquarters of the UN",
            "CERN - Visit the world's largest particle physics laboratory",
            "Old Town (Vieille Ville) - Explore historic streets and St. Pierre Cathedral",
            "Patek Philippe Museum - Discover the art of Swiss watchmaking"
        ],
        images: [
            "./files/t6.jpg",
            "./files/geneva2.jpg",
            "./files/geneva3.jpg",
            "./files/geneva4.jpg",
            "./files/geneva5.jpg"
        ],
        videoTitle: "Geneva: Where Global Meets Local",
        videoFile: "./videos/geneva_harmony.mp4"
    },
    "port-blair": {
        title: "Port Blair",
        stars: "★★★★½",
        description: "Port Blair, the capital city of the Andaman and Nicobar Islands, is a gateway to paradise. This tropical haven in the Bay of Bengal offers a unique blend of history, natural beauty, and cultural diversity. Known for its pristine beaches, lush forests, and crystal-clear waters, Port Blair is a starting point for exploring the stunning Andaman archipelago.",
        extendedDescription: "While Port Blair itself is a bustling town with a rich colonial history, it serves as a base for discovering the untouched beauty of the surrounding islands. The city's past is evident in sites like the Cellular Jail, a former British prison that now stands as a national memorial. Port Blair's diverse population, including indigenous tribes, creates a unique cultural tapestry. The waters around the city offer excellent opportunities for snorkeling, scuba diving, and spotting marine life.",
        placesToVisit: [
            "Cellular Jail - Explore this historic prison and attend the light and sound show",
            "Ross Island - Visit the former British administrative headquarters",
            "Corbyn's Cove - Relax on this coconut-palm fringed beach",
            "Anthropological Museum - Learn about the indigenous tribes of the islands",
            "Mahatma Gandhi Marine National Park - Go snorkeling or glass-bottom boating"
        ],
        images: [
            "./files/t7.jpg",
            "./files/port-blair2.jpg",
            "./files/port-blair3.jpg",
            "./files/port-blair4.jpg",
            "./files/port-blair5.jpg"
        ],
        videoTitle: "Port Blair: Gateway to Tropical Paradise",
        videoFile: "./videos/port_blair_discovery.mp4"
    },
    rome: {
        title: "Rome",
        stars: "★★★★",
        description: "Rome, the Eternal City, is a living museum of Western civilization. With a history spanning over two and a half thousand years, Rome offers an unparalleled journey through time. From ancient ruins like the Colosseum to Renaissance masterpieces in the Vatican, the city is a treasure trove of art, architecture, and culture.",
        extendedDescription: "Beyond its historical significance, Rome pulsates with a vibrant modern life. The city's streets are a stage where the drama of everyday Italian life unfolds - from animated conversations in piazzas to the aroma of espresso wafting from corner cafes. Rome's culinary scene is legendary, offering everything from simple trattorias serving perfect pasta to high-end restaurants reinventing Italian cuisine. The city's passion for life, or 'dolce vita', is infectious, making every visitor fall in love with its chaotic beauty.",
        placesToVisit: [
            "Colosseum - Step into the iconic amphitheater of ancient Rome",
            "Vatican Museums and Sistine Chapel - Marvel at Michelangelo's masterpieces",
            "Roman Forum - Walk through the heart of ancient Roman life",
            "Trevi Fountain - Toss a coin to ensure your return to Rome",
            "Pantheon - Admire this well-preserved ancient Roman temple"
        ],
        images: [
            "./files/t8.jpg",
            "./files/rome2.jpg",
            "./files/rome3.jpg",
            "./files/rome4.jpg",
            "./files/rome5.jpg"
        ],
        videoTitle: "Rome: Where Every Street Tells a Story",
        videoFile: "./videos/rome_eternal.mp4"
    }
};

function loadLocation(locationKey) {
    const content = document.getElementById('content');
    const location = locations[locationKey];

    if (location) {
        content.innerHTML = `
            <div class="location-detail">
                <h1>${location.title}</h1>
                <div class="stars">${location.stars}</div>
                <div class="location-gallery">
                    <div class="main-image-container">
                        <img src="${location.images[0]}" alt="${location.title} - Main Image" class="main-image">
                    </div>
                    <div class="side-images-container">
                        <img src="${location.images[1]}" alt="${location.title} - Image 2" class="side-image">
                        <img src="${location.images[2]}" alt="${location.title} - Image 3" class="side-image">
                    </div>
                    <div class="side-images-container">
                        <img src="${location.images[3]}" alt="${location.title} - Image 4" class="side-image">
                        <img src="${location.images[4]}" alt="${location.title} - Image 5" class="side-image">
                    </div>
                </div>
                <div class="description-box">
                    <h2>About ${location.title}</h2>
                    <p>${location.description}</p>
                    <p>${location.extendedDescription}</p>
                </div>
                <div class="places-to-visit">
                    <h2>Top 5 Places to Visit</h2>
                    <ul>
                        ${location.placesToVisit.map(place => `<li>${place}</li>`).join('')}
                    </ul>
                </div>
                <div class="location-video">
                    <h2>${location.videoTitle}</h2>
                    <video width="100%" controls>
                        <source src="${location.videoFile}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <section class="package">
                <div class="package-title">
                    <h2>Packages</h2>
                </div>
                <div class="package-content">
                    <div class="box">
                        <div  class="image">
                            <img src="./files/p1.jpg" alt="">
                            <h3>Rs.9,999/-</h3>
                        </div>
                        <div class="dest-content">
                            <div class="location"> 
                                <h4>Bronze</h4>
                                <ul class="pac-details">
                                    <li>2 Star Hotel</li>
                                    <li>5 Nights Stay</li>
                                    <li>Free photo Session</li>
                                    <li>Friendly Tour Guide</li>
                                    <li>24/7 Customer Help Center</li>
                                </ul>
                                <a href="./hotel-details/bronze.html" class="button">Explore Hotels</a>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="./files/p2.jpg" alt="">
                            <h3>Rs.19,999/-</h3>
                        </div>
                        <div class="dest-content">
                            <div class="location">
                                <h4>Silver</h4>
                                <ul class="pac-details">
                                    <li>3 Star Hotel</li>
                                    <li>7 Nights Stay</li>
                                    <li>Free photo Session</li>
                                    <li>Friendly Tour Guide</li>
                                    <li>24/7 Customer Help Center</li>
                                </ul>
                                <a href="./hotel-details/silver.html" class="button">Explore Hotels</a>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="./files/p3.jpg" alt="">
                            <h3>Rs.29,999/-</h3>
                        </div>
                        <div class="dest-content">
                            <div class="location">
                                <h4>Gold</h4>
                                <ul class="pac-details">
                                    <li>4 Star Hotel</li>
                                    <li>10 Nights Stay</li>
                                    <li>Breakfast and Dinner</li>
                                    <li>Free photo Session</li>
                                    <li>Friendly Tour Guide</li>
                                    <li>24/7 Customer Help Center</li>
                                </ul>
                                <a href="./hotel-details/gold.html" class="button">Explore Hotels</a>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="./files/p4.jpg" alt="">
                            <h3>Rs.39,999/-</h3>
                        </div>
                        <div class="dest-content">
                            <div class="location">
                                <h4>Platinum</h4>
                                <ul class="pac-details">
                                    <li>5 Star Hotel</li>
                                    <li>14 Nights Stay</li>
                                    <li>Breakfast, Lunch and Dinner</li>
                                    <li>Bonfire</li>
                                    <li>Free photo Session</li>
                                    <li>Friendly Tour Guide</li>
                                    <li>24/7 Customer Help Center</li>
                                </ul>
                                <a href="./hotel-details/platinum.html" class="button">Explore Hotels</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        `;
    } else {
        content.innerHTML = "<p>Location not found.</p>"; 
    }
}

window.addEventListener('hashchange', () => { 
    const locationKey = window.location.hash.substring(1);
    loadLocation(locationKey);
});

window.onload = () => {
    const locationKey = window.location.hash.substring(1);
    loadLocation(locationKey);
};