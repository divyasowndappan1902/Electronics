const fs = require('fs');

const dir = 'c:/Users/Admin/Desktop/Demo';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(dir + '/' + file, 'utf8');
  let originalContent = content;
  
  content = content.replace(/ðŸ””/g, '🔔');
  content = content.replace(/ðŸ’¬/g, '💬');
  content = content.replace(/âœ•/g, '✕');
  
  // Need to be careful with trailing bytes
  content = content.replace(/ðŸ\x8F /g, '🏠'); // House
  content = content.replace(/ðŸ\x8F¢/g, '🏢'); // Office building
  
  content = content.replace(/â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢/g, '••••••••');
  content = content.replace(/â‚¬/g, '€');
  
  if (content !== originalContent) {
    fs.writeFileSync(dir + '/' + file, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
}
