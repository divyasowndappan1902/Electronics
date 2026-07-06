const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const target = '<div class="mobile-menu-btn">☰</div>';
    const replacement = '<div class="mobile-menu-btn"><i class="fas fa-bars"></i></div>';
    
    if (content.includes(target)) {
        content = content.split(target).join(replacement);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated hamburger menu in ${file}`);
    } else {
        // Also try to match if there is whitespace inside
        const regex = /<div class="mobile-menu-btn">\s*☰\s*<\/div>/g;
        if (regex.test(content)) {
            content = content.replace(regex, replacement);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated hamburger menu (regex) in ${file}`);
        }
    }
});
