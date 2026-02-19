const countries = [
{
        name: "Japan",
        flag: "🇯🇵",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
        region: "Asia",
        language: "Japanese",
        currency: "Japanese Yen (¥)",
        riskLevel: "🔴 High Nuance",
        briefingTime: "5 Minutes",
        culturalSnapshot: {
            communicationStyle: "Indirect, high-context",
            punctuality: "Extremely important",
            personalSpace: "Moderate but orderly",
            collectivism: "Strong group harmony culture",
            englishProficiency: "Moderate in cities, limited elsewhere"
        },
        dos: ["Be on time — or early. Even 5 minutes late is noticeable", "Bow slightly when greeting (especially in formal settings)", "Keep your voice low in public spaces", "Carry cash — many small places don't accept cards", "Follow queue lines strictly. Order matters"],
        donts: ["Don't take loud phone calls on trains", "Don't tip — it can cause confusion", "Don't stick chopsticks upright in rice (funeral symbolism)", "Don't blow your nose loudly in public", "Don't touch people casually (low physical contact culture)"],
        socialEtiquette: {
            dining: ["Slurping noodles = normal", "Say 'Itadakimasu' before eating (optional but appreciated)", "Don't pass food chopstick-to-chopstick"],
            business: ["Exchange business cards respectfully (use two hands)", "Read the card before putting it away"],
            publicBehavior: ["Silence on public transport", "No eating while walking in most cities"]
        },
        moneyTips: {
            tipping: "Not expected",
            cardUsage: "Increasing, but cash still common",
            transitCards: "Suica / Pasmo recommended"
        },
        food: "Sushi, Ramen, Tempura",
        apps: ["LINE (Messaging)", "Google Maps", "Japan Transit Planner", "Tabelog (Food Reviews)"],
        transport: "Public transport: World-class. Trains: Primary mode. Taxis: Expensive but safe. Ride-sharing: Limited",
        scenarios: [
            {
                situation: "You're on a train. Your phone rings.",
                options: ["Take the call quietly", "Ignore it", "Step off at next stop"],
                correct: 2,
                explanation: "Taking calls on trains is considered disruptive. Step off at the next stop if urgent."
            },
            {
                situation: "You're invited to someone's home.",
                options: ["Wear shoes inside", "Bring a small gift", "Arrive 20 minutes late"],
                correct: 1,
                explanation: "Always bring a small gift (omiyage). Remove shoes at entrance. Be punctual."
            },
            {
                situation: "You finish dinner at a restaurant.",
                options: ["Leave 15% tip", "Leave exact change", "Leave extra cash on table"],
                correct: 1,
                explanation: "Tipping is not customary in Japan and can cause confusion."
            }
        ],
        info: "Punctuality is crucial. Respect quiet zones on trains. Cash is still widely used."
    },
    {
        name: "Germany",
        flag: "🇩🇪",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
        region: "Europe",
        language: "German",
        currency: "Euro (€)",
        riskLevel: "🟢 Low Risk",
        briefingTime: "3 Minutes",
        culturalSnapshot: {
            communicationStyle: "Direct, straightforward",
            punctuality: "Absolutely critical",
            personalSpace: "High value on personal space",
            collectivism: "Individualistic with strong rule-following",
            englishProficiency: "Very good, especially in cities"
        },
        dos: ["Be exactly on time (5 min early is ideal)", "Follow all rules and regulations strictly", "Separate recycling properly (very important)", "Shake hands firmly when greeting", "Be direct and honest in communication"],
        donts: ["Don't be late — even 2 minutes matters", "Don't jaywalk (you'll get stares or fines)", "Don't be loud in public spaces", "Don't expect shops open on Sundays", "Don't make jokes about WWII"],
        socialEtiquette: {
            dining: ["Wait for 'Guten Appetit' before eating", "Keep hands visible on table (not in lap)", "Finish your plate — wasting food is frowned upon"],
            business: ["Punctuality is non-negotiable", "Use titles (Herr/Frau + last name)", "Meetings are formal and structured"],
            publicBehavior: ["Quiet Sundays are sacred (no loud activities)", "Respect bike lanes — don't walk in them", "Queue properly and wait your turn"]
        },
        moneyTips: {
            tipping: "Round up or 5-10% (say total when paying)",
            cardUsage: "Cash still very common, especially small shops",
            transitCards: "DB Navigator app for trains, local transit cards"
        },
        food: "Bratwurst, Schnitzel, Pretzels, Sauerkraut",
        apps: ["DB Navigator (Trains)", "Google Maps", "Lieferando (Food)", "PayPal"],
        transport: "ICE trains: Fast and punctual. U-Bahn/S-Bahn: Efficient metro. Trams: Common in cities. FlixBus: Cheap intercity travel",
        scenarios: [
            {
                situation: "You're 5 minutes late to a meeting.",
                options: ["Arrive casually", "Call ahead and apologize", "Don't mention it"],
                correct: 1,
                explanation: "Punctuality is sacred in Germany. Always call ahead if you'll be even slightly late and apologize."
            },
            {
                situation: "It's Sunday and you want to mow your lawn.",
                options: ["Go ahead, it's your property", "Wait until Monday", "Do it quietly"],
                correct: 1,
                explanation: "Sundays are 'Ruhetag' (quiet day). No loud activities like lawn mowing are allowed. Wait until Monday."
            },
            {
                situation: "The pedestrian light is red but no cars are coming.",
                options: ["Cross the street", "Wait for green light", "Look around first"],
                correct: 1,
                explanation: "Germans wait for the green light even with no traffic. Jaywalking is frowned upon and can result in fines."
            }
        ],
        info: "Punctuality is critical. Cash still common. Quiet Sundays (shops closed). Rules are taken very seriously."
    },
,
    {
        name: "Thailand",
        flag: "🇹🇭",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop",
        region: "Asia",
        language: "Thai",
        currency: "Thai Baht (฿)",
        riskLevel: "🟡 Moderate",
        briefingTime: "4 Minutes",
        culturalSnapshot: {
            communicationStyle: "Indirect, non-confrontational",
            punctuality: "Flexible, 'Thai time' is common",
            personalSpace: "Moderate, friendly culture",
            collectivism: "Strong respect for hierarchy",
            englishProficiency: "Good in tourist areas, limited elsewhere"
        },
        dos: ["Wai greeting (hands together) when appropriate", "Remove shoes before entering temples and homes", "Dress modestly at temples (cover shoulders and knees)", "Smile often — it's the 'Land of Smiles'", "Show respect to the Royal Family"],
        donts: ["Don't touch anyone's head (most sacred body part)", "Don't point feet at people or Buddha images", "Don't disrespect Buddha images or monks", "Don't touch monks if you're a woman", "Don't raise your voice or show anger publicly"],
        socialEtiquette: {
            dining: ["Eat with fork and spoon (fork pushes food onto spoon)", "Sharing dishes is common", "Don't finish all food (implies host didn't provide enough)"],
            business: ["Business cards exchanged with both hands", "Hierarchy is very important", "Avoid confrontation or saying 'no' directly"],
            publicBehavior: ["Public displays of affection are frowned upon", "Feet are considered dirty, head is sacred", "Always be calm and smiling"]
        },
        moneyTips: {
            tipping: "Not required but appreciated (20-50 baht)",
            cardUsage: "Cash preferred, cards accepted in cities",
            transitCards: "Rabbit Card for BTS, stored value cards"
        },
        food: "Pad Thai, Tom Yum, Green Curry, Mango Sticky Rice",
        apps: ["Grab (Transport & Food)", "Google Translate", "Agoda (Hotels)", "PromptPay (Payments)"],
        transport: "Tuk-tuks: Negotiate price first. BTS Skytrain & MRT: Modern and efficient. Grab: Reliable ride-hailing. Songthaews: Shared pickup trucks",
        scenarios: [
            {
                situation: "A monk sits next to you on the bus.",
                options: ["Offer your seat", "Stay seated and smile", "Move to another seat"],
                correct: 0,
                explanation: "Always offer your seat to monks as a sign of respect. They hold high status in Thai society."
            },
            {
                situation: "You're entering a Thai home.",
                options: ["Keep shoes on", "Remove shoes at the door", "Ask the host"],
                correct: 1,
                explanation: "Always remove shoes before entering homes and temples. It's a fundamental sign of respect."
            },
            {
                situation: "Someone criticizes the Thai Royal Family.",
                options: ["Join the conversation", "Stay completely silent", "Change the subject politely"],
                correct: 2,
                explanation: "Criticizing the monarchy is illegal in Thailand (lèse-majesté law). Politely change the subject."
            }
        ],
        info: "Dress modestly at temples. Bargaining is common at markets. Smile often! The monarchy is deeply revered."
    },
,
    {
        name: "Vietnam",
        flag: "🇻🇳",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=300&fit=crop",
        region: "Asia",
        language: "Vietnamese",
        currency: "Vietnamese Dong (₫)",
        riskLevel: "🟡 Moderate",
        briefingTime: "4 Minutes",
        culturalSnapshot: {
            communicationStyle: "Indirect, polite, non-confrontational",
            punctuality: "Flexible, relaxed attitude",
            personalSpace: "Low, crowded and bustling culture",
            collectivism: "Strong family and community bonds",
            englishProficiency: "Growing in cities, limited in rural areas"
        },
        dos: ["Remove shoes when entering homes and some restaurants", "Bargain at markets (expected and fun)", "Cross streets slowly and steadily (don't stop)", "Try street food — it's safe and delicious", "Learn basic Vietnamese phrases"],
        donts: ["Don't touch people's heads", "Don't point feet at people or altars", "Don't disrespect Ho Chi Minh or the flag", "Don't refuse food or drink offers", "Don't show anger or raise your voice"],
        socialEtiquette: {
            dining: ["Chopsticks and spoon are standard", "Slurping pho is normal", "Sharing dishes family-style is common"],
            business: ["Business cards with both hands", "Respect for age and hierarchy", "Building relationships takes time"],
            publicBehavior: ["Motorbikes dominate — cross streets carefully", "Haggling is expected at markets", "Dress modestly at temples"]
        },
        moneyTips: {
            tipping: "Not expected but appreciated (20,000-50,000 VND)",
            cardUsage: "Cash preferred, cards in hotels/malls",
            transitCards: "Cash for most transport, Grab for convenience"
        },
        food: "Pho, Banh Mi, Spring Rolls, Bun Cha, Egg Coffee",
        apps: ["Grab (Transport & Food)", "Google Maps", "Zalo (Messaging)", "MoMo (Payments)"],
        transport: "Motorbikes: Everywhere! Grab: Reliable and cheap. Cyclos: Tourist experience. Trains: Scenic routes between cities",
        scenarios: [
            {
                situation: "You need to cross a busy street with no traffic light.",
                options: ["Wait for a gap", "Walk slowly and steadily", "Run across quickly"],
                correct: 1,
                explanation: "Walk slowly and steadily. Motorbikes will flow around you. Stopping or running is dangerous."
            },
            {
                situation: "A vendor quotes 200,000 VND for a souvenir.",
                options: ["Pay the asking price", "Offer 100,000 VND", "Walk away without buying"],
                correct: 1,
                explanation: "Bargaining is expected! Start at 50% of asking price. It's part of the shopping culture."
            },
            {
                situation: "You're invited to someone's home for dinner.",
                options: ["Bring expensive gifts", "Bring fruit or small gift", "Come empty-handed"],
                correct: 1,
                explanation: "Bring a small gift like fruit or sweets. Remove shoes at the door. It shows respect."
            }
        ],
        info: "Cross streets slowly and steadily. Street food is incredible. Cash preferred. Very affordable!"
    },
,
    {
        name: "Indonesia",
        flag: "🇮🇩",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
        region: "Asia",
        language: "Indonesian (Bahasa)",
        currency: "Indonesian Rupiah (Rp)",
        riskLevel: "🟡 Moderate",
        briefingTime: "4 Minutes",
        culturalSnapshot: {
            communicationStyle: "Indirect, polite, non-confrontational",
            punctuality: "Flexible, 'jam karet' (rubber time)",
            personalSpace: "Moderate, friendly culture",
            collectivism: "Strong community and religious values",
            englishProficiency: "Good in tourist areas, limited elsewhere"
        },
        dos: ["Remove shoes before entering homes and mosques", "Use right hand for eating and giving", "Dress modestly, especially at temples", "Learn basic Bahasa Indonesia", "Smile and be patient"],
        donts: ["Don't use left hand for eating or giving", "Don't touch people's heads", "Don't point with your finger (use thumb)", "Don't show anger or raise your voice", "Don't wear shoes in homes or mosques"],
        socialEtiquette: {
            dining: ["Eat with right hand or spoon and fork", "Wait for host to invite you to eat", "Finish your plate to show appreciation"],
            business: ["Building relationships is essential", "Avoid direct confrontation", "Patience is key — decisions take time"],
            publicBehavior: ["Modest dress, especially in rural areas", "Public displays of affection are frowned upon", "Respect prayer times (5 times daily)"]
        },
        moneyTips: {
            tipping: "Not expected but appreciated (10,000-20,000 Rp)",
            cardUsage: "Cash preferred, cards in hotels/malls",
            transitCards: "Cash for most transport, Go-Jek/Grab for convenience"
        },
        food: "Nasi Goreng, Satay, Rendang, Gado-Gado, Soto",
        apps: ["Go-Jek/Grab (Transport & Food)", "Google Maps", "Google Translate", "OVO/GoPay (Payments)"],
        transport: "Go-Jek/Grab: Motorbike taxis everywhere. Bemos: Shared minivans. Ferries: Island hopping. Trains: Java connections",
        scenarios: [
            {
                situation: "You're offered food with your left hand.",
                options: ["Accept with left hand", "Accept with right hand", "Refuse the food"],
                correct: 1,
                explanation: "Always use right hand for eating, giving, and receiving. Left hand is considered unclean."
            },
            {
                situation: "You're visiting a mosque in Indonesia.",
                options: ["Wear shorts and tank top", "Cover shoulders, knees, and remove shoes", "Keep shoes on"],
                correct: 1,
                explanation: "Dress modestly (cover shoulders and knees), remove shoes, and women should cover their hair."
            },
            {
                situation: "Someone invites you to their home at 7pm.",
                options: ["Arrive at 7pm sharp", "Arrive at 7:15-7:30pm", "Arrive at 6:45pm"],
                correct: 1,
                explanation: "'Jam karet' (rubber time) means flexibility. Arriving 15-30 minutes late is normal and acceptable."
            }
        ],
        info: "Use right hand only. Dress modestly. 'Jam karet' means flexible timing. Smile and be patient!"
    },
,
    {
        name: "Turkey",
        flag: "🇹🇷",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        region: "Asia",
        language: "Turkish",
        currency: "Turkish Lira (₺)",
        riskLevel: "🟡 Moderate",
        briefingTime: "4 Minutes",
        culturalSnapshot: {
            communicationStyle: "Warm, expressive, hospitable",
            punctuality: "Flexible, especially in social settings",
            personalSpace: "Moderate, friendly and welcoming",
            collectivism: "Strong family and community values",
            englishProficiency: "Good in tourist areas, limited elsewhere"
        },
        dos: ["Remove shoes when entering homes and mosques", "Accept tea offers (çay) — refusing is rude", "Dress modestly at mosques (cover shoulders, knees, head for women)", "Bargain at bazaars and markets", "Learn basic Turkish phrases"],
        donts: ["Don't refuse hospitality or tea", "Don't show public displays of affection", "Don't disrespect Atatürk (founder) or the flag", "Don't point with your finger (use whole hand)", "Don't show the bottom of your feet"],
        socialEtiquette: {
            dining: ["Wait for elder to start eating", "Bread is sacred — don't waste it", "Tea is offered constantly — accept it"],
            business: ["Relationships before business", "Expect tea and conversation first", "Haggling is part of business culture"],
            publicBehavior: ["Hospitality is extreme — expect invitations", "Respect prayer times", "Conservative dress outside tourist areas"]
        },
        moneyTips: {
            tipping: "5-10% in restaurants, round up for taxis",
            cardUsage: "Cash preferred in small shops, cards in cities",
            transitCards: "Istanbulkart for public transport"
        },
        food: "Kebab, Baklava, Turkish Delight, Meze, Pide",
        apps: ["BiTaksi (Transport)", "Yemeksepeti (Food)", "Google Maps", "Getir (Delivery)"],
        transport: "Metro & Trams: Modern in Istanbul. Dolmuş: Shared minibuses. Ferries: Cross the Bosphorus. BiTaksi: Reliable taxis",
        scenarios: [
            {
                situation: "Someone offers you tea for the third time.",
                options: ["Refuse politely", "Accept it", "Say you're full"],
                correct: 1,
                explanation: "Turkish hospitality is legendary. Always accept tea — refusing repeatedly is considered rude."
            },
            {
                situation: "You're shopping at the Grand Bazaar.",
                options: ["Pay the first price", "Bargain to 50-60% of asking", "Walk away immediately"],
                correct: 1,
                explanation: "Bargaining is expected and fun! Start at 50% of asking price. Vendors expect it."
            },
            {
                situation: "You're entering a mosque.",
                options: ["Keep shoes on", "Remove shoes and cover appropriately", "Take photos freely"],
                correct: 1,
                explanation: "Always remove shoes. Women should cover hair, shoulders, and knees. Respect prayer times."
            }
        ],
        info: "Bargain at bazaars. Accept tea offers. Dress modestly at religious sites. Hospitality is incredible."
    },
,
    {
        name: "Mexico",
        flag: "🇲🇽",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop",
        region: "Americas",
        language: "Spanish",
        currency: "Mexican Peso ($)",
        riskLevel: "🟡 Moderate",
        briefingTime: "4 Minutes",
        culturalSnapshot: {
            communicationStyle: "Warm, indirect, relationship-focused",
            punctuality: "Flexible, 'mañana' culture",
            personalSpace: "Low, warm and friendly",
            collectivism: "Strong family and community bonds",
            englishProficiency: "Limited outside tourist areas"
        },
        dos: ["Greet warmly with handshake or kiss on cheek", "Try street food from busy stalls", "Learn basic Spanish — it's essential", "Be patient with timing and schedules", "Tip 10-15% at restaurants"],
        donts: ["Don't drink tap water (bottled only)", "Don't be overly punctual (15-30 min late is normal)", "Don't refuse food offers", "Don't flash expensive items or valuables", "Don't make assumptions about safety — research areas"],
        socialEtiquette: {
            dining: ["Lunch is main meal (2-4pm)", "Street food is safe at busy stalls", "Tortillas with every meal"],
            business: ["Relationships before business", "Expect delays and flexibility", "Formal titles are important"],
            publicBehavior: ["Friendly and warm culture", "Family is central to life", "Fiestas and celebrations are frequent"]
        },
        moneyTips: {
            tipping: "10-15% at restaurants, 10-20 pesos for services",
            cardUsage: "Cash preferred, cards in cities",
            transitCards: "Metro cards in major cities, cash for most"
        },
        food: "Tacos, Mole, Tamales, Pozole, Chiles en Nogada",
        apps: ["Uber (Transport)", "Google Maps", "WhatsApp (Essential)", "Mercado Pago (Payments)"],
        transport: "Metro: Cheap in cities. Colectivos: Shared vans. ADO buses: Comfortable long-distance. Uber: Safe and reliable",
        scenarios: [
            {
                situation: "You're invited to a party at 8pm.",
                options: ["Arrive at 8pm", "Arrive at 8:30-9pm", "Arrive at 7:45pm"],
                correct: 1,
                explanation: "Mexican time is flexible. Arriving 30-60 minutes late to social events is normal and expected."
            },
            {
                situation: "You're thirsty at a restaurant.",
                options: ["Order tap water", "Order bottled water", "Drink from the fountain"],
                correct: 1,
                explanation: "Never drink tap water in Mexico. Always order bottled water ('agua embotellada')."
            },
            {
                situation: "A street vendor offers you tacos.",
                options: ["Refuse — it's unsafe", "Try them if the stall is busy", "Only eat at restaurants"],
                correct: 1,
                explanation: "Street food is delicious and safe if the stall is busy (high turnover = fresh food)."
            }
        ],
        info: "Learn Spanish basics. Tip 10-15%. Street food is amazing and safe in busy areas. Don't drink tap water."
    },
,
    {
        name: "Argentina",
        flag: "🇦🇷",
        image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&h=300&fit=crop",
        region: "Americas",
        language: "Spanish",
        currency: "Argentine Peso ($)",
        riskLevel: "🟡 Moderate",
        briefingTime: "4 Minutes",
        culturalSnapshot: {
            communicationStyle: "Direct, passionate, expressive",
            punctuality: "Very flexible, late is normal",
            personalSpace: "Low, warm and physical",
            collectivism: "Strong social and family bonds",
            englishProficiency: "Limited outside Buenos Aires"
        },
        dos: ["Greet with kiss on right cheek (even men)", "Share mate (traditional tea) when offered", "Talk about football (soccer) passionately", "Enjoy late dinners (10pm or later)", "Learn basic Spanish"],
        donts: ["Don't mention Falklands/Malvinas conflict", "Don't compare Argentina to Chile or Brazil", "Don't be punctual (30-60 min late is normal)", "Don't refuse mate when offered", "Don't expect early dinners"],
        socialEtiquette: {
            dining: ["Dinner starts 9-11pm", "Asado (BBQ) is a social ritual", "Wine flows freely"],
            business: ["Relationships before business", "Expect long lunches and dinners", "Passion and emotion in discussions"],
            publicBehavior: ["Football is religion", "Tango is cultural pride", "Porteños (Buenos Aires locals) are proud"]
        },
        moneyTips: {
            tipping: "10% at restaurants",
            cardUsage: "Cash preferred, bring USD for better rates",
            transitCards: "SUBE card for public transport"
        },
        food: "Asado (BBQ), Empanadas, Dulce de Leche, Milanesa",
        apps: ["Uber/Cabify (Transport)", "Google Maps", "Mercado Pago (Payments)", "PedidosYa (Food)"],
        transport: "Subte (metro): Cheap but old. Colectivos (buses): Extensive network. Uber/Cabify: Reliable. Trains: Suburban routes",
        scenarios: [
            {
                situation: "Someone offers you mate.",
                options: ["Refuse politely", "Accept and drink it all", "Take a sip and pass it back"],
                correct: 2,
                explanation: "Mate is sacred! Take a sip, say 'gracias' when done, and pass it back. Refusing is rude."
            },
            {
                situation: "You're invited to dinner at 9pm.",
                options: ["Arrive at 9pm", "Arrive at 9:30-10pm", "Arrive at 8:45pm"],
                correct: 1,
                explanation: "Argentine time is very flexible. Arriving 30-60 minutes late is completely normal and expected."
            },
            {
                situation: "Someone wants to discuss Messi vs Maradona.",
                options: ["Say you don't like football", "Engage passionately", "Change the subject"],
                correct: 1,
                explanation: "Football is life in Argentina! Engage in the passionate debate — it's part of the culture."
            }
        ],
        info: "Dinner after 9pm. Tipping 10%. Learn tango basics. Bring USD for better exchange rates. Football is religion."
    },
,
    {
        name: "Morocco",
        flag: "🇲🇦",
        image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&h=300&fit=crop",
        region: "Africa",
        language: "Arabic & French",
        currency: "Moroccan Dirham (MAD)",
        riskLevel: "🟡 Moderate",
        briefingTime: "4 Minutes",
        culturalSnapshot: {
            communicationStyle: "Indirect, hospitable, expressive",
            punctuality: "Very flexible, 'Moroccan time'",
            personalSpace: "Low in markets, moderate elsewhere",
            collectivism: "Strong family and religious community",
            englishProficiency: "Limited, French widely spoken"
        },
        dos: ["Greet with 'Salam alaikum' (peace be upon you)", "Dress modestly (cover shoulders and knees)", "Bargain at souks — it's expected", "Accept mint tea offers (3 glasses is tradition)", "Use right hand for eating and greeting"],
        donts: ["Don't eat with left hand (considered unclean)", "Don't refuse hospitality", "Don't photograph people without asking", "Don't show public displays of affection", "Don't disrespect Islam or the King"],
        socialEtiquette: {
            dining: ["Eat with right hand only", "Mint tea ceremony is sacred", "Bread is used to scoop food"],
            business: ["Relationships before business", "Expect long conversations over tea", "Patience is essential"],
            publicBehavior: ["Respect prayer times (5 times daily)", "Dress conservatively", "Ramadan fasting is observed — be respectful"]
        },
        moneyTips: {
            tipping: "10% in restaurants, small tips for guides",
            cardUsage: "Cash preferred, cards in hotels/restaurants",
            transitCards: "Cash for most transport"
        },
        food: "Tagine, Couscous, Mint Tea, Pastilla, Harira",
        apps: ["Careem (Transport)", "Google Translate", "Maps.me (Offline)", "CIB Mobile (Banking)"],
        transport: "Trains (ONCF): Comfortable between cities. Grand taxis: Shared long-distance. Petit taxis: City transport. Buses: Cheap option",
        scenarios: [
            {
                situation: "You're offered mint tea in a shop.",
                options: ["Refuse politely", "Accept and drink 3 glasses", "Take one sip and leave"],
                correct: 1,
                explanation: "Mint tea is sacred hospitality. Tradition says 3 glasses: first is gentle, second is strong, third is bitter like death."
            },
            {
                situation: "A vendor quotes 500 MAD for a rug.",
                options: ["Pay 500 MAD", "Offer 200 MAD", "Walk away without negotiating"],
                correct: 1,
                explanation: "Bargaining is expected! Start at 40-50% of asking price. It's part of the shopping experience."
            },
            {
                situation: "You're invited to eat with a Moroccan family.",
                options: ["Use left hand", "Use right hand only", "Use fork and knife"],
                correct: 1,
                explanation: "Always use right hand for eating. Left hand is considered unclean. Bread is used to scoop food."
            }
        ],
        info: "Bargaining is expected. Respect Ramadan. Mint tea is a social ritual. Dress modestly."
    },
,
    {
        name: "Portugal",
        flag: "🇵🇹",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=300&fit=crop",
        region: "Europe",
        language: "Portuguese",
        currency: "Euro (€)",
        riskLevel: "🟢 Low Risk",
        briefingTime: "3 Minutes",
        culturalSnapshot: {
            communicationStyle: "Warm, indirect, polite",
            punctuality: "Relaxed, 'Portuguese time' is common",
            personalSpace: "Moderate, friendly and welcoming",
            collectivism: "Family-oriented, community-focused",
            englishProficiency: "Very good, especially younger generation"
        },
        dos: ["Try pastéis de nata everywhere you go", "Learn basic Portuguese (they appreciate the effort)", "Enjoy fado music in Lisbon", "Be relaxed and go with the flow", "Greet with two kisses on the cheek"],
        donts: ["Don't speak Spanish (it's offensive)", "Don't rush meals or experiences", "Don't skip small towns and villages", "Don't expect strict punctuality", "Don't compare Portugal to Spain"],
        socialEtiquette: {
            dining: ["Lunch is 12:30-2pm, dinner 8-10pm", "Bread and butter at table is usually charged", "Coffee culture is strong — try 'bica' (espresso)"],
            business: ["More relaxed than Northern Europe", "Relationships matter more than contracts", "Expect some delays and flexibility"],
            publicBehavior: ["Very safe and welcoming to tourists", "Tipping is appreciated but not mandatory", "People are helpful and friendly"]
        },
        moneyTips: {
            tipping: "5-10% appreciated but not required",
            cardUsage: "Widely accepted, cash still useful",
            transitCards: "Viva Viagem card for Lisbon, Andante for Porto"
        },
        food: "Bacalhau (cod), Pastéis de Nata, Francesinha, Caldo Verde",
        apps: ["Uber/Bolt (Transport)", "CP (Trains)", "MB Way (Payments)", "Glovo (Food)"],
        transport: "Trams: Iconic in Lisbon. Metro: Clean and efficient. Trains: CP connects cities. Uber/Bolt: Affordable and common",
        scenarios: [
            {
                situation: "Someone speaks to you in Spanish.",
                options: ["Respond in Spanish", "Politely say you're in Portugal", "Ignore them"],
                correct: 1,
                explanation: "Portuguese people are proud of their language. Politely remind them you're in Portugal and they speak Portuguese."
            },
            {
                situation: "You're invited to dinner at 8pm.",
                options: ["Arrive at 8pm sharp", "Arrive at 8:15-8:30pm", "Arrive at 7:45pm"],
                correct: 1,
                explanation: "Portuguese time is relaxed. Arriving 15-30 minutes late is normal and expected for social events."
            },
            {
                situation: "You finish your meal at a restaurant.",
                options: ["Leave 20% tip", "Leave 5-10% or round up", "No tip needed"],
                correct: 1,
                explanation: "Tipping 5-10% or rounding up is appreciated but not mandatory. Service charge is usually included."
            }
        ],
        info: "Very affordable. English widely spoken. Great wine. Safe for travelers. Don't confuse with Spain!"
    }
];

// 
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
    // Skip onboarding and go directly to explore page
    showApp();
    switchView('explore');
    
    // Set default user profile
    if (!userProfile.name) {
        userProfile.name = 'Explorer';
        userProfile.avatar = '🧭';
        userProfile.interests = ['Culture', 'Food', 'Nature', 'History'];
        saveData();
    }
    
    // Populate location dropdown (if needed later)
    populateLocationDropdown();
}

// Enhanced Welcome Experience
function initializeWelcomeExperience() {
    startWelcomeAnimations();
    startTaglineRotation();
    addInteractiveElements();
}

function startWelcomeAnimations() {
    setTimeout(() => {
        const logo = document.querySelector('.logo-large');
        if (logo) logo.style.animation = 'bounceIn 1.5s ease-out';
    }, 300);
    
    setTimeout(() => {
        const title = document.querySelector('.app-title');
        if (title) title.style.animation = 'slideInUp 1s ease-out';
    }, 800);
    
    setTimeout(() => {
        const tagline = document.querySelector('.app-tagline');
        if (tagline) tagline.style.animation = 'fadeInUp 1s ease-out';
    }, 1200);
    
    setTimeout(() => {
        const button = document.querySelector('.btn-primary');
        if (button) {
            button.style.animation = 'pulse 2s infinite';
            button.classList.add('ready-to-click');
        }
    }, 2000);
}

// Enhanced tagline rotation
let taglineIndex = 0;
let taglineInterval;

function startTaglineRotation() {
    const taglines = document.querySelectorAll('.tagline-text');
    if (taglines.length === 0) return;
    
    setTimeout(() => {
        taglineInterval = setInterval(() => {
            // Add exit animation to current tagline
            taglines[taglineIndex].classList.add('exit');
            
            setTimeout(() => {
                // Remove current tagline
                taglines[taglineIndex].classList.remove('active', 'exit');
                
                // Move to next tagline
                taglineIndex = (taglineIndex + 1) % taglines.length;
                
                // Show next tagline with entrance animation
                taglines[taglineIndex].classList.add('active');
            }, 400); // Half of the transition time
            
        }, 4000);
    }, 3000);
}

function stopTaglineRotation() {
    if (taglineInterval) {
        clearInterval(taglineInterval);
    }
}

function addInteractiveElements() {
    // Add hover effects to preview cards
    setTimeout(() => {
        const previewCards = document.querySelectorAll('.preview-card');
        previewCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'slideInUp 0.8s ease-out';
                card.classList.add('interactive');
            }, index * 200);
        });
    }, 2500);
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
    stopTaglineRotation();
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
    
    // Find and activate the correct nav button
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick && onclick.includes(`'${view}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Update view content
    document.querySelectorAll('.view-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${view}View`).classList.add('active');
    
    // Load content for the view
    if (view === 'explore') {
        renderExploreGrid();
    } else if (view === 'collection') {
        renderCollectionGrid();
    } else if (view === 'map') {
        renderWorldMap();
    }
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
    const country = currentCard;
    
    // Check if country has enhanced data
    const hasEnhancedData = country.riskLevel && country.culturalSnapshot;
    
    if (hasEnhancedData) {
        content.innerHTML = `
            <div style="max-height: 70vh; overflow-y: auto; padding-right: 10px;">
                <h2 style="font-size: 1.8rem; margin-bottom: 10px; color: #333;">${country.flag} ${country.name}</h2>
                
                <div style="display: flex; gap: 15px; margin-bottom: 25px; flex-wrap: wrap;">
                    <div style="background: #fee; padding: 8px 16px; border-radius: 8px; font-size: 0.9rem;">
                        <strong>Risk Level:</strong> ${country.riskLevel}
                    </div>
                    <div style="background: #eff6ff; padding: 8px 16px; border-radius: 8px; font-size: 0.9rem;">
                        <strong>Briefing:</strong> ${country.briefingTime}
                    </div>
                </div>
                
                <!-- ESSENTIAL INFORMATION -->
                <div style="margin-bottom: 25px; background: #fff3cd; padding: 15px; border-radius: 12px; border-left: 4px solid #ffc107;">
                    <h3 style="font-size: 1.2rem; color: #856404; margin-bottom: 12px;">⚠️ Critical Cultural Offenses to Avoid</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        ${country.donts.slice(0, 3).map(item => `<li style="padding: 8px 0; color: #856404; font-weight: 600; border-bottom: 1px solid #ffe69c;">❌ ${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 1.1rem; color: #667eea; margin-bottom: 10px;">🗣️ Language</h3>
                    <p style="color: #666; font-size: 1rem; font-weight: 600;">${country.language}</p>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="font-size: 1.1rem; color: #667eea; margin-bottom: 10px;">💰 Currency & Payments</h3>
                    <div style="background: #f9fafb; padding: 12px; border-radius: 8px; font-size: 0.9rem; color: #666;">
                        <div style="margin-bottom: 6px;"><strong>Currency:</strong> ${country.currency}</div>
                        <div style="margin-bottom: 6px;"><strong>Tipping:</strong> ${country.moneyTips.tipping}</div>
                        <div><strong>Cards:</strong> ${country.moneyTips.cardUsage}</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="font-size: 1.1rem; color: #667eea; margin-bottom: 10px;">📲 Must-Have Apps</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${country.apps.map(app => `<span style="background: #667eea; color: white; padding: 8px 14px; border-radius: 20px; font-size: 0.85rem;">${app}</span>`).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="font-size: 1.1rem; color: #667eea; margin-bottom: 10px;">🚆 Transportation</h3>
                    <p style="color: #666; font-size: 0.9rem; line-height: 1.6;">${country.transport}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 1.1rem; color: #667eea; margin-bottom: 10px;">ℹ️ Key Info</h3>
                    <p style="color: #666; line-height: 1.6;">${country.info}</p>
                </div>
                
                <!-- SEE MORE SECTION -->
                <div style="margin-top: 30px; border-top: 2px solid #e5e7eb; padding-top: 20px;">
                    <button 
                        onclick="toggleSeeMore('${country.name.replace(/\s/g, '')}')" 
                        id="seeMoreBtn-${country.name.replace(/\s/g, '')}"
                        style="width: 100%; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;">
                        <span>📚 See More Details & Quiz</span>
                        <span id="seeMoreIcon-${country.name.replace(/\s/g, '')}">▼</span>
                    </button>
                    
                    <div id="seeMoreContent-${country.name.replace(/\s/g, '')}" style="display: none; margin-top: 20px;">
                        
                        <div style="margin-bottom: 25px; background: #f9fafb; padding: 15px; border-radius: 12px; border-left: 4px solid #667eea;">
                            <h3 style="font-size: 1.1rem; color: #667eea; margin-bottom: 12px;">🧭 Cultural Snapshot</h3>
                            <div style="display: grid; gap: 8px; font-size: 0.9rem; color: #666;">
                                <div><strong>Communication:</strong> ${country.culturalSnapshot.communicationStyle}</div>
                                <div><strong>Punctuality:</strong> ${country.culturalSnapshot.punctuality}</div>
                                <div><strong>Personal Space:</strong> ${country.culturalSnapshot.personalSpace}</div>
                                <div><strong>Collectivism:</strong> ${country.culturalSnapshot.collectivism}</div>
                                <div><strong>English:</strong> ${country.culturalSnapshot.englishProficiency}</div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h3 style="font-size: 1.2rem; color: #10b981; margin-bottom: 10px;">✅ All Do's</h3>
                            <ul style="list-style: none; padding: 0;">
                                ${country.dos.map(item => `<li style="padding: 8px 0; color: #666; border-bottom: 1px solid #f0f0f0;">✓ ${item}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div style="margin-bottom: 25px;">
                            <h3 style="font-size: 1.2rem; color: #ef4444; margin-bottom: 10px;">❌ All Don'ts</h3>
                            <ul style="list-style: none; padding: 0;">
                                ${country.donts.map(item => `<li style="padding: 8px 0; color: #666; border-bottom: 1px solid #f0f0f0;">${item}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div style="margin-bottom: 25px; background: #fef3c7; padding: 15px; border-radius: 12px;">
                            <h3 style="font-size: 1.1rem; color: #d97706; margin-bottom: 12px;">🍜 Social Etiquette</h3>
                            <div style="margin-bottom: 10px;">
                                <strong style="color: #333;">Dining</strong>
                                <ul style="margin: 5px 0; padding-left: 20px; color: #666; font-size: 0.9rem;">
                                    ${country.socialEtiquette.dining.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong style="color: #333;">Business</strong>
                                <ul style="margin: 5px 0; padding-left: 20px; color: #666; font-size: 0.9rem;">
                                    ${country.socialEtiquette.business.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <strong style="color: #333;">Public Behavior</strong>
                                <ul style="margin: 5px 0; padding-left: 20px; color: #666; font-size: 0.9rem;">
                                    ${country.socialEtiquette.publicBehavior.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; color: white;">
                            <h3 style="font-size: 1.2rem; margin-bottom: 15px;">🎮 Cultural Quiz Challenge</h3>
                            <p style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 15px;">Test your knowledge!</p>
                            <div id="quizContainer-${country.name.replace(/\s/g, '')}" style="display: flex; flex-direction: column; gap: 15px;">
                                ${country.scenarios.map((scenario, idx) => `
                                    <div class="scenario-card" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);">
                                        <div style="font-weight: 600; margin-bottom: 10px; font-size: 0.95rem;">Situation ${idx + 1}:</div>
                                        <div style="margin-bottom: 12px; font-size: 0.9rem;">${scenario.situation}</div>
                                        <div style="display: flex; flex-direction: column; gap: 8px;">
                                            ${scenario.options.map((option, optIdx) => `
                                                <button 
                                                    onclick="answerScenario('${country.name.replace(/\s/g, '')}', ${idx}, ${optIdx})"
                                                    class="scenario-option"
                                                    id="option-${country.name.replace(/\s/g, '')}-${idx}-${optIdx}"
                                                    style="background: rgba(255,255,255,0.9); color: #333; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; text-align: left; font-size: 0.85rem; transition: all 0.2s;">
                                                    ${String.fromCharCode(65 + optIdx)}) ${option}
                                                </button>
                                            `).join('')}
                                        </div>
                                        <div id="explanation-${country.name.replace(/\s/g, '')}-${idx}" style="display: none; margin-top: 12px; padding: 12px; background: rgba(255,255,255,0.25); border-radius: 8px; font-size: 0.85rem; line-height: 1.5;">
                                            <strong>✓ Correct!</strong><br>${scenario.explanation}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div id="quizScore-${country.name.replace(/\s/g, '')}" style="display: none; margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 10px; text-align: center; font-size: 1.1rem; font-weight: 700;">
                                🎉 Cultural IQ Score: <span id="scoreValue-${country.name.replace(/\s/g, '')}">0</span>/${country.scenarios.length} - Ready to Land!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Fallback for countries without enhanced data
        content.innerHTML = `
            <h2 style="font-size: 1.8rem; margin-bottom: 20px; color: #333;">${country.flag} ${country.name}</h2>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">🗣️ Language</h3>
                <p style="color: #666;">${country.language}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">💰 Currency</h3>
                <p style="color: #666;">${country.currency}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">✅ Do's</h3>
                <ul style="list-style: none; padding: 0;">
                    ${country.dos.map(item => `<li style="padding: 8px 0; color: #666;">• ${item}</li>`).join('')}
                </ul>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">❌ Don'ts</h3>
                <ul style="list-style: none; padding: 0;">
                    ${country.donts.map(item => `<li style="padding: 8px 0; color: #666;">• ${item}</li>`).join('')}
                </ul>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">🍽️ Must-Try Food</h3>
                <p style="color: #666;">${country.food}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">🚇 Transportation</h3>
                <p style="color: #666;">${country.transport}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">📱 Essential Apps</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${country.apps.map(app => `<span style="background: #667eea; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.85rem;">${app}</span>`).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; color: #667eea; margin-bottom: 10px;">ℹ️ Important Info</h3>
                <p style="color: #666;">${country.info}</p>
            </div>
        `;
    }
}

// Quiz interaction tracking
let quizScores = JSON.parse(localStorage.getItem('quizScores')) || {};

function answerScenario(countryId, scenarioIdx, selectedOption) {
    const country = countries.find(c => c.name.replace(/\s/g, '') === countryId);
    if (!country || !country.scenarios) return;
    
    const scenario = country.scenarios[scenarioIdx];
    const isCorrect = selectedOption === scenario.correct;
    
    // Disable all options for this scenario
    scenario.options.forEach((_, optIdx) => {
        const btn = document.getElementById(`option-${countryId}-${scenarioIdx}-${optIdx}`);
        if (btn) {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
            btn.style.opacity = '0.6';
        }
    });
    
    // Highlight the selected option
    const selectedBtn = document.getElementById(`option-${countryId}-${scenarioIdx}-${selectedOption}`);
    if (selectedBtn) {
        if (isCorrect) {
            selectedBtn.style.background = '#10b981';
            selectedBtn.style.color = 'white';
            selectedBtn.style.borderColor = '#10b981';
        } else {
            selectedBtn.style.background = '#ef4444';
            selectedBtn.style.color = 'white';
            selectedBtn.style.borderColor = '#ef4444';
        }
    }
    
    // Show correct answer if wrong
    if (!isCorrect) {
        const correctBtn = document.getElementById(`option-${countryId}-${scenarioIdx}-${scenario.correct}`);
        if (correctBtn) {
            correctBtn.style.background = '#10b981';
            correctBtn.style.color = 'white';
            correctBtn.style.borderColor = '#10b981';
        }
    }
    
    // Show explanation
    const explanation = document.getElementById(`explanation-${countryId}-${scenarioIdx}`);
    if (explanation) {
        explanation.style.display = 'block';
        if (!isCorrect) {
            explanation.innerHTML = `<strong>✗ Incorrect.</strong><br>${scenario.explanation}`;
            explanation.style.background = 'rgba(239, 68, 68, 0.2)';
        }
    }
    
    // Update score
    if (!quizScores[countryId]) {
        quizScores[countryId] = { answered: [], correct: 0 };
    }
    
    if (!quizScores[countryId].answered.includes(scenarioIdx)) {
        quizScores[countryId].answered.push(scenarioIdx);
        if (isCorrect) {
            quizScores[countryId].correct++;
        }
        localStorage.setItem('quizScores', JSON.stringify(quizScores));
    }
    
    // Check if all scenarios answered
    if (quizScores[countryId].answered.length === country.scenarios.length) {
        const scoreDisplay = document.getElementById(`quizScore-${countryId}`);
        const scoreValue = document.getElementById(`scoreValue-${countryId}`);
        if (scoreDisplay && scoreValue) {
            scoreValue.textContent = quizScores[countryId].correct;
            scoreDisplay.style.display = 'block';
        }
    }
}

// Toggle See More section
function toggleSeeMore(countryId) {
    const content = document.getElementById(`seeMoreContent-${countryId}`);
    const btn = document.getElementById(`seeMoreBtn-${countryId}`);
    const icon = document.getElementById(`seeMoreIcon-${countryId}`);
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '▲';
        btn.querySelector('span:first-child').textContent = '📚 Hide Details & Quiz';
    } else {
        content.style.display = 'none';
        icon.textContent = '▼';
        btn.querySelector('span:first-child').textContent = '📚 See More Details & Quiz';
    }
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

// Enhanced Notifications
function showCelebrationNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'celebration-notification';
    notification.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 10px;">🎉</div>
        <div>${message}</div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-in-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
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
        animation: slideInUp 0.5s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease-in-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Enhanced Avatar Selection
function selectAvatar(avatar) {
    selectedAvatar = avatar;
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Add selection feedback
    event.target.style.animation = 'bounce 0.6s ease-in-out';
    showMiniNotification('Avatar selected! 👍');
}

function showMiniNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-in-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 1500);
}

// Enhanced Interest Selection
function toggleInterest(btn) {
    const interest = btn.dataset.interest;
    const wasSelected = btn.classList.contains('selected');
    
    btn.classList.toggle('selected');
    
    if (selectedInterests.includes(interest)) {
        selectedInterests = selectedInterests.filter(i => i !== interest);
    } else {
        selectedInterests.push(interest);
        // Add celebration effect for new selection
        btn.style.animation = 'glow 1s ease-in-out';
        setTimeout(() => {
            btn.style.animation = '';
        }, 1000);
    }
    
    updateInterestsFeedback();
    
    // Unlock cards based on interests
    if (!wasSelected && selectedInterests.length > 0) {
        unlockCardsBasedOnInterests();
    }
}

function unlockCardsBasedOnInterests() {
    // Unlock 2-3 cards based on selected interests
    const interestCountryMap = {
        'Culture': ['Japan', 'India', 'Morocco'],
        'Food': ['Italy', 'France', 'Thailand'],
        'Nature': ['New Zealand', 'Norway', 'Iceland'],
        'History': ['Egypt', 'Greece', 'Peru']
    };
    
    selectedInterests.forEach(interest => {
        const relevantCountries = interestCountryMap[interest] || [];
        relevantCountries.slice(0, 1).forEach(countryName => {
            if (!cardStatus[countryName]) {
                cardStatus[countryName] = 'bronze';
                showMiniNotification(`🎴 ${countryName} card unlocked!`);
            }
        });
    });
    
    saveData();
}

function updateInterestsFeedback() {
    const feedbackContainer = document.querySelector('.interests-feedback');
    const noInterestsMessage = document.querySelector('.no-interests-message');
    
    if (!noInterestsMessage) return;
    
    if (selectedInterests.length === 0) {
        noInterestsMessage.style.display = 'block';
        noInterestsMessage.textContent = 'Select your interests above to start unlocking culture cards.';
        noInterestsMessage.style.color = 'rgba(255, 255, 255, 0.7)';
    } else {
        noInterestsMessage.style.display = 'block';
        noInterestsMessage.innerHTML = `
            <span style="color: #4caf50;">✅</span> 
            Great! You've selected ${selectedInterests.length} interest${selectedInterests.length > 1 ? 's' : ''}. 
            <br><small>Cards are being unlocked based on your preferences!</small>
        `;
        noInterestsMessage.style.color = 'rgba(255, 255, 255, 0.9)';
    }
}

// Enhanced Onboarding Completion
function completeOnboarding() {
    const name = document.getElementById('userName').value || 'Traveler';
    
    if (selectedInterests.length === 0) {
        showNotification('Please select at least one interest to continue! 🎯');
        document.querySelector('.interest-tags').style.animation = 'shake 0.5s ease-in-out';
        return;
    }
    
    userProfile.name = name;
    userProfile.avatar = selectedAvatar;
    userProfile.interests = selectedInterests;
    
    localStorage.setItem('onboardingComplete', 'true');
    saveData();
    
    // Show completion celebration
    showCelebrationNotification(`🎉 Welcome ${name}! Your journey begins now!`);
    
    setTimeout(() => {
        showApp();
    }, 2000);
}

// Preview Card Interactions
function previewCardClick(countryName) {
    // Add click effect
    event.target.style.animation = 'pulse 0.5s ease-in-out';
    
    // Show teaser notification
    showMiniNotification(`🎴 ${countryName} looks interesting! Complete setup to unlock it.`);
    
    // Highlight the start button
    setTimeout(() => {
        const startButton = document.querySelector('.btn-primary');
        if (startButton) {
            startButton.style.animation = 'glow 2s ease-in-out 3';
        }
    }, 1000);
}

// Utilities
function saveData() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    localStorage.setItem('cardStatus', JSON.stringify(cardStatus));
}

// Start App
init();
