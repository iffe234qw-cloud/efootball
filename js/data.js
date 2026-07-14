const PLAYERS_DB = [
    { name: "Lionel Messi", rating: 103, type: "Epic", pos: "RWF", club: "Inter Miami", nat: "Argentina", price: 420, cond: "Mint" },
    { name: "Cristiano Ronaldo", rating: 101, type: "Big Time", pos: "CF", club: "Al Nassr", nat: "Portugal", price: 380, cond: "Excellent" },
    { name: "Kylian Mbappé", rating: 100, type: "Show Time", pos: "LWF", club: "Real Madrid", nat: "France", price: 310, cond: "Mint" },
    { name: "Erling Haaland", rating: 100, type: "Featured", pos: "CF", club: "Man City", nat: "Norway", price: 290, cond: "Mint" },
    { name: "Jude Bellingham", rating: 98, type: "Standard", pos: "AMF", club: "Real Madrid", nat: "England", price: 150, cond: "Mint" },
    { name: "Vinícius Jr.", rating: 97, type: "Featured", pos: "LWF", club: "Real Madrid", nat: "Brazil", price: 180, cond: "Excellent" },
    { name: "Kevin De Bruyne", rating: 97, type: "Epic", pos: "AMF", club: "Man City", nat: "Belgium", price: 220, cond: "Mint" },
    { name: "Mohamed Salah", rating: 96, type: "Standard", pos: "RWF", club: "Liverpool", nat: "Egypt", price: 130, cond: "Excellent" },
    { name: "Harry Kane", rating: 96, type: "Featured", pos: "CF", club: "Bayern Munich", nat: "England", price: 140, cond: "Mint" },
    { name: "Rodri", rating: 95, type: "Standard", pos: "DMF", club: "Man City", nat: "Spain", price: 110, cond: "Mint" },
    { name: "Lamine Yamal", rating: 92, type: "Show Time", pos: "RWF", club: "FC Barcelona", nat: "Spain", price: 200, cond: "Mint" },
    { name: "Neymar Jr.", rating: 98, type: "Epic", pos: "AMF", club: "Al Hilal", nat: "Brazil", price: 340, cond: "Excellent" },
    { name: "Virgil van Dijk", rating: 95, type: "Featured", pos: "CB", club: "Liverpool", nat: "Netherlands", price: 160, cond: "Mint" },
    { name: "Son Heung-min", rating: 94, type: "Standard", pos: "LWF", club: "Tottenham", nat: "South Korea", price: 120, cond: "Mint" },
    { name: "Florian Wirtz", rating: 93, type: "Featured", pos: "AMF", club: "Bayer Leverkusen", nat: "Germany", price: 170, cond: "Excellent" }
];

const generateListings = () => {
    const listings = [];
    for(let i=0; i<120; i++) {
        const base = PLAYERS_DB[Math.floor(Math.random() * PLAYERS_DB.length)];
        listings.push({
            id: i,
            ...base,
            price: base.price + Math.floor(Math.random() * 50) - 25,
            seller: `Trader_${Math.floor(Math.random() * 1000)}`,
            sellerRating: (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1)
        });
    }
    return listings;
};

const allPlayers = generateListings();