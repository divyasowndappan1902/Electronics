const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const target = '<div class="mobile-menu-btn"><i class="fas fa-bars"></i></div>';
    const replacement = '<div class="mobile-menu-btn">☰</div>';
    
    if (content.includes(target)) {
        content = content.split(target).join(replacement);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Reverted hamburger menu in ${file}`);
    }
});
