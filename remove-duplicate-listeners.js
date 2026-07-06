const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Regex to match the block:
    // // Main Navbar Toggle
    // const mobileBtn = document.querySelector('.mobile-menu-btn');
    // ...
    // }
    const regex = /\s*\/\/\s*Main Navbar Toggle\s*const mobileBtn = document\.querySelector\('\.mobile-menu-btn'\);\s*const navLinks = document\.querySelector\('\.nav-links'\);\s*if \(mobileBtn && navLinks\) \{\s*mobileBtn\.addEventListener\('click', \(\) => \{\s*navLinks\.classList\.toggle\('nav-active'\);\s*\}\);\s*\}/g;
    
    if (regex.test(content)) {
        content = content.replace(regex, '');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Removed duplicate event listener in ${file}`);
    } else {
        // sometimes variable names might differ or spacing might differ
        // let's try a more relaxed regex just in case
        const regex2 = /\s*\/\/\s*Main Navbar Toggle[\s\S]*?classList\.toggle\('nav-active'\);\s*\}\);\s*\}/g;
        if (regex2.test(content)) {
            content = content.replace(regex2, '');
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Removed duplicate event listener (regex2) in ${file}`);
        }
    }
});
