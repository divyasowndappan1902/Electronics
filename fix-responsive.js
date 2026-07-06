const fs = require('fs');

// 1. Fix script.js
let scriptContent = fs.readFileSync('script.js', 'utf8');
scriptContent = scriptContent.replace(
    "navLinks.classList.toggle('active');",
    "navLinks.classList.toggle('nav-active');"
);
fs.writeFileSync('script.js', scriptContent, 'utf8');
console.log('Fixed script.js mobile menu toggle');

// 2. Fix styles.css
let stylesContent = fs.readFileSync('styles.css', 'utf8');

// Fix dashboard table container
stylesContent = stylesContent.replace(
    ".dashboard-table-container { background: white; border-radius: 16px; padding: 2.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }",
    ".dashboard-table-container { background: white; border-radius: 16px; padding: 2.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.03); overflow-x: auto; }"
);

// Add input scaling to the mobile media query block
const inputScalingCSS = `
  /* Input Scaling for mobile */
  input, textarea, select { max-width: 100%; box-sizing: border-box; }
}
`;
stylesContent = stylesContent.replace(
    "  .role-badge { display: none; } /* Hide on small screens for space */\n}",
    "  .role-badge { display: none; } /* Hide on small screens for space */\n" + inputScalingCSS
);

fs.writeFileSync('styles.css', stylesContent, 'utf8');
console.log('Fixed styles.css responsiveness');
