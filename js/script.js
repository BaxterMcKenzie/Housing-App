/* jshint esversion: 6 */

const properties = [{
    id: 1,
    name: "Mount Eden Hotel",
    type: "Hotel",
    price: "$157",
    location: "Auckland",
    longitude: 174.74791934100415,
    latitude: -36.88418771405654,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 5,
    minPeople: 1,
    maxPeople: 2,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.aucklandzoo.co.nz/" target="_blank">Auckland Zoo</a>',
    thing2: '<a href="https://snowplanet.co.nz/" target="_blank">Snow Planet</a>',
    thing3: '<a href="https://rainbowsend.co.nz/" target="_blank">Rainbows End</a>',
    thing4: '<a href="https://heartofthecity.co.nz/dining" target="_blank">Dining</a>',
    thing5: '<a href="https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/find-a-walk/Pages/default.aspx" target="_blank">Walking Tracks</a>',
    image: "/img/mount-eden-hotel.webp",
    description: `Nestled in the heart of Auckland, Mount Eden Hotel is a charming retreat offering a blend of comfort and tranquility. Overlooking scenic views, this hotel provides cozy rooms equipped with modern amenities, ensuring a relaxing stay. Guests can unwind in the serene atmosphere, enjoy friendly service, and explore nearby attractions, making it an ideal choice for both leisure and business travelers seeking a peaceful escape.`,
  },
  {
    id: 2,
    name: "Queen Street Hostel",
    type: "Hostel",
    price: "$30",
    location: "Auckland",
    longitude: 174.76352689518177,
    latitude: -36.85601168463786,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 10,
    minPeople: 1,
    maxPeople: 1,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.aucklandzoo.co.nz/" target="_blank">Auckland Zoo</a>',
    thing2: '<a href="https://snowplanet.co.nz/" target="_blank">Snow Planet</a>',
    thing3: '<a href="https://rainbowsend.co.nz/" target="_blank">Rainbows End</a>',
    thing4: '<a href="https://heartofthecity.co.nz/dining" target="_blank">Dining</a>',
    thing5: '<a href="https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/find-a-walk/Pages/default.aspx" target="_blank">Walking Tracks</a>',
    image: "/img/queen-street-hostel.webp",
    description: `Located in bustling Auckland, Queen Street Hostel offers affordable accommodations ideal for budget-conscious travelers. With its central location, guests can easily explore the city’s vibrant culture and entertainment options. The hostel provides comfortable rooms, essential amenities, and a friendly atmosphere, catering primarily to solo travelers looking for convenience and value during their stay.

`
  },
  {
    id: 3,
    name: "Aunt May's",
    type: "Motel",
    price: "$90",
    location: "Auckland",
    longitude: 174.71724168903947,
    latitude: -36.88756807758972,
    bedrooms: 2,
    bathrooms: 1,
    minStay: 3,
    maxStay: 10,
    minPeople: 2,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.aucklandzoo.co.nz/" target="_blank">Auckland Zoo</a>',
    thing2: '<a href="https://snowplanet.co.nz/" target="_blank">Snow Planet</a>',
    thing3: '<a href="https://rainbowsend.co.nz/" target="_blank">Rainbows End</a>',
    thing4: '<a href="https://heartofthecity.co.nz/dining" target="_blank">Dining</a>',
    thing5: '<a href="https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/find-a-walk/Pages/default.aspx" target="_blank">Walking Tracks</a>',
    image: "/img/aunt-may's.webp",
    description: `Aunt May's Motel in Auckland provides a homely retreat with spacious rooms suited for families or small groups. Set in a tranquil neighborhood, it offers a relaxed ambiance and essential amenities for a comfortable stay. Whether visiting for a short break or an extended vacation, guests can enjoy the convenience of nearby attractions and personalized service, making it a perfect choice for those seeking a cozy home away from home.`
  },
  {
    id: 4,
    name: "Full House",
    type: "House",
    price: "$240",
    location: "Auckland",
    longitude: 174.61965152224386,
    latitude: -36.875954099953155,
    bedrooms: 4,
    bathrooms: 2,
    minStay: 2,
    maxStay: 15,
    minPeople: 1,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.aucklandzoo.co.nz/" target="_blank">Auckland Zoo</a>',
    thing2: '<a href="https://snowplanet.co.nz/" target="_blank">Snow Planet</a>',
    thing3: '<a href="https://rainbowsend.co.nz/" target="_blank">Rainbows End</a>',
    thing4: '<a href="https://heartofthecity.co.nz/dining" target="_blank">Dining</a>',
    thing5: '<a href="https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/find-a-walk/Pages/default.aspx" target="_blank">Walking Tracks</a>',
    image: "/img/full-house.webp",
    description: `Full House in Auckland is a spacious accommodation option designed for families or groups looking to stay together. Featuring multiple bedrooms and bathrooms, it offers ample space and privacy, complemented by modern amenities for a hassle-free stay. Situated in a convenient location, guests can easily access Auckland’s sights and experiences, ensuring a memorable and comfortable stay tailored to larger groups or extended stays.`
  },
  {
    id: 5,
    name: "Happy Hostel",
    type: "Hostel",
    price: "$30",
    location: "Auckland",
    longitude: 174.74650230004278,
    latitude: -36.859342595822994,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 10,
    minPeople: 1,
    maxPeople: 1,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.aucklandzoo.co.nz/" target="_blank">Auckland Zoo</a>',
    thing2: '<a href="https://snowplanet.co.nz/" target="_blank">Snow Planet</a>',
    thing3: '<a href="https://rainbowsend.co.nz/" target="_blank">Rainbows End</a>',
    thing4: '<a href="https://heartofthecity.co.nz/dining" target="_blank">Dining</a>',
    thing5: '<a href="https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/find-a-walk/Pages/default.aspx" target="_blank">Walking Tracks</a>',
    image: "/img/happy-hostel.webp",
    description: `Happy Hostel in Auckland provides budget-friendly lodging with essential amenities, ideal for solo travelers exploring the city on a budget. With its central location, guests can conveniently access Auckland’s attractions and entertainment venues. The hostel offers cozy rooms, a welcoming atmosphere, and basic comforts, ensuring a pleasant stay for those seeking affordability without compromising on location or convenience.`
  },
  {
    id: 6,
    name: "Greg's Inn",
    type: "Hotel",
    price: "$157",
    location: "Hamilton",
    longitude: 175.23968970755664,
    latitude: -37.793059334745664,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 5,
    minPeople: 1,
    maxPeople: 2,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://hamiltonzoo.co.nz/" target="_blank">Hamilton Zoo</a>',
    thing2: '<a href="https://www.hamiltonpools.co.nz/" target="_blank">Water World</a>',
    thing3: '<a href="https://hamiltongardens.co.nz/" target="_blank">Hamitlon Gardens</a>',
    thing4: '<a href="https://www.visithamilton.co.nz/shopping-and-dining/restaurants" target="_blank">Dining</a>',
    thing5: '<a href="https://www.alltrails.com/new-zealand/waikato/hamilton" target="_blank">Walking Tracks</a>',
    image: "/img/greg's-inn.webp",
    description: `Greg's Inn in Hamilton offers a cozy and welcoming environment for travelers looking to unwind in New Zealand's North Island. With comfortable accommodations and friendly service, it provides a relaxing retreat. Located conveniently in Hamilton, guests can explore local attractions, enjoy modern amenities, and experience the city's charm, making it an ideal choice for couples or solo travelers seeking comfort and convenience.`
  },
  {
    id: 7,
    name: "The Tron",
    type: "Hostel",
    price: "$30",
    location: "Hamilton",
    longitude: 175.26822164971145,
    latitude: -37.76702206423843,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 10,
    minPeople: 1,
    maxPeople: 1,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://hamiltonzoo.co.nz/" target="_blank">Hamilton Zoo</a>',
    thing2: '<a href="https://www.hamiltonpools.co.nz/" target="_blank">Water World</a>',
    thing3: '<a href="https://hamiltongardens.co.nz/" target="_blank">Hamitlon Gardens</a>',
    thing4: '<a href="https://www.visithamilton.co.nz/shopping-and-dining/restaurants" target="_blank">Dining</a>',
    thing5: '<a href="https://www.alltrails.com/new-zealand/waikato/hamilton" target="_blank">Walking Tracks</a>',
    image: "/img/the-tron.webp",
    description: `The Tron Hostel in Hamilton provides budget-friendly accommodations suited for solo travelers or small groups. With its central location, guests can easily explore Hamilton's vibrant culture and attractions. The hostel offers simple yet comfortable rooms, essential amenities, and a friendly atmosphere, making it an excellent choice for travelers seeking affordability and convenience during their stay in Hamilton.`
  },
  {
    id: 8,
    name: "Roy's Motel Cafe",
    type: "Motel",
    price: "$90",
    location: "Hamilton",
    longitude: 175.26372970862306,
    latitude: -37.8032620637052,
    bedrooms: 3,
    bathrooms: 1,
    minStay: 3,
    maxStay: 10,
    minPeople: 2,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://hamiltonzoo.co.nz/" target="_blank">Hamilton Zoo</a>',
    thing2: '<a href="https://www.hamiltonpools.co.nz/" target="_blank">Water World</a>',
    thing3: '<a href="https://hamiltongardens.co.nz/" target="_blank">Hamitlon Gardens</a>',
    thing4: '<a href="https://www.visithamilton.co.nz/shopping-and-dining/restaurants" target="_blank">Dining</a>',
    thing5: '<a href="https://www.alltrails.com/new-zealand/waikato/hamilton" target="_blank">Walking Tracks</a>',
    image: "/img/roy's-motel.webp",
    description: `Roy's Motel Cafe in Hamilton offers cozy accommodations ideal for families or groups visiting the city. With spacious rooms and convenient amenities, it provides a comfortable base to explore Hamilton's sights and activities. Set in a relaxed environment, guests can enjoy personalized service and easy access to local attractions, ensuring a pleasant and memorable stay tailored to the needs of leisure or business travelers.`
  },
  {
    id: 9,
    name: "Emma's Place",
    type: "House",
    price: "$240",
    location: "Hamilton",
    longitude: 175.2243441647464,
    latitude: -37.7765913269547,
    bedrooms: 3,
    bathrooms: 2,
    minStay: 2,
    maxStay: 15,
    minPeople: 1,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://hamiltonzoo.co.nz/" target="_blank">Hamilton Zoo</a>',
    thing2: '<a href="https://www.hamiltonpools.co.nz/" target="_blank">Water World</a>',
    thing3: '<a href="https://hamiltongardens.co.nz/" target="_blank">Hamitlon Gardens</a>',
    thing4: '<a href="https://www.visithamilton.co.nz/shopping-and-dining/restaurants" target="_blank">Dining</a>',
    thing5: '<a href="https://www.alltrails.com/new-zealand/waikato/hamilton" target="_blank">Walking Tracks</a>',
    image: "/img/emmas-place.webp",
    description: `Emma's Place in Hamilton is a spacious house designed for families or groups seeking a home-like atmosphere during their stay. Featuring multiple bedrooms and bathrooms, it offers privacy and comfort with all the amenities needed for a relaxing vacation. Located conveniently in Hamilton, guests can explore nearby attractions, enjoy modern comforts, and experience personalized hospitality, ensuring a memorable and enjoyable visit to New Zealand's North Island.`
  },
  {
    id: 10,
    name: "Hamilton Hotel",
    type: "Hotel",
    price: "$157",
    location: "Hamilton",
    longitude: 175.24453273624349,
    latitude: -37.740706426670705,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 5,
    minPeople: 1,
    maxPeople: 2,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://hamiltonzoo.co.nz/" target="_blank">Hamilton Zoo</a>',
    thing2: '<a href="https://www.hamiltonpools.co.nz/" target="_blank">Water World</a>',
    thing3: '<a href="https://hamiltongardens.co.nz/" target="_blank">Hamitlon Gardens</a>',
    thing4: '<a href="https://www.visithamilton.co.nz/shopping-and-dining/restaurants" target="_blank">Dining</a>',
    thing5: '<a href="https://www.alltrails.com/new-zealand/waikato/hamilton" target="_blank">Walking Tracks</a>',
    image: "/img/hamilton-hotel.webp",
    description: `Hamilton Hotel offers well-appointed rooms with modern amenities, centrally located for easy access to Hamilton's attractions and business districts. Ideal for short stays or business travelers, it provides comfort and convenience with personalized service and a welcoming atmosphere. Guests can enjoy a relaxing retreat in the heart of Hamilton, ensuring a pleasant experience tailored to both leisure and corporate travelers.`
  },
  {
    id: 11,
    name: "Green Meadows Hotel",
    type: "Hotel",
    price: "$157",
    location: "Napier",
    longitude: 176.86123913695937,
    latitude: -39.52373074151868,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 5,
    minPeople: 1,
    maxPeople: 2,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.nationalaquarium.co.nz/" target="_blank">Napier Aquarium</a>',
    thing2: '<a href="https://www.church-road.com/" target="_blank">Winery</a>',
    thing3: '<a href="https://www.getyourguide.com/napier-l2644/napier-art-deco-self-guided-audio-walking-tour-t178841/?ranking_uuid=a3b574fa-9416-4748-a1bd-9c9cf29f79fc" target="_blank">Guided Walking Tour</a>',
    thing4: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Dining</a>',
    thing5: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Walking Tracks</a>',
    image: "/img/green-meadows-hotel.webp",
    description: `Green Meadows Hotel in Napier provides stylish accommodations with picturesque views, perfect for couples or solo travelers seeking a tranquil escape. Set amidst natural beauty, it offers comfortable rooms, modern amenities, and personalized service. Guests can relax in a serene environment, explore Napier's attractions, and enjoy a memorable stay with a focus on comfort and relaxation.`
  },
  {
    id: 12,
    name: "Stay Inn",
    type: "Hostel",
    price: "$30",
    location: "Napier",
    longitude: 176.85478159114678,
    latitude: -39.537939908190296,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 10,
    minPeople: 1,
    maxPeople: 1,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.nationalaquarium.co.nz/" target="_blank">Napier Aquarium</a>',
    thing2: '<a href="https://www.church-road.com/" target="_blank">Winery</a>',
    thing3: '<a href="https://www.getyourguide.com/napier-l2644/napier-art-deco-self-guided-audio-walking-tour-t178841/?ranking_uuid=a3b574fa-9416-4748-a1bd-9c9cf29f79fc" target="_blank">Guided Walking Tour</a>',
    thing4: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Dining</a>',
    thing5: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Walking Tracks</a>',
    image: "/img/stay-inn.webp",
    description: `Stay Inn in Napier offers budget-friendly hostel accommodations with essential amenities, ideal for solo travelers exploring Napier's cultural and natural attractions. With its central location, guests can easily access local sights and activities. The hostel provides comfortable rooms, a friendly atmosphere, and basic comforts, ensuring a convenient and enjoyable stay for those seeking affordability and convenience.`
  },
  {
    id: 13,
    name: "Grant's Groovin Motel",
    type: "Motel",
    price: "$90",
    location: "Napier",
    longitude: 176.86753357752355,
    latitude: -39.515490883761444,
    bedrooms: 2,
    bathrooms: 1,
    minStay: 3,
    maxStay: 10,
    minPeople: 2,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.nationalaquarium.co.nz/" target="_blank">Napier Aquarium</a>',
    thing2: '<a href="https://www.church-road.com/" target="_blank">Winery</a>',
    thing3: '<a href="https://www.getyourguide.com/napier-l2644/napier-art-deco-self-guided-audio-walking-tour-t178841/?ranking_uuid=a3b574fa-9416-4748-a1bd-9c9cf29f79fc" target="_blank">Guided Walking Tour</a>',
    thing4: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Dining</a>',
    thing5: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Walking Tracks</a>',
    image: "/img/grant's-groovin-motel.webp",
    description: `Grant's Groovin Motel in Napier provides cozy accommodations suitable for families or small groups. With a relaxed ambiance and essential amenities, it offers a comfortable base to explore Napier's attractions. Guests can unwind in spacious rooms, enjoy personalized service, and experience the city's charm, making it an ideal choice for leisure travelers seeking a relaxing getaway in New Zealand's North Island.`
  },
  {
    id: 14,
    name: "Garden Views",
    type: "House",
    price: "$240",
    location: "Napier",
    longitude: 176.9016421789216,
    latitude: -39.488095442437135,
    bedrooms: 3,
    bathrooms: 2,
    minStay: 2,
    maxStay: 15,
    minPeople: 1,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.nationalaquarium.co.nz/" target="_blank">Napier Aquarium</a>',
    thing2: '<a href="https://www.church-road.com/" target="_blank">Winery</a>',
    thing3: '<a href="https://www.getyourguide.com/napier-l2644/napier-art-deco-self-guided-audio-walking-tour-t178841/?ranking_uuid=a3b574fa-9416-4748-a1bd-9c9cf29f79fc" target="_blank">Guided Walking Tour</a>',
    thing4: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Dining</a>',
    thing5: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Walking Tracks</a>',
    image: "/img/garden-views.webp",
    description: `Garden Views in Napier is an elegant house offering spacious rooms and modern amenities, ideal for families or groups seeking a luxurious retreat. Set in a tranquil neighborhood, it provides privacy, comfort, and convenience with all the comforts of home. Guests can relax in style, explore Napier's cultural offerings, and enjoy a memorable stay tailored to their needs and preferences.`
  },
  {
    id: 15,
    name: "Cathy's Court",
    type: "House",
    price: "$240",
    location: "Napier",
    longitude: 176.8539386902148,
    latitude: -39.51062137235276,
    bedrooms: 3,
    bathrooms: 2,
    minStay: 2,
    maxStay: 15,
    minPeople: 1,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.nationalaquarium.co.nz/" target="_blank">Napier Aquarium</a>',
    thing2: '<a href="https://www.church-road.com/" target="_blank">Winery</a>',
    thing3: '<a href="https://www.getyourguide.com/napier-l2644/napier-art-deco-self-guided-audio-walking-tour-t178841/?ranking_uuid=a3b574fa-9416-4748-a1bd-9c9cf29f79fc" target="_blank">Guided Walking Tour</a>',
    thing4: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Dining</a>',
    thing5: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Walking Tracks</a>',
    image: "/img/cathy's-court.webp",
    description: `Cathy's Court in Napier offers stylish accommodations with multiple bedrooms and bathrooms, perfect for families or groups seeking comfort and convenience. With its central location, guests can easily explore Napier's attractions and natural beauty. The house provides a homely atmosphere, modern comforts, and personalized hospitality, ensuring a relaxing and enjoyable stay for visitors to New Zealand's North Island.`
  },
  {
    id: 16,
    name: "Riverside Hotel",
    type: "Hotel",
    price: "$157",
    location: "Taupō",
    longitude: 176.0821790273673,
    latitude: -38.6788775674219,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 5,
    minPeople: 1,
    maxPeople: 2,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.nationalaquarium.co.nz/" target="_blank">Napier Aquarium</a>',
    thing2: '<a href="https://www.church-road.com/" target="_blank">Winery</a>',
    thing3: '<a href="https://www.getyourguide.com/napier-l2644/napier-art-deco-self-guided-audio-walking-tour-t178841/?ranking_uuid=a3b574fa-9416-4748-a1bd-9c9cf29f79fc" target="_blank">Guided Walking Tour</a>',
    thing4: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Dining</a>',
    thing5: '<a href="https://www.hawkesbaynz.com/see-and-do/great-outdoors/walking-and-hiking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFkmQU7Nds2RlgsPUD-1CqWMq50JQNMEIrLVMMvYUdiRt1fnDMQUtxoCSxMQAvD_BwE" target="_blank">Walking Tracks</a>',
    image: "/img/riverside-hotel.webp",
    description: `Riverside Hotel in Taupō offers scenic views and comfortable accommodations, perfect for couples or solo travelers seeking a peaceful retreat. With its serene location, it provides a relaxing atmosphere, modern amenities, and personalized service. Guests can enjoy a tranquil escape, explore Taupō's attractions, and unwind in style, making it an ideal choice for a memorable vacation in the heart of New Zealand's North Island.`
  },
  {
    id: 17,
    name: "Hot Spring",
    type: "Hostel",
    price: "$30",
    location: "Taupō",
    longitude: 176.07804733075653,
    latitude: -38.686003107082634,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 10,
    minPeople: 1,
    maxPeople: 1,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.lovetaupo.com/en/operators/taupo-debretts-hot-springs/" target="_blank">Hot Pools</a>',
    thing2: '<a href="https://www.lovetaupo.com/en/operators/rapids-jet/">Jet Boat</a>',
    thing3: '<a href="https://www.lovetaupo.com/en/see-do/art-maori-culture/" target="_blank">Art & Culture</a>',
    thing4: '<a href="https://www.lovetaupo.com/en/see-do/eat-drink/restaurants-bars/" target="_blank">Dining</a>',
    thing5: '<a href="https://www.lovetaupo.com/en/discover/our-stories/top-25-walks-and-rides-in-taupo/" target="_blank">Walking Tracks</a>',
    image: "/img/hot-spring.webp",
    description: `Hot Spring Hostel in Taupō offers budget-friendly lodging with essential amenities, ideal for solo travelers exploring Taupō's natural wonders and attractions. With its central location, guests can conveniently access local sights and activities. The hostel provides simple yet comfortable rooms, a friendly atmosphere, and basic comforts, ensuring a pleasant stay for those seeking affordability and convenience during their visit to Taupō.`
  },
  {
    id: 18,
    name: "Motel 7",
    type: "Motel",
    price: "$90",
    location: "Taupō",
    longitude: 176.0796719102074,
    latitude: -38.67395269271208,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 3,
    maxStay: 10,
    minPeople: 2,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.lovetaupo.com/en/operators/taupo-debretts-hot-springs/" target="_blank">Hot Pools</a>',
    thing2: '<a href="https://www.lovetaupo.com/en/operators/rapids-jet/">Jet Boat</a>',
    thing3: '<a href="https://www.lovetaupo.com/en/see-do/art-maori-culture/" target="_blank">Art & Culture</a>',
    thing4: '<a href="https://www.lovetaupo.com/en/see-do/eat-drink/restaurants-bars/" target="_blank">Dining</a>',
    thing5: '<a href="https://www.lovetaupo.com/en/discover/our-stories/top-25-walks-and-rides-in-taupo/" target="_blank">Walking Tracks</a>',
    image: "/img/motel-7.webp",
    description: `Motel 7 in Taupō offers comfortable accommodations with convenient amenities, perfect for families or groups seeking a relaxing stay. With spacious rooms and essential comforts, it provides a cozy retreat in Taupō. Guests can unwind in a welcoming environment, enjoy personalized service, and explore the city's sights and activities, ensuring a pleasant and memorable experience tailored to their needs.`
  },
  {
    id: 19,
    name: "Two Mile Bay",
    type: "House",
    price: "$240",
    location: "Taupō",
    longitude: 176.08643858488452,
    latitude: -38.71340744854718,
    bedrooms: 2,
    bathrooms: 2,
    minStay: 2,
    maxStay: 15,
    minPeople: 1,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.lovetaupo.com/en/operators/taupo-debretts-hot-springs/" target="_blank">Hot Pools</a>',
    thing2: '<a href="https://www.lovetaupo.com/en/operators/rapids-jet/">Jet Boat</a>',
    thing3: '<a href="https://www.lovetaupo.com/en/see-do/art-maori-culture/" target="_blank">Art & Culture</a>',
    thing4: '<a href="https://www.lovetaupo.com/en/see-do/eat-drink/restaurants-bars/" target="_blank">Dining</a>',
    thing5: '<a href="https://www.lovetaupo.com/en/discover/our-stories/top-25-walks-and-rides-in-taupo/" target="_blank">Walking Tracks</a>',
    image: "/img/two-mile-bay.webp",
    description: `Two Mile Bay in Taupō offers a spacious house with modern amenities, ideal for families or groups seeking comfort and convenience. With multiple bedrooms and bathrooms, it provides privacy and ample space for a relaxing stay. Guests can enjoy a homely atmosphere, explore Taupō's attractions, and unwind in style, making it an ideal choice for a memorable vacation in New Zealand's North Island.`
  },
  {
    id: 20,
    name: "Maggy's",
    type: "Motel",
    price: "$90",
    location: "Taupō",
    longitude: 176.09232220313186,
    latitude: -38.68192822435421,
    bedrooms: 2,
    bathrooms: 1,
    minStay: 3,
    maxStay: 10,
    minPeople: 2,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.lovetaupo.com/en/operators/taupo-debretts-hot-springs/" target="_blank">Hot Pools</a>',
    thing2: '<a href="https://www.lovetaupo.com/en/operators/rapids-jet/">Jet Boat</a>',
    thing3: '<a href="https://www.lovetaupo.com/en/see-do/art-maori-culture/" target="_blank">Art & Culture</a>',
    thing4: '<a href="https://www.lovetaupo.com/en/see-do/eat-drink/restaurants-bars/" target="_blank">Dining</a>',
    thing5: '<a href="https://www.lovetaupo.com/en/discover/our-stories/top-25-walks-and-rides-in-taupo/" target="_blank">Walking Tracks</a>',
    image: "/img/maggy's.webp",
    description: `Maggy's Motel in Taupō offers cozy accommodations with essential amenities, ideal for families or small groups visiting the city. With its central location, guests can easily explore Taupō's attractions and activities. The motel provides comfortable rooms, a friendly ambiance, and basic comforts, ensuring a pleasant and convenient stay for travelers seeking affordability without compromising on comfort or location.`
  },
  {
    id: 21,
    name: "Cuba Hotel",
    type: "Hotel",
    price: "$157",
    location: "Wellington",
    longitude: 174.7752681080781,
    latitude: -41.29390750607919,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 5,
    minPeople: 1,
    maxPeople: 2,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.tepapa.govt.nz/" target="_blank">Te Papa</a>',
    thing2: '<a href="https://wellingtonzoo.com/">Wellington Zoo</a>',
    thing3: '<a href="https://www.visitzealandia.com/" target="_blank">Zealandia</a>',
    thing4: '<a href="https://www.wellingtonnz.com/visit/eat-and-drink" target="_blank">Dining</a>',
    thing5: '<a href="https://wellington.govt.nz/recreation/outdoors/walks-and-walkways/top-20-welly-walks" target="_blank">Walking Tracks</a>',
    image: "/img/cuba-hotel.webp",
    description: `Cuba Hotel in Wellington offers boutique accommodations with stylish rooms and a welcoming ambiance, perfect for couples or solo travelers exploring New Zealand's capital. With its central location, guests can easily access Wellington's cultural attractions and entertainment venues. The hotel provides luxurious comfort, modern amenities, and personalized service, ensuring a memorable and enjoyable stay in the heart of Wellington.`
  },
  {
    id: 22,
    name: "Hopper St Hostel",
    type: "Hostel",
    price: "$30",
    location: "Wellington",
    longitude: 174.77325229178467,
    latitude: -41.30020654016743,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 10,
    minPeople: 1,
    maxPeople: 1,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.tepapa.govt.nz/" target="_blank">Te Papa</a>',
    thing2: '<a href="https://wellingtonzoo.com/">Wellington Zoo</a>',
    thing3: '<a href="https://www.visitzealandia.com/" target="_blank">Zealandia</a>',
    thing4: '<a href="https://www.wellingtonnz.com/visit/eat-and-drink" target="_blank">Dining</a>',
    thing5: '<a href="https://wellington.govt.nz/recreation/outdoors/walks-and-walkways/top-20-welly-walks" target="_blank">Walking Tracks</a>',
    image: "/img/hopper-st-hostel.webp",
    description: `Hopper St Hostel in Wellington offers budget-friendly lodging with basic amenities, ideal for budget travelers seeking convenience and value. With its central location, guests can explore Wellington's vibrant city life, cultural attractions, and scenic views. The hostel provides comfortable rooms, a friendly atmosphere, and essential comforts, ensuring a pleasant stay for those looking to experience Wellington on a budget.`
  },
  {
    id: 23,
    name: "Quick Stay",
    type: "Motel",
    price: "$90",
    location: "Wellington",
    longitude: 174.7797249076366,
    latitude: -41.313013081592175,
    bedrooms: 2,
    bathrooms: 1,
    minStay: 3,
    maxStay: 10,
    minPeople: 2,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.tepapa.govt.nz/" target="_blank">Te Papa</a>',
    thing2: '<a href="https://wellingtonzoo.com/">Wellington Zoo</a>',
    thing3: '<a href="https://www.visitzealandia.com/" target="_blank">Zealandia</a>',
    thing4: '<a href="https://www.wellingtonnz.com/visit/eat-and-drink" target="_blank">Dining</a>',
    thing5: '<a href="https://wellington.govt.nz/recreation/outdoors/walks-and-walkways/top-20-welly-walks" target="_blank">Walking Tracks</a>',
    image: "/img/quick-stay.webp",
    description: `Quick Stay Motel in Wellington offers convenient accommodations with essential amenities, suitable for families or groups visiting the city. With its spacious rooms and modern comforts, it provides a comfortable base to explore Wellington's sights and activities. Guests can enjoy personalized service, a welcoming atmosphere, and easy access to local attractions, ensuring a relaxing and enjoyable stay in New Zealand's capital.`
  },
  {
    id: 24,
    name: "Beach Front Francine's",
    type: "House",
    price: "$240",
    location: "Wellington",
    longitude: 174.79194412079968,
    latitude: -41.331053440273436,
    bedrooms: 3,
    bathrooms: 2,
    minStay: 2,
    maxStay: 15,
    minPeople: 1,
    maxPeople: 4,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.tepapa.govt.nz/" target="_blank">Te Papa</a>',
    thing2: '<a href="https://wellingtonzoo.com/">Wellington Zoo</a>',
    thing3: '<a href="https://www.visitzealandia.com/" target="_blank">Zealandia</a>',
    thing4: '<a href="https://www.wellingtonnz.com/visit/eat-and-drink" target="_blank">Dining</a>',
    thing5: '<a href="https://wellington.govt.nz/recreation/outdoors/walks-and-walkways/top-20-welly-walks" target="_blank">Walking Tracks</a>',
    image: "/img/beach-front-francine's.webp",
    description: `Beach Front Francine's in Wellington offers a beachfront house with stunning views and comfortable amenities, ideal for families or groups seeking a seaside retreat. With its spacious layout and modern comforts, it provides a relaxing atmosphere for guests to unwind and enjoy Wellington's coastline. The house offers privacy, convenience, and personalized hospitality, ensuring a memorable and rejuvenating stay in New Zealand's capital.`
  },
  {
    id: 25,
    name: "Nakatomi Plaza",
    type: "Hostel",
    price: "$30",
    location: "Wellington",
    longitude: 174.77513653403318,
    latitude: -41.2844725914616,
    bedrooms: 1,
    bathrooms: 1,
    minStay: 1,
    maxStay: 10,
    minPeople: 1,
    maxPeople: 1,
    breakfast: "$10",
    lunch: "$20",
    dinner: "$30",
    thing1: '<a href="https://www.tepapa.govt.nz/" target="_blank">Te Papa</a>',
    thing2: '<a href="https://wellingtonzoo.com/">Wellington Zoo</a>',
    thing3: '<a href="https://www.visitzealandia.com/" target="_blank">Zealandia</a>',
    thing4: '<a href="https://www.wellingtonnz.com/visit/eat-and-drink" target="_blank">Dining</a>',
    thing5: '<a href="https://wellington.govt.nz/recreation/outdoors/walks-and-walkways/top-20-welly-walks" target="_blank">Walking Tracks</a>',
    image: "/img/nakatomi-plaza.webp",
    description: `Nakatomi Plaza Hostel in Wellington offers simple accommodations in a central location, perfect for solo travelers or small groups exploring the city. With its budget-friendly rooms and essential amenities, guests can enjoy convenience and value during`
  },
];

// ================== END OF ARRAY ===============

$(document).ready(function () {
  // FULL PAGE INITIALISATION
  $('#fullpage').fullpage({
    licenceKey: 'gplv3-license',
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    keyboardScrolling:false,
  });

  // Mapbox Init:
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

  function initaliseMap(longitude, latitude) {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 13
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }


  $.fn.fullpage.setAllowScrolling(false);

  function moveToSection(number) {
    fullpage_api.moveTo(number);
  }

  $('#goToSection1').click(function () {
    moveToSection(1);
  });

  $('#goToSection2').click(function () {
    moveToSection(2);
  });

  $('.back-button').click(function () {
    moveToSection(3);
  });



  // ========= SIGN UP OR LOGIN FORM REGEX ============

  $('#submitButton').click(function (event) {
    event.preventDefault();

    // Regular Expressions
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Input Elements
    const username = $('#username').val();
    const email = $('#email').val();
    const password = $('#password').val();

    if (!usernameRegex.test(username)) {
      $('#formMessage').html('<p>Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.</p>');
    } else if (!emailRegex.test(email)) {
      $('#formMessage').html('<p>Invalid email format</p>');
    } else if (!passwordRegex.test(password)) {
      $('#formMessage').html('<p>Password must be at least 8 characters long and include at least one uppercase letter and one number.</p>');
    } else {
      $('#formMessage').html('');
      fullpage_api.moveTo(2, 0);
    }
  });

  // ============= END OF FORM REGEX =================

  // ========== START OF POPULATE ===============

  // Populate Locations Options/Filtering:
  function populateLocationOptions() {
    const locations = Array.from(new Set(properties.map(property => property.location)));
    locations.sort();
    const locationSelect = $('#location');
    locationSelect.empty();

    locationSelect.append(`<option value="any">Location</option>`);

    locations.forEach(location => {
      locationSelect.append(`<option value="${location}">${location}</option>`);
    });
  }

  populateLocationOptions();

  function validateFilters() {
    let isValid = true;
    let errorMessage = "";

    if ($('#location').val() === "") {
      isValid = false;
      errorMessage += "Please select a location.<br>";
    }
    if ($("#type").val() === "") {
      isValid = false;
      errorMessage += "Please select the type.<br>";
    }
    const guests = parseInt($("#guests").val(), 10);
    if (isNaN(guests) || guests <= 0) {
      isValid = false;
      errorMessage += "Please select a valid number of guests.<br>";
    }
    if ($("#bedrooms").val() === "") {
      isValid = false;
      errorMessage += "Please select the minimum number of bedrooms.<br>";
    }
    if ($('#startDate').val() === "") {
      isValid = false;
      errorMessage += "Please select a start date.<br>";
    }
    if ($('#endDate').val() === "") {
      isValid = false;
      errorMessage += "Please select an end date.<br>";
    }

    if (!isValid) {
      $('#error-message').html(errorMessage).show();
    } else {
      $('#error-message').hide();
    }

    return isValid;
  }

  // DatePickers:
  $("#startDate").datepicker({
    dateFormat: "dd/mm/yy"
  });

  $("#endDate").datepicker({
    dateFormat: "dd/mm/yy"
  });

  // Search Button Click:
  $("#searchBtn").click(function (e) {
    e.preventDefault();
    if (validateFilters()) {
      fullpage_api.moveTo(3, 1);
      filterAndDisplayProperties();
    }
  });

  function filterAndDisplayProperties() {
    // Get value from filters:
    const location = $('#location').val();
    const type = $('#type').val() || "any";
    const guests = parseInt($('#guests').val(), 10);
    const bedrooms = $('#bedrooms').val() || "any";
    const diffDays = calculateDays();

    // run filter over the properties array and check if it passes
    const filteredProperties = properties.filter(property => {
      return (location === 'any' || property.location === location) &&
        (type === 'any' || property.type === type) &&
        (property.maxPeople >= guests) &&
        (property.minPeople <= guests) &&
        (bedrooms === 'any' || property.bedrooms == parseInt(bedrooms, 10)) &&
        (property.minStay <= diffDays) &&
        (property.maxStay >= diffDays);
    });

    displayProperties(filteredProperties);
  }

  function calculateDays() {
    const startDate = $("#startDate").datepicker("getDate");
    const endDate = $("#endDate").datepicker("getDate");

    if (startDate && endDate) {
      // calculate the difference:
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      // convert to days:
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    } else {
      return 0;
    }
  }

  // ---------- SORT BY PRICE HIGH --------

  const sortByPriceHigh = $('#price-high');

  function sortbyPriceHigh() {
    const sortedPrices = properties.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    displayProperties(sortedPrices);
  }

  sortByPriceHigh.on('click', function () {
    sortbyPriceHigh();
  });

  // ---------- SORT BY PRICE LOW --------

  const sortByPriceLow = $('#price-low');

  function sortbyPriceLow() {
    const sortedPrices = properties.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    displayProperties(sortedPrices);
  }

  sortByPriceLow.on('click', function () {
    sortbyPriceLow();
  });

  displayProperties(properties);

  // Property Card Array

  function displayProperties(array) {
    $('#results').html('');
    if (array.length === 0) {
      $('#results').html('<p>No properties found.</p>');
    } else {
      for (let i = 0; i < array.length; i++) {

        const propertyCard = `
          <div class="card">
            <img src="${array[i].image}" alt="" class="card-img" data-id="">
            <div class="card-details">
                <h2>${array[i].name}</h2>
                <h4>${array[i].location}</h4>
                <h4>${array[i].type}</h4>
              <div class="bedbath">
                <p>${array[i].bedrooms}<span><i class="fa-solid fa-bed"></i></span></p>
                <p>${array[i].bathrooms}<span><i class="fa-solid fa-bath"></i></span></p>
              </div>
              <p>Min Stay: ${array[i].minStay} Nights</p>
              <p>Max Stay: ${array[i].maxStay} Nights</p>
              <h3>Price: ${array[i].price} P/N</h3>
              <button class="more-info" data-id="${array[i].id}">More Info</button>
            </div>
          </div>
        `;
        $('#results').append(propertyCard);
      }

      $('.more-info').on('click', function () {
        const propertyId = $(this).data('id');
        populateSelectedOutput(propertyId);
        fullpage_api.moveTo(4, 1);
      });
    }
  }

  filterAndDisplayProperties();
  fullpage_api.reBuild();

  let selectedId = null;

  function onPropertySelected(id) {
    selectedId = id;
    populateSelectedOutput(selectedId);
    calculateTotalPrice(selectedId);
  }

  $(document).on('click', '.property-card', function () {
    const id = $(this).data('property-id');
    onPropertySelected(id);
  });

  function populateSelectedOutput(selectedId) {
    const outputSlide = $("#selectedCardOutputSlide");

    // More Info Section

    const slideOutputHtml = `
      <div class="grid-item-img">
        <img src="${properties[selectedId - 1].image}" alt="">
      </div>
      <div class="grid-item-description">
        <h4>Overview</h4> <br>
        <p>${properties[selectedId - 1].description}</p>
      </div>
      <div class="grid-item-house-details">
        <div class="card-details">
          <h2>${properties[selectedId - 1].name}</h2>
          <h4>${properties[selectedId - 1].location} - ${properties[selectedId - 1].type}</h4>
          <div class="bedbath">
            <p>${properties[selectedId - 1].bedrooms}<span><i class="fa-solid fa-bed"></i></span></p>
            <p>${properties[selectedId - 1].bathrooms}<span><i class="fa-solid fa-bath"></i></span></p>
          </div>
          <p>Min Stay: ${properties[selectedId - 1].minStay} Nights - Max Stay: ${properties[selectedId - 1].maxStay} Nights</p>
          <h3>Price: ${properties[selectedId - 1].price}</h3>
        </div>
      </div>
      <div class="grid-item-ammenities">
        <h4>Amenities</h4>
        <p>Wifi - <span><i class="fa-solid fa-wifi"></span></i></p>
        <p>Tv - <span><i class="fa-solid fa-tv"></i></span></i></p>
        <p>Pool - <span><i class="fa-solid fa-water-ladder"></i></span></i></p>
        <p>Gym - <span><i class="fa-solid fa-dumbbell"></i></span></i></p>
      </div>
      <div class="grid-item-meals">
        <h4>Meal Options</h4>
        <div class="checkbox-meal">
          <input type="checkbox" class="food-checkbox" id="breakfast" name="breakfast" value="breakfast" data-price="${properties[selectedId - 1].breakfast}">
          <label class="meals" for="breakfast">Breakfast P/D - ${properties[selectedId - 1].breakfast}</label>
        </div>
        <div class="checkbox-meal">
          <input type="checkbox" class="food-checkbox" id="lunch" name="lunch" value="lunch" data-price="${properties[selectedId - 1].lunch}">
          <label class="meals" for="lunch">Lunch P/D - ${properties[selectedId - 1].lunch}</label>
        </div>
        <div class="checkbox-meal">
          <input type="checkbox" class="food-checkbox" id="dinner" name="dinner" value="dinner" data-price="${properties[selectedId - 1].dinner}">
          <label class="meals" for="dinner">Dinner P/D - ${properties[selectedId - 1].dinner}</label>
        </div>
        <div class="checkbox-meal">
          <p id="mealPrice">Price Total Per Day: 0.00 </p>
        </div>
      </div>
      <div class="grid-item-map" id="map"></div>
      <div class="grid-item-things-to-do">
        <h4>Things to do</h4>
        <p>${properties[selectedId - 1].thing1}</p>
        <p>${properties[selectedId - 1].thing2}</p>
        <p>${properties[selectedId - 1].thing3}</p>
        <p>${properties[selectedId - 1].thing4}</p>
        <p>${properties[selectedId - 1].thing5}</p>
      </div>
      <div class="booking-price-container">
        <div class="total-price">
          <h2 id="totalCost">Total Cost:</h2>
        </div>
        <button class="book-now" id="calculate-total-button" data-id="${[selectedId]}">Calculate Total</button>
        <button class="book-now" id="book-now" data-id="${[selectedId]}">Book Now</button>
      </div>
    `;
    
    const longitude = properties[selectedId - 1].longitude;
    const latitude = properties[selectedId - 1].latitude;

    outputSlide.empty();
    outputSlide.append(slideOutputHtml);
    initaliseMap(longitude, latitude);

    $('#book-now').on('click', function () {
      const propertyId = $(this).data('id');
      displayBookingPage(propertyId);
      fullpage_api.moveTo(5, 1);
    });

    function displayBookingPage(propertyId) {
      const totalCostText = $('#totalCost').text();
      const bookingPageHtml = `
        <h2>${totalCostText}</h2>
        <p>Bank Details and confirmation
          have been sent to your email
          all instructions are contained.
          If you have any questions you
          may reply to the email.<br><br><span>Thanks for booking with North Island Stays</span></p>
      `;
      $('#booking-page').html(bookingPageHtml);
    }

    // MEALS 
    let mealCost = 0;
    $(document).on('click', '.food-checkbox', function () {
      const priceStr = $(this).data('price').replace('$', '');
      const price = parseFloat(priceStr);
      if ($(this).is(':checked')) {
        mealCost += price;
      } else {
        mealCost -= price;
      }
      $("#mealPrice").text("Price Total Per Day: $" + mealCost.toFixed(2));
    });

    // Function to calculate total price
    function calculateTotalPrice(selectedId) {
      const diffDays = calculateDays();
      const guests = parseInt($('#guests').val());
      const priceOfRoom = parseFloat(properties[selectedId - 1].price.replace('$', '')); // Remove dollar sign and convert to float

      let totalPrice = priceOfRoom * diffDays * guests;

      const breakfastChecked = $('#breakfast').is(':checked');
      const lunchChecked = $('#lunch').is(':checked');
      const dinnerChecked = $('#dinner').is(':checked');

      if (breakfastChecked) {
        const breakfastPrice = parseFloat($('#breakfast').data('price').replace('$', ''));
        totalPrice += breakfastPrice * diffDays * guests;
      }
      if (lunchChecked) {
        const lunchPrice = parseFloat($('#lunch').data('price').replace('$', ''));
        totalPrice += lunchPrice * diffDays * guests;
      }
      if (dinnerChecked) {
        const dinnerPrice = parseFloat($('#dinner').data('price').replace('$', ''));
        totalPrice += dinnerPrice * diffDays * guests;
      }

      $('#totalCost').text("Total Cost: $" + totalPrice.toFixed(2));
    }

    // Total price button click handler
    $(document).on('click', '#calculate-total-button', function (event) {
      let selectedId = $(event.target).attr('data-id');
      calculateTotalPrice(selectedId);
    });
  }
});