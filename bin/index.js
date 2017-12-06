const path = require('path');
const fs = require('fs');

const files = ['gitignore', 'npmignore', 'eslintrc'];

files.forEach(name => {
    const origin = path.resolve(__dirname, `../.${name}`);
    const dest = path.resolve(process.cwd(), `./.${name}`);

    if (!fs.existsSync(dest)) {
        const content = fs.readFileSync(origin, {
            encoding: 'utf-8',
        });
    
        fs.writeFileSync(dest, content, {
            encoding: 'utf-8',
        });
    }
});
