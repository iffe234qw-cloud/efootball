
function filterPlayers() {
    const searchTerm = document.getElementById('player-search').value.toLowerCase();
    const type = document.getElementById('filter-type').value;
    const pos = document.getElementById('filter-pos').value;
    const sort = document.getElementById('sort-by').value;

    // The curated view trigger: if search is empty AND filters are on 'all', we show 2 rows.
    const isSearching = searchTerm !== "" || type !== 'all' || pos !== 'all';

    let filtered = allPlayers.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchTerm) || p.club.toLowerCase().includes(searchTerm) || p.nat.toLowerCase().includes(searchTerm);
        const matchType = type === 'all' || p.type === type;
        const matchPos = pos === 'all' || p.pos === pos;
        return matchSearch && matchType && matchPos;
    });

    if(sort === 'rating-desc') filtered.sort((a, b) => b.rating - a.rating);
    if(sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if(sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if(sort === 'recent') filtered.sort((a, b) => a.id - b.id);

    renderPlayers(filtered, isSearching);
}