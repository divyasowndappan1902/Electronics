const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if script.js is already included
    if (!content.includes('script.js')) {
        console.log(`Adding script.js to ${file}`);
        
        // Find a good place to insert it. Usually before AOS script or before </body>
        if (content.includes('<script src="https://unpkg.com/aos')) {
            content = content.replace('<script src="https://unpkg.com/aos', '<script src="script.js"></script>\n  <script src="https://unpkg.com/aos');
        } else if (content.includes('</body>')) {
            content = content.replace('</body>', '  <script src="script.js"></script>\n</body>');
        } else {
            content += '\n<script src="script.js"></script>';
        }
        
        fs.writeFileSync(file, content, 'utf8');
    }
});
