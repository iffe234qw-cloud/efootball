function initCounters() {
    const counters = document.querySelectorAll('.stat-value');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText.replace(/,/g, '');
            const speed = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + speed).toLocaleString();
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });
}

function initTicker() {
    const ticker = document.getElementById('live-ticker');
    const actions = ["purchased", "exchanged", "listed", "sold"];
    const types = ["Epic", "Big Time", "Show Time", "Legendary"];
    
    const generateItem = () => {
        const p = PLAYERS_DB[Math.floor(Math.random() * PLAYERS_DB.length)];
        const action = actions[Math.floor(Math.random() * actions.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        return `<div class="ticker-item">User_<span>${Math.floor(Math.random()*999)}</span> ${action} <span>${type} ${p.name}</span></div>`;
    };

    let content = "";
    for(let i=0; i<20; i++) content += generateItem();
    ticker.innerHTML = content + content;
}