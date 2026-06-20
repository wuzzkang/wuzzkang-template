async function loadContent() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();

        // Update Meta
        document.title = data.meta.title;
        document.getElementById('page-title').innerText = data.meta.title;

        // Update Hero
        document.getElementById('hero-heading').innerText = data.content.hero.heading;
        document.getElementById('hero-sub').innerText = data.content.hero.subheading;
        document.getElementById('hero-cta').innerText = data.content.hero.cta_text;

        // Update Features
        const grid = document.getElementById('features-grid');
        grid.innerHTML = data.content.features.map(f => `
            <div class="p-6 bg-white rounded-xl shadow-sm">
                <div class="text-4xl mb-4">${f.icon}</div>
                <h3 class="text-xl font-bold mb-2">${f.title}</h3>
                <p class="text-gray-600">${f.desc}</p>
            </div>
        `).join('');
    } catch (err) {
        console.error("Gagal load content:", err);
    }
}
loadContent();
