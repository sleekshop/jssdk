const fs = require('fs');
const path = require('path');

const directoryPath = './src/routes'; // Change this to the directory you want to scan
const outputFilePath = './method_tree.md';

function scanDirectory(directoryPath, parent = '') {
    const files = fs.readdirSync(directoryPath);
    let tree = '';

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            tree += `${parent}+-- ${file}\n`;
            tree += scanDirectory(filePath, parent + '|  ');
        } else if (path.extname(file) === '.js' || path.extname(file) === '.ts') {
            const content = fs.readFileSync(filePath, 'utf-8');
            const matches = content.match(/public\s+async\s+(\w+)\(/g);

            if (matches) {
                tree += `${parent}+-- ${file.split('.ts')[0]}\n`;
                matches.forEach((match) => {
                    const methodName = match.match(/public\s+async\s+(\w+)\(/)[1];
                    tree += `${parent}|  +-- .${methodName}()\n`;
                });
            }
        }
    });

    return tree;
}

function generateMarkdownFile(tree) {
    fs.writeFileSync(outputFilePath, tree, 'utf-8');
    console.log(`Method tree file created at: ${outputFilePath}`);
}

const tree = scanDirectory(directoryPath);
generateMarkdownFile(tree);
