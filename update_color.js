const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// Replace hex codes
css = css.replace(/--primary-color: #f42c54;/g, '--primary-color: #ef3832;');
css = css.replace(/--primary-hover: #d81b43;/g, '--primary-hover: #d32f2f;');

// Replace rgb values for shadows
css = css.replace(/rgba\(244, 44, 84/g, 'rgba(239, 56, 50');

fs.writeFileSync('styles.css', css, 'utf8');
console.log('styles.css updated!');
