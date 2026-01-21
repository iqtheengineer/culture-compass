// Country data
const countries = [
    {
        name: "Japan",
        flag: "🇯🇵",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Japanese Yen (¥)",
        dos: ["Bow when greeting", "Remove shoes indoors", "Be punctual", "Speak quietly in public"],
        donts: ["Don't tip", "Don't blow your nose in public", "Don't wear shoes inside", "Don't stick chopsticks upright in rice"],
        food: "Sushi, Ramen, Tempura",
        apps: ["Google Translate", "Hyperdia", "Tabelog", "Suica", "PayPay", "LINE Pay", "Uber Eats", "Demae-can"],
        transport: "Shinkansen (bullet train), JR Pass, Metro, Taxis",
        info: "Punctuality is crucial. Respect quiet zones on trains. Cash is still widely used."
    },
    {
        name: "France",
        flag: "🇫🇷",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Greet with 'Bonjour'", "Dress elegantly", "Learn basic French", "Keep your voice down"],
        donts: ["Don't speak English first", "Don't rush meals", "Don't eat on the go", "Don't be overly friendly"],
        food: "Croissants, Coq au Vin, Crème Brûlée",
        apps: ["Citymapper", "TheFork", "SNCF Connect", "Bonjour RATP", "PayLib", "Lydia", "Uber Eats", "Deliveroo"],
        transport: "TGV trains, Metro, Vélib bikes, Taxis",
        info: "Learn basic French phrases. Lunch is 12-2pm, dinner after 8pm. Tipping is optional."
    },
    {
        name: "Italy",
        flag: "🇮🇹",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Dress stylishly", "Greet with kisses on cheeks", "Respect siesta time", "Enjoy long meals"],
        donts: ["Don't order cappuccino after 11am", "Don't rush", "Don't expect early dinners", "Don't tip heavily"],
        food: "Pizza, Pasta Carbonara, Gelato",
        apps: ["Trenitalia", "TheFork", "Google Maps", "TripAdvisor", "Satispay", "Nexi Pay", "Deliveroo", "Just Eat"],
        transport: "Trenitalia trains, Vaporetto (Venice), Scooters, Metro",
        info: "Cappuccino only in morning. Cover charge (coperto) is normal. Dinner starts late."
    },
    {
        name: "Spain",
        flag: "🇪🇸",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Greet with kisses", "Enjoy late dinners", "Be social and loud", "Try tapas hopping"],
        donts: ["Don't eat dinner before 9pm", "Don't expect shops open during siesta", "Don't tip heavily", "Don't rush meals"],
        food: "Paella, Tapas, Jamón Ibérico",
        apps: ["Renfe", "Cabify", "TheFork", "Google Maps", "Bizum", "PayPal", "Glovo", "Just Eat"],
        transport: "AVE trains, Metro, Buses, Cabify, BlaBlaCar",
        info: "Lunch 2-4pm, dinner after 9pm. Siesta is real. Learn basic Spanish phrases."
    },
    {
        name: "Germany",
        flag: "🇩🇪",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Be punctual", "Follow rules strictly", "Separate recycling", "Shake hands firmly"],
        donts: ["Don't be late", "Don't jaywalk", "Don't be loud in public", "Don't expect shops open on Sundays"],
        food: "Bratwurst, Schnitzel, Pretzels",
        apps: ["DB Navigator", "Google Maps", "Lieferando", "FlixBus", "PayPal", "Klarna", "Wolt", "Uber Eats"],
        transport: "ICE trains, U-Bahn, S-Bahn, Trams, FlixBus",
        info: "Punctuality is critical. Cash still common. Quiet Sundays (shops closed)."
    },
    {
        name: "United Kingdom",
        flag: "🇬🇧",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "British Pound (£)",
        dos: ["Queue properly", "Say 'please' and 'thank you'", "Enjoy pub culture", "Mind the gap"],
        donts: ["Don't skip the queue", "Don't be loud", "Don't ask personal questions", "Don't tip in pubs"],
        food: "Fish & Chips, Sunday Roast, Afternoon Tea",
        apps: ["Citymapper", "Trainline", "Uber", "Deliveroo", "Apple Pay", "Revolut", "Just Eat", "Uber Eats"],
        transport: "Tube (Underground), Buses, Trains, Uber, Black cabs",
        info: "Queue properly. Mind the gap. Tipping 10-12%. Weather is unpredictable!"
    },
    {
        name: "Greece",
        flag: "🇬🇷",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Accept hospitality", "Dress modestly at monasteries", "Enjoy late dinners", "Say 'Opa!'"],
        donts: ["Don't refuse food offers", "Don't wave with open palm", "Don't wear shoes in homes", "Don't rush meals"],
        food: "Moussaka, Souvlaki, Baklava",
        apps: ["Beat", "Google Maps", "Ferryhopper", "XE Currency", "Viva Wallet", "PayPal", "efood", "Wolt"],
        transport: "Ferries, Metro, Buses, Beat taxi, Scooters",
        info: "Siesta 2-5pm. Dress modestly at monasteries. Tap water safe in most areas."
    },
    {
        name: "Thailand",
        flag: "🇹🇭",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Thai Baht (฿)",
        dos: ["Wai greeting (hands together)", "Remove shoes at temples", "Dress modestly at temples", "Smile often"],
        donts: ["Don't touch anyone's head", "Don't point feet at people", "Don't disrespect Buddha images", "Don't touch monks"],
        food: "Pad Thai, Tom Yum, Green Curry",
        apps: ["Grab", "Google Translate", "XE Currency", "Agoda", "PromptPay", "TrueMoney Wallet", "foodpanda", "LINE MAN"],
        transport: "Tuk-tuks, BTS Skytrain, MRT, Songthaews, Grab",
        info: "Dress modestly at temples. Bargaining is common at markets. Smile often!"
    },
    {
        name: "South Korea",
        flag: "🇰🇷",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "South Korean Won (₩)",
        dos: ["Bow when greeting", "Remove shoes indoors", "Respect elders", "Use two hands when receiving"],
        donts: ["Don't write names in red", "Don't refuse soju", "Don't tip", "Don't blow your nose in public"],
        food: "Kimchi, Bibimbap, Korean BBQ",
        apps: ["Kakao T", "Naver Map", "Papago", "Kakao Metro", "Kakao Pay", "Toss", "Baemin", "Coupang Eats"],
        transport: "KTX trains, Metro, Kakao T, Buses, Taxis",
        info: "Fast WiFi everywhere. Age hierarchy matters. Tipping not expected."
    },
    {
        name: "India",
        flag: "🇮🇳",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Indian Rupee (₹)",
        dos: ["Namaste greeting", "Remove shoes at temples", "Dress modestly", "Use right hand for eating"],
        donts: ["Don't touch people's heads", "Don't use left hand for eating", "Don't show affection in public", "Don't disrespect cows"],
        food: "Biryani, Butter Chicken, Dosa",
        apps: ["Ola", "Zomato", "Google Maps", "Paytm", "PhonePe", "Google Pay", "Swiggy", "Dunzo"],
        transport: "Auto-rickshaws, Metro, Trains, Ola, Buses",
        info: "Dress modestly at religious sites. Bargain at markets. Spicy food is the norm!"
    },
    {
        name: "Vietnam",
        flag: "🇻🇳",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Vietnamese Dong (₫)",
        dos: ["Remove shoes indoors", "Bargain at markets", "Cross streets slowly", "Try street food"],
        donts: ["Don't touch people's heads", "Don't point feet at people", "Don't disrespect Ho Chi Minh", "Don't refuse food"],
        food: "Pho, Banh Mi, Spring Rolls",
        apps: ["Grab", "Google Maps", "Google Translate", "Zalo", "MoMo", "ZaloPay", "Baemin", "GrabFood"],
        transport: "Motorbikes, Grab, Cyclos, Buses, Trains",
        info: "Cross streets slowly and steadily. Street food is incredible. Cash preferred."
    },
    {
        name: "Turkey",
        flag: "🇹🇷",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Turkish Lira (₺)",
        dos: ["Remove shoes indoors", "Accept tea offers", "Dress modestly at mosques", "Bargain at bazaars"],
        donts: ["Don't refuse hospitality", "Don't show affection in public", "Don't disrespect Atatürk", "Don't point with finger"],
        food: "Kebab, Baklava, Turkish Delight",
        apps: ["BiTaksi", "Yemeksepeti", "Google Maps", "Moovit", "Papara", "iyzico", "Getir", "Trendyol Yemek"],
        transport: "Metro, Trams, Dolmuş, Ferries, BiTaksi",
        info: "Bargain at bazaars. Accept tea offers. Dress modestly at religious sites."
    },
    {
        name: "Mexico",
        flag: "🇲🇽",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop",
        region: "Americas",
        currency: "Mexican Peso ($)",
        dos: ["Greet warmly", "Try street food", "Learn basic Spanish", "Be patient with timing"],
        donts: ["Don't drink tap water", "Don't be overly punctual", "Don't refuse food offers", "Don't flash valuables"],
        food: "Tacos, Mole, Tamales",
        apps: ["Uber", "Google Maps", "iOverlander", "WhatsApp", "Mercado Pago", "OXXO Pay", "Uber Eats", "Rappi"],
        transport: "Metro, Colectivos, ADO buses, Uber, Taxis",
        info: "Learn Spanish basics. Tip 10-15%. Street food is amazing and safe in busy areas."
    },
    {
        name: "Brazil",
        flag: "🇧🇷",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
        region: "Americas",
        currency: "Brazilian Real (R$)",
        dos: ["Greet with kisses", "Be warm and friendly", "Enjoy beach culture", "Dance and celebrate"],
        donts: ["Don't speak Spanish (it's Portuguese!)", "Don't be overly punctual", "Don't skip Carnival", "Don't walk alone at night"],
        food: "Feijoada, Pão de Queijo, Açaí",
        apps: ["99", "iFood", "Google Maps", "Moovit", "Pix", "PicPay", "Rappi", "Uber Eats"],
        transport: "Metro, Buses, 99 Taxi, Uber, Mototaxi",
        info: "Learn Portuguese (not Spanish!). Safety awareness in cities. Carnival is epic!"
    },
    {
        name: "Argentina",
        flag: "🇦🇷",
        image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&h=300&fit=crop",
        region: "Americas",
        currency: "Argentine Peso ($)",
        dos: ["Greet with kiss on cheek", "Share mate", "Talk about football", "Enjoy late dinners"],
        donts: ["Don't mention Falklands/Malvinas", "Don't compare to Chile", "Don't be punctual", "Don't refuse mate"],
        food: "Asado, Empanadas, Dulce de Leche",
        apps: ["Uber", "Cabify", "Google Maps", "PedidosYa", "Mercado Pago", "Ualá", "Rappi", "Glovo"],
        transport: "Subte (metro), Colectivos, Uber, Cabify, Trains",
        info: "Dinner after 9pm. Tipping 10%. Learn tango basics. Bring USD for better rates."
    },
    {
        name: "Peru",
        flag: "🇵🇪",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
        region: "Americas",
        currency: "Peruvian Sol (S/)",
        dos: ["Greet warmly", "Respect indigenous culture", "Acclimatize slowly", "Try local cuisine"],
        donts: ["Don't rush at high altitude", "Don't drink tap water", "Don't disrespect ancient sites", "Don't skip coca tea"],
        food: "Ceviche, Lomo Saltado, Pisco Sour",
        apps: ["Uber", "Beat", "Google Maps", "iOverlander", "Yape", "Plin", "Rappi", "PedidosYa"],
        transport: "Combis, Buses, Uber, Beat, Trains to Machu Picchu",
        info: "Acclimatize to altitude slowly. Learn Spanish. Tipping 10%. Amazing cuisine!"
    },
    {
        name: "Canada",
        flag: "🇨🇦",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=300&fit=crop",
        region: "Americas",
        currency: "Canadian Dollar ($)",
        dos: ["Be polite", "Say 'sorry' often", "Respect multiculturalism", "Tip 15-20%"],
        donts: ["Don't compare to USA", "Don't ignore French in Quebec", "Don't underestimate winter", "Don't litter in nature"],
        food: "Poutine, Maple Syrup, Butter Tarts",
        apps: ["Uber", "Transit", "Parks Canada", "Weather Network", "Interac e-Transfer", "Apple Pay", "Uber Eats", "DoorDash"],
        transport: "Subway, Streetcars, Buses, Uber, VIA Rail",
        info: "Tipping 15-20%. Bilingual (English/French). Prepare for cold winters!"
    },
    {
        name: "Egypt",
        flag: "🇪🇬",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&h=300&fit=crop",
        region: "Africa",
        currency: "Egyptian Pound (E£)",
        dos: ["Dress modestly", "Use right hand for eating", "Remove shoes at mosques", "Bargain at markets"],
        donts: ["Don't use left hand for eating", "Don't show affection in public", "Don't photograph without asking", "Don't refuse tea"],
        food: "Koshari, Ful Medames, Shawarma",
        apps: ["Uber", "Careem", "Google Translate", "XE Currency", "Fawry", "Vodafone Cash", "Talabat", "Elmenus"],
        transport: "Cairo Metro, Uber, Careem, Nile ferries, Buses",
        info: "Bargaining expected. Respect prayer times. Stay hydrated. Tipping is customary."
    },
    {
        name: "Morocco",
        flag: "🇲🇦",
        image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&h=300&fit=crop",
        region: "Africa",
        currency: "Moroccan Dirham (MAD)",
        dos: ["Greet with 'Salam'", "Dress modestly", "Bargain at souks", "Accept mint tea offers"],
        donts: ["Don't eat with left hand", "Don't refuse hospitality", "Don't photograph people without asking", "Don't show affection in public"],
        food: "Tagine, Couscous, Mint Tea",
        apps: ["Careem", "Google Translate", "Maps.me", "XE Currency", "CIB Mobile", "Fawry", "Glovo", "Jumia Food"],
        transport: "Trains (ONCF), Grand taxis, Petit taxis, Buses",
        info: "Bargaining is expected. Respect Ramadan. Mint tea is a social ritual."
    },
    {
        name: "Australia",
        flag: "🇦🇺",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop",
        region: "Oceania",
        currency: "Australian Dollar ($)",
        dos: ["Be casual and friendly", "Use sun protection", "Swim between flags", "Say 'G'day'"],
        donts: ["Don't take wildlife lightly", "Don't litter", "Don't skip sunscreen", "Don't be too formal"],
        food: "Meat Pies, Vegemite, Lamingtons",
        apps: ["Uber", "Opal Travel", "BOM Weather", "TripView", "CommBank", "PayPal", "Uber Eats", "Menulog"],
        transport: "Trains, Trams, Ferries, Buses, Uber",
        info: "Sun protection essential. Tipping not mandatory. Watch for wildlife!"
    },
    {
        name: "United States",
        flag: "🇺🇸",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop",
        region: "Americas",
        currency: "US Dollar ($)",
        dos: ["Tip 15-20%", "Be friendly and outgoing", "Stand for national anthem", "Respect personal space"],
        donts: ["Don't skip tipping", "Don't criticize America", "Don't be late", "Don't assume free healthcare"],
        food: "Burgers, BBQ, Apple Pie",
        apps: ["Uber", "Lyft", "Google Maps", "Yelp", "Venmo", "Cash App", "DoorDash", "Grubhub"],
        transport: "Cars (rent), Uber, Lyft, Buses, Amtrak trains",
        info: "Tipping is mandatory. Distances are huge. Car rental essential in most areas."
    },
    {
        name: "China",
        flag: "🇨🇳",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Chinese Yuan (¥)",
        dos: ["Use WeChat for everything", "Bring cash", "Learn basic Mandarin", "Respect elders"],
        donts: ["Don't mention politics", "Don't tip", "Don't expect Google/Facebook", "Don't stick chopsticks upright"],
        food: "Peking Duck, Dim Sum, Hot Pot",
        apps: ["WeChat", "Alipay", "Didi", "Baidu Maps", "Meituan", "Eleme"],
        transport: "High-speed trains, Metro, Didi, Buses",
        info: "VPN needed for Western apps. WeChat Pay essential. Cash still useful."
    },
    {
        name: "Portugal",
        flag: "🇵🇹",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Try pastéis de nata", "Learn basic Portuguese", "Enjoy fado music", "Be relaxed"],
        donts: ["Don't speak Spanish", "Don't rush", "Don't skip small towns", "Don't expect punctuality"],
        food: "Bacalhau, Pastéis de Nata, Francesinha",
        apps: ["Uber", "Bolt", "CP (trains)", "Google Maps", "MB Way", "Glovo", "Uber Eats"],
        transport: "Trams, Metro, Trains, Uber, Bolt",
        info: "Very affordable. English widely spoken. Great wine. Safe for travelers."
    },
    {
        name: "Netherlands",
        flag: "🇳🇱",
        image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Bike everywhere", "Be direct", "Split bills", "Learn basic Dutch"],
        donts: ["Don't walk in bike lanes", "Don't be late", "Don't expect small talk", "Don't call it Holland"],
        food: "Stroopwafels, Bitterballen, Herring",
        apps: ["9292", "NS (trains)", "Uber", "Thuisbezorgd", "Tikkie", "Deliveroo"],
        transport: "Bikes, Trams, Trains, Metro, Buses",
        info: "Bike culture is serious. English widely spoken. Very organized and punctual."
    },
    {
        name: "Switzerland",
        flag: "🇨🇭",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Swiss Franc (CHF)",
        dos: ["Be punctual", "Recycle properly", "Buy Swiss Pass", "Respect quiet hours"],
        donts: ["Don't be loud", "Don't litter", "Don't expect cheap prices", "Don't jaywalk"],
        food: "Fondue, Raclette, Chocolate",
        apps: ["SBB Mobile", "Uber", "Twint", "Google Maps", "Uber Eats", "Eat.ch"],
        transport: "Trains (SBB), Trams, Buses, Cable cars",
        info: "Very expensive. Trains are perfect. Four languages spoken. Stunning scenery."
    },
    {
        name: "Austria",
        flag: "🇦🇹",
        image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Greet with 'Grüß Gott'", "Try coffee culture", "Be punctual", "Dress well"],
        donts: ["Don't confuse with Australia", "Don't be loud", "Don't skip museums", "Don't rush meals"],
        food: "Schnitzel, Sachertorte, Apfelstrudel",
        apps: ["ÖBB (trains)", "Uber", "Google Maps", "Lieferando", "Mjam", "Wolt"],
        transport: "Trains, Trams, U-Bahn, Buses",
        info: "Classical music capital. Coffee culture is serious. Beautiful Alps. Safe and clean."
    },
    {
        name: "Czech Republic",
        flag: "🇨🇿",
        image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Czech Koruna (Kč)",
        dos: ["Try local beer", "Learn 'Dobrý den'", "Use public transport", "Visit castles"],
        donts: ["Don't use euros everywhere", "Don't skip small towns", "Don't expect English everywhere", "Don't overpay"],
        food: "Goulash, Trdelník, Svíčková",
        apps: ["PID Lítačka", "Uber", "Bolt", "Google Maps", "Wolt", "Dáme jídlo"],
        transport: "Trams, Metro, Buses, Trains",
        info: "Very affordable. Amazing beer. Beautiful Prague. Cash preferred in small places."
    },
    {
        name: "Poland",
        flag: "🇵🇱",
        image: "https://images.unsplash.com/photo-1529403386-f2ea0c8eb31e?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Polish Złoty (zł)",
        dos: ["Try pierogi", "Learn basic Polish", "Visit historical sites", "Be respectful"],
        donts: ["Don't joke about WWII", "Don't expect Western prices", "Don't skip Krakow", "Don't be loud in churches"],
        food: "Pierogi, Bigos, Żurek",
        apps: ["Uber", "Bolt", "Jakdojade", "Google Maps", "BLIK", "Pyszne.pl", "Glovo"],
        transport: "Trams, Buses, Trains, Uber, Bolt",
        info: "Very affordable. Rich history. Friendly people. English in cities."
    },
    {
        name: "Hungary",
        flag: "🇭🇺",
        image: "https://images.unsplash.com/photo-1541963058-d9f0ff144a7e?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Hungarian Forint (Ft)",
        dos: ["Try thermal baths", "Learn 'Szia'", "Enjoy ruin bars", "Taste goulash"],
        donts: ["Don't clink beer glasses", "Don't expect English everywhere", "Don't skip thermal baths", "Don't overpay"],
        food: "Goulash, Lángos, Chimney Cake",
        apps: ["BKK Futár", "Bolt", "Google Maps", "Wolt", "Foodpanda", "Simple"],
        transport: "Metro, Trams, Buses, Bolt",
        info: "Very affordable. Beautiful Budapest. Thermal baths are amazing. Unique language."
    },
    {
        name: "Croatia",
        flag: "🇭🇷",
        image: "https://images.unsplash.com/photo-1555990538-c3d7dbc0e23c?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Visit islands", "Try local wine", "Swim in clear waters", "Be respectful"],
        donts: ["Don't skip Dubrovnik", "Don't expect cheap prices", "Don't litter", "Don't be loud"],
        food: "Ćevapi, Black Risotto, Peka",
        apps: ["Uber", "Bolt", "Google Maps", "Glovo", "Wolt", "Pauza"],
        transport: "Buses, Ferries, Uber, Bolt, Rental cars",
        info: "Beautiful coastline. Game of Thrones locations. Summer is crowded. Safe."
    },
    {
        name: "Ireland",
        flag: "🇮🇪",
        image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Visit pubs", "Try Guinness", "Enjoy live music", "Be friendly"],
        donts: ["Don't confuse with UK", "Don't skip countryside", "Don't expect good weather", "Don't be stingy in pubs"],
        food: "Irish Stew, Soda Bread, Boxty",
        apps: ["Uber", "Free Now", "TFI Live", "Google Maps", "Revolut", "Deliveroo", "Just Eat"],
        transport: "Buses, Trains, Uber, Free Now",
        info: "Friendly people. Rainy weather. Great pubs. English spoken. Expensive."
    },
    {
        name: "Iceland",
        flag: "🇮🇸",
        image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Icelandic Króna (kr)",
        dos: ["Rent a car", "Visit Blue Lagoon", "Chase Northern Lights", "Respect nature"],
        donts: ["Don't go off-trail", "Don't expect cheap prices", "Don't skip Golden Circle", "Don't litter"],
        food: "Lamb, Skyr, Hot Dogs",
        apps: ["Google Maps", "Vedur (weather)", "SafeTravel", "Wolt", "AHA"],
        transport: "Rental cars, Buses (limited)",
        info: "Very expensive. Stunning nature. Rent a car essential. Weather unpredictable."
    },
    {
        name: "Norway",
        flag: "🇳🇴",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Norwegian Krone (kr)",
        dos: ["Visit fjords", "Try brown cheese", "Respect nature", "Use public transport"],
        donts: ["Don't expect cheap prices", "Don't litter", "Don't be loud", "Don't skip Bergen"],
        food: "Salmon, Brown Cheese, Brunost",
        apps: ["Ruter", "Vy (trains)", "Uber", "Google Maps", "Vipps", "Wolt", "Foodora"],
        transport: "Trains, Buses, Ferries, Trams",
        info: "Very expensive. Stunning fjords. Great public transport. English widely spoken."
    },
    {
        name: "Sweden",
        flag: "🇸🇪",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Swedish Krona (kr)",
        dos: ["Try fika", "Be punctual", "Respect personal space", "Recycle properly"],
        donts: ["Don't be loud", "Don't expect small talk", "Don't use cash", "Don't skip Stockholm"],
        food: "Meatballs, Cinnamon Buns, Gravlax",
        apps: ["SL (Stockholm)", "Uber", "Bolt", "Google Maps", "Swish", "Wolt", "Foodora"],
        transport: "Tunnelbana (metro), Buses, Trains, Bikes",
        info: "Cashless society. Fika culture. Design capital. English widely spoken."
    },
    {
        name: "Denmark",
        flag: "🇩🇰",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Danish Krone (kr)",
        dos: ["Bike everywhere", "Try hygge", "Be punctual", "Enjoy pastries"],
        donts: ["Don't walk in bike lanes", "Don't be loud", "Don't expect cheap prices", "Don't skip Tivoli"],
        food: "Smørrebrød, Danish Pastries, Frikadeller",
        apps: ["Rejseplanen", "Uber", "Google Maps", "MobilePay", "Wolt", "Just Eat"],
        transport: "Bikes, Metro, Buses, Trains",
        info: "Bike culture. Expensive. Hygge lifestyle. English widely spoken. Very safe."
    },
    {
        name: "Belgium",
        flag: "🇧🇪",
        image: "https://images.unsplash.com/photo-1559564484-e48bf5f6b6d3?w=400&h=300&fit=crop",
        region: "Europe",
        currency: "Euro (€)",
        dos: ["Try chocolate and beer", "Learn French/Dutch", "Visit both regions", "Enjoy waffles"],
        donts: ["Don't speak only English", "Don't skip Bruges", "Don't rush", "Don't expect punctuality"],
        food: "Waffles, Chocolate, Frites",
        apps: ["SNCB (trains)", "Uber", "Google Maps", "Payconiq", "Deliveroo", "Uber Eats"],
        transport: "Trains, Trams, Buses, Uber",
        info: "Bilingual country. Amazing beer and chocolate. Small but diverse. Central Europe."
    },
    {
        name: "New Zealand",
        flag: "🇳🇿",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop",
        region: "Oceania",
        currency: "New Zealand Dollar ($)",
        dos: ["Rent a car", "Try adventure sports", "Respect Māori culture", "Enjoy nature"],
        donts: ["Don't bring food in", "Don't litter", "Don't rush", "Don't skip South Island"],
        food: "Pavlova, Hangi, Fish & Chips",
        apps: ["Google Maps", "Uber", "MetService", "CamperMate", "Uber Eats", "Menulog"],
        transport: "Rental cars, Buses, Domestic flights",
        info: "Stunning nature. Adventure capital. Rent a car essential. Friendly people."
    },
    {
        name: "Singapore",
        flag: "🇸🇬",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Singapore Dollar ($)",
        dos: ["Use public transport", "Try hawker centers", "Follow rules strictly", "Stay hydrated"],
        donts: ["Don't chew gum", "Don't litter", "Don't jaywalk", "Don't eat/drink on MRT"],
        food: "Chicken Rice, Laksa, Chili Crab",
        apps: ["Grab", "Google Maps", "SimplyGo", "PayNow", "GrabFood", "Deliveroo"],
        transport: "MRT, Buses, Grab, Taxis",
        info: "Very clean and safe. Strict laws. Hot and humid. English widely spoken."
    },
    {
        name: "Malaysia",
        flag: "🇲🇾",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop",
        region: "Asia",
        currency: "Malaysian Ringgit (RM)",
        dos: ["Try street food", "Visit both KL and islands", "Respect diverse cultures", "Bargain at markets"],
        donts: ["Don't show affection in public", "Don't use left hand", "Don't disrespect religion", "Don't drink tap water"],
        food: "Nasi Lemak, Satay, Roti Canai",
        apps: ["Grab", "Google Maps", "Touch 'n Go", "Waze", "GrabFood", "foodpanda"],
        transport: "Grab, Buses, Trains, Ferries",
        info: "Very affordable. Diverse culture. Great food. English widely spoken."
    }
];

// App State
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
    name: 'Traveler',
    avatar: '🧳',
    interests: [],
    location: null
};

let cardStatus = JSON.parse(localStorage.getItem('cardStatus')) || {};
let currentView = 'map';
let selectedAvatar = userProfile.avatar;
let selectedInterests = userProfile.interests;

// Initialize App
function init() {
    // Check if onboarding is complete
    const onboardingComplete = localStorage.getItem('onboardingComplete');
    
    if (onboardingComplete) {
        showApp();
    } else {
        showScreen('onboardingScreen');
    }
    
    // Populate location dropdown
    populateLocationDropdown();
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Onboarding Flow
function showLocationPrompt() {
    showScreen('locationScreen');
}

function populateLocationDropdown() {
    const select = document.getElementById('manualLocation');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.textContent = `${country.flag} ${country.name}`;
        select.appendChild(option);
    });
}

function detectLocation() {
    // Simulate location detection
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    userProfile.location = randomCountry.name;
    
    // Unlock first card
    cardStatus[randomCountry.name] = 'bronze';
    saveData();
    
    showNotification(`🎉 ${randomCountry.name} card unlocked!`);
    setTimeout(() => showProfileSetup(), 1500);
}

function showProfileSetup() {
    const manualLocation = document.getElementById('manualLocation').value;
    if (manualLocation && !userProfile.location) {
        userProfile.location = manualLocation;
        cardStatus[manualLocation] = 'bronze';
        saveData();
    }
    showScreen('profileScreen');
}

function selectAvatar(avatar) {
    selectedAvatar = avatar;
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

function toggleInterest(btn) {
    const interest = btn.dataset.interest;
    btn.classList.toggle('selected');
    
    if (selectedInterests.includes(interest)) {
        selectedInterests = selectedInterests.filter(i => i !== interest);
    } else {
        selectedInterests.push(interest);
    }
}

function completeOnboarding() {
    const name = document.getElementById('userName').value || 'Traveler';
    
    userProfile.name = name;
    userProfile.avatar = selectedAvatar;
    userProfile.interests = selectedInterests;
    
    localStorage.setItem('onboardingComplete', 'true');
    saveData();
    
    showApp();
}

// Main App
function showApp() {
    showScreen('appContainer');
    updateUserDisplay();
    updateStats();
    renderWorldMap();
    renderExploreGrid();
    renderCollectionGrid();
}

function updateUserDisplay() {
    document.getElementById('userAvatar').textContent = userProfile.avatar;
    document.getElementById('userNameDisplay').textContent = userProfile.name;
    document.getElementById('profileAvatarLarge').textContent = userProfile.avatar;
    document.getElementById('profileNameLarge').textContent = userProfile.name;
}

function updateStats() {
    const bronze = Object.values(cardStatus).filter(s => s === 'bronze').length;
    const silver = Object.values(cardStatus).filter(s => s === 'silver').length;
    const gold = Object.values(cardStatus).filter(s => s === 'gold').length;
    const total = Object.keys(cardStatus).length;
    
    document.getElementById('bronzeCount').textContent = bronze;
    document.getElementById('silverCount').textContent = silver;
    document.getElementById('goldCount').textContent = gold;
    document.getElementById('progressCount').textContent = `${total}/20`;
    
    document.getElementById('visitedCount').textContent = gold;
    document.getElementById('downloadedCount').textContent = silver;
    document.getElementById('savedCount').textContent = bronze;
    
    const percentage = Math.round((total / countries.length) * 100);
    document.getElementById('percentageCollected').textContent = `${percentage}%`;
}

// World Map
function renderWorldMap() {
    const mapContainer = document.getElementById('worldMap');
    mapContainer.innerHTML = '';
    
    countries.forEach(country => {
        const status = cardStatus[country.name];
        const isLocked = !status;
        
        const countryDiv = document.createElement('div');
        countryDiv.className = `map-country ${isLocked ? 'locked' : ''}`;
        
        if (!isLocked) {
            countryDiv.onclick = () => openCardModal(country);
        }
        
        const statusEmoji = status === 'gold' ? '🥇' : status === 'silver' ? '🥈' : status === 'bronze' ? '🥉' : '';
        
        countryDiv.innerHTML = `
            ${statusEmoji ? `<div class="country-status-badge">${statusEmoji}</div>` : ''}
            <div class="country-flag-map">${country.flag}</div>
            <div class="country-name-map">${country.name}</div>
            <div style="font-size: 0.85rem; color: rgba(255,255,255,0.8); margin-top: 5px;">${country.region}</div>
            ${isLocked ? '<div style="font-size: 0.75rem; color: rgba(255,255,255,0.6); margin-top: 5px;">🔒 Locked</div>' : ''}
        `;
        
        mapContainer.appendChild(countryDiv);
    });
}

// View Switching
function switchView(view) {
    currentView = view;
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.nav-btn').classList.add('active');
    
    // Update view content
    document.querySelectorAll('.view-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${view}View`).classList.add('active');
}

// Explore View
function renderExploreGrid() {
    const grid = document.getElementById('exploreGrid');
    grid.innerHTML = '';
    
    countries.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
    });
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.onclick = () => openCardModal(country);
    
    const status = cardStatus[country.name] || 'locked';
    const badgeClass = status === 'gold' ? 'badge-gold' : status === 'silver' ? 'badge-silver' : 'badge-bronze';
    const badgeText = status === 'gold' ? '🥇 Visited' : status === 'silver' ? '🥈 Downloaded' : status === 'bronze' ? '🥉 Saved' : '';
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${country.image}')">
            ${status !== 'locked' ? `<div class="card-badge ${badgeClass}">${badgeText}</div>` : ''}
        </div>
        <div class="card-info">
            <div class="card-country-name">${country.flag} ${country.name}</div>
            <div class="card-region">${country.region}</div>
        </div>
    `;
    
    return card;
}

function filterRegion(region) {
    document.querySelectorAll('.region-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const grid = document.getElementById('exploreGrid');
    grid.innerHTML = '';
    
    const filtered = region === 'all' ? countries : countries.filter(c => c.region === region);
    filtered.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
    });
}

// Collection View
function renderCollectionGrid() {
    const grid = document.getElementById('collectionGrid');
    grid.innerHTML = '';
    
    const collected = countries.filter(c => cardStatus[c.name]);
    
    if (collected.length === 0) {
        grid.innerHTML = '<p style="padding: 40px; text-align: center; color: #999;">No cards collected yet. Start exploring!</p>';
        return;
    }
    
    collected.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
    });
}

function filterCollection(filter) {
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const grid = document.getElementById('collectionGrid');
    grid.innerHTML = '';
    
    let filtered = countries.filter(c => cardStatus[c.name]);
    
    if (filter !== 'all') {
        const statusMap = { bronze: 'bronze', silver: 'silver', gold: 'gold' };
        filtered = filtered.filter(c => cardStatus[c.name] === statusMap[filter]);
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="padding: 40px; text-align: center; color: #999;">No cards in this category.</p>';
        return;
    }
    
    filtered.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
    });
}

// Card Modal
let currentCard = null;
let isFlipped = false;

function openCardModal(country) {
    currentCard = country;
    isFlipped = false;
    
    const modal = document.getElementById('cardModal');
    modal.classList.add('active');
    
    renderCardFront();
    renderCardBack();
}

function closeCardModal() {
    document.getElementById('cardModal').classList.remove('active');
    currentCard = null;
}

function flipCard() {
    isFlipped = !isFlipped;
    
    document.getElementById('cardFront').classList.toggle('active');
    document.getElementById('cardBack').classList.toggle('active');
}

function renderCardFront() {
    const content = document.getElementById('cardFrontContent');
    const status = cardStatus[currentCard.name] || 'locked';
    
    content.innerHTML = `
        <div class="card-image" style="background-image: url('${currentCard.image}'); height: 300px; border-radius: 15px; position: relative;">
            <div style="position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(0,0,0,0.7); padding: 15px; border-radius: 10px; color: white;">
                <h2 style="font-size: 2rem; margin-bottom: 5px;">${currentCard.flag} ${currentCard.name}</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">${currentCard.region}</p>
            </div>
        </div>
        <div style="padding: 20px 0;">
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button onclick="setCardStatus('bronze')" style="flex: 1; padding: 12px; border: 2px solid #cd7f32; background: ${status === 'bronze' ? '#cd7f32' : 'white'}; color: ${status === 'bronze' ? 'white' : '#cd7f32'}; border-radius: 10px; font-weight: 700; cursor: pointer;">
                    🥉 Save
                </button>
                <button onclick="setCardStatus('silver')" style="flex: 1; padding: 12px; border: 2px solid #c0c0c0; background: ${status === 'silver' ? '#c0c0c0' : 'white'}; color: ${status === 'silver' ? 'white' : '#666'}; border-radius: 10px; font-weight: 700; cursor: pointer;">
                    🥈 Download
                </button>
                <button onclick="setCardStatus('gold')" style="flex: 1; padding: 12px; border: 2px solid #ffd700; background: ${status === 'gold' ? '#ffd700' : 'white'}; color: #333; border-radius: 10px; font-weight: 700; cursor: pointer;">
                    🥇 Visited
                </button>
            </div>
        </div>
    `;
}

function renderCardBack() {
    const content = document.getElementById('cardBackContent');
    
    content.innerHTML = `
        <h2 style="font-size: 1.8rem; margin-bottom: 20px; color: #333;">${currentCard.flag} ${currentCard.name}</h2>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">💰 Currency</h3>
            <p style="color: #666;">${currentCard.currency}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">✅ Do's</h3>
            <ul style="list-style: none; padding: 0;">
                ${currentCard.dos.map(item => `<li style="padding: 8px 0; color: #666;">• ${item}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">❌ Don'ts</h3>
            <ul style="list-style: none; padding: 0;">
                ${currentCard.donts.map(item => `<li style="padding: 8px 0; color: #666;">• ${item}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">🍽️ Must-Try Food</h3>
            <p style="color: #666;">${currentCard.food}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">🚇 Transportation</h3>
            <p style="color: #666;">${currentCard.transport}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">📱 Essential Apps</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${currentCard.apps.map(app => `<span style="background: #667eea; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.85rem;">${app}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">ℹ️ Important Info</h3>
            <p style="color: #666;">${currentCard.info}</p>
        </div>
    `;
}

function setCardStatus(status) {
    cardStatus[currentCard.name] = status;
    saveData();
    updateStats();
    renderWorldMap();
    renderExploreGrid();
    renderCollectionGrid();
    renderCardFront();
    
    const statusText = status === 'gold' ? 'Visited' : status === 'silver' ? 'Downloaded' : 'Saved';
    showNotification(`${currentCard.flag} ${currentCard.name} marked as ${statusText}!`);
}

// Settings
function toggleDarkMode() {
    showNotification('Dark mode coming soon!');
}

function showOfflineManager() {
    showNotification('Offline manager coming soon!');
}

function resetApp() {
    if (confirm('Are you sure you want to reset all progress?')) {
        localStorage.clear();
        location.reload();
    }
}

// Utilities
function saveData() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    localStorage.setItem('cardStatus', JSON.stringify(cardStatus));
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #667eea;
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        font-weight: 700;
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Start App
init();
