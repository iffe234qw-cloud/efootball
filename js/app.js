let currentMode = 'buy';

function init() {
    lucide.createIcons();
    renderPlayers(allPlayers);
    renderTeams();
    initTicker();
    initCounters();
    window.addEventListener('scroll', handleScroll);
    
    document.getElementById('player-search').addEventListener('input', filterPlayers);
    document.getElementById('filter-type').addEventListener('change', filterPlayers);
    document.getElementById('filter-pos').addEventListener('change', filterPlayers);
    document.getElementById('sort-by').addEventListener('change', filterPlayers);

    initMobileNav();
}

function handleScroll() {
    const nav = document.getElementById('main-nav');
    if(window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    const glow1 = document.getElementById('glow1');
    const glow2 = document.getElementById('glow2');
    if(glow1) glow1.style.transform = `translate(${window.scrollY * 0.1}px, ${window.scrollY * 0.1}px)`;
    if(glow2) glow2.style.transform = `translate(-${window.scrollY * 0.1}px, -${window.scrollY * 0.1}px)`;
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
}

function setMarketMode(mode, btn) {
    currentMode = mode;
    if (btn) {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    const slider = document.getElementById('toggle-slider');
    if (slider) slider.style.transform = mode === 'sell' ? 'translateX(100%)' : 'translateX(0)';
    filterPlayers();
}

function renderPlayers(data) {
    const grid = document.getElementById('player-grid');
    grid.innerHTML = '';
    data.forEach(p => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <div class="card-header">
                <div class="rating-badge">${p.rating}</div>
                <div class="card-type">${p.type}</div>
            </div>
            <div class="player-img-container">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}" class="player-avatar" alt="${p.name}">
            </div>
            <div class="player-info">
                <h3>${p.name}</h3>
                <div class="player-meta">
                    <span class="meta-tag">${p.pos}</span>
                    <span class="meta-tag">${p.club}</span>
                    <span class="meta-tag">${p.nat}</span>
                </div>
            </div>
            <div class="card-footer">
                <div class="price-tag"><span>$</span>${p.price}</div>
                <button class="btn btn-primary" style="padding: 0.4rem 1rem; font-size: 0.8rem;">
                    ${currentMode === 'buy' ? 'Buy Now' : 'List Asset'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderTeams() {
    const grid = document.getElementById('team-grid');
    const teamNames = ["Galacticos 2026", "Catalan Titans", "Manchester Blue", "Madrid Magic", "Munich Machines", "Parisian Elite"];
    for(let i=0; i<12; i++) {
        const name = teamNames[Math.floor(Math.random() * teamNames.length)] + " #" + (i+1);
        const rating = 95 + Math.floor(Math.random() * 5);
        const price = 1200 + Math.floor(Math.random() * 2000);
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-header">
                <h3 style="font-size: 1.5rem;">${name}</h3>
                <div class="rating-badge" style="font-size: 1.2rem;">${rating} OVR</div>
            </div>
            <div class="team-stats-grid">
                <div class="team-stat-item"><span class="team-stat-val">4-3-3</span><span class="team-stat-lbl">Formation</span></div>
                <div class="team-stat-item"><span class="team-stat-val">${Math.floor(Math.random()*8)}</span><span class="team-stat-lbl">Epics</span></div>
                <div class="team-stat-item"><span class="team-stat-val">${Math.floor(Math.random()*10)}</span><span class="team-stat-lbl">Booster</span></div>
                <div class="team-stat-item"><span class="team-stat-val">Elite</span><span class="team-stat-lbl">Manager</span></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="price-tag"><span>$</span>${price}</div>
                <button class="btn btn-outline" style="padding: 0.4rem 1rem; font-size: 0.8rem;">View Squad</button>
            </div>
        `;
        grid.appendChild(card);
    }
}

function initMobileNav() {
    const openBtn = document.getElementById('mobile-menu-open');
    const closeBtn = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('drawer-overlay');
    const drawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.drawer-item');

    const toggleMenu = (isOpen) => {
        drawer.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);
        document.body.classList.toggle('no-scroll', isOpen);
    };

    openBtn.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));
    overlay.addEventListener('click', () => toggleMenu(false));
    drawerLinks.forEach(link => { link.addEventListener('click', () => toggleMenu(false)); });
    window.addEventListener('keydown', (e) => { if(e.key === 'Escape') toggleMenu(false); });
}

document.addEventListener('DOMContentLoaded', init);