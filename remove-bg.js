const fs = require('fs');
let text = fs.readFileSync('collection.html', 'utf8');

const targets = ['Chargers & Power Banks', 'Networking', 'Storage Devices', 'Premium Collection'];

targets.forEach(target => {
    // [\s\S]*? will lazily match any character, including the span tags, between the opening h3 tag and the target string
    let regex = new RegExp(`(<div class="collection-card-bg"[^>]*></div>)(\\s*<div class="collection-card-overlay"[^>]*></div>\\s*<div class="collection-card-content">\\s*<h3 class="collection-card-title"[^>]*>[\\s\\S]*?${target}[\\s\\S]*?</h3>)`);
    
    text = text.replace(regex, (match, p1, p2) => {
        let newP1 = p1.replace(/\s*style="[^"]*"/, '');
        return newP1 + p2;
    });
});

fs.writeFileSync('collection.html', text, 'utf8');
console.log('Backgrounds removed successfully');
