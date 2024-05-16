const fs = require('fs');
const path = require('path');

const directoryPath = './src'; // Change this to the directory you want to scan
const outputFilePath = './definitions.md';

function scanDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    let definitions = '';

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Recursively scan subdirectories
            definitions += scanDirectory(filePath);
        } else if (path.extname(file) === '.js' || path.extname(file) === '.ts') {
            // Read the file content
            const content = fs.readFileSync(filePath, 'utf-8');
            const matches = content.match(/\/\*\*[\s\S]*?\*\/\s*public\s+async\s+\w+\([\s\S]*?\)\s*:\s*Promise<[\s\S]*?>\s*{/g);

            if (matches) {
                definitions += `## ${file.split('.ts')[0]}\n\n`;
                matches.forEach((match) => {
                    definitions += formatComment(match) + '\n\n';
                    definitions += '---\n\n';
                });
            }
        }
    });

    return definitions;
}

function formatComment(comment) {
    const lines = comment.split('\n').map(line => line.trim());
    const formattedLines = [];
    let methodName = '';
    let methodSignature = '';
    let returnType = '';

    let isInCommentBlock = false;
    let isInSignature = false;

    lines.forEach(line => {
        if (line.startsWith('/**')) {
            isInCommentBlock = true;
            formattedLines.push('```javascript');
        }

        if (isInCommentBlock) {
            if (line.startsWith('* @method')) {
                methodName = line.replace('* @method ', '');
            } else if (line.startsWith('* @param')) {
                const param = line.replace('* @param ', '').split(' ');
                const type = param.shift().replace('{', '').replace('}', '');
                const paramName = param.shift();
                const description = param.join(' ');
                formattedLines.push(`- **Parameter**: \`${paramName}\` (${type}) - ${description}`);
            } else if (line.startsWith('* @return')) {
                returnType = line.replace('* @return ', '').replace('{', '').replace('}', '');
                formattedLines.push(`- **Returns**: ${returnType}`);
            }
        }

        if (line.endsWith('*/')) {
            isInCommentBlock = false;
        }

        if (line.match(/public\s+async\s+\w+\(/)) {
            isInSignature = true;
            methodSignature += `${line}`;
        } else if (isInSignature) {
            methodSignature += `${line}`;
            if (line.includes(')')) {
                isInSignature = false;
            }
        }

        if (!isInCommentBlock && !isInSignature && line.includes('Promise')) {
            const promiseMatch = line.match(/Promise<([\s\S]*?)>/);
            if (promiseMatch) {
                returnType = promiseMatch[1];
                formattedLines.push(`- **Returns**: ${returnType}`);
            }
        }
    });

    formattedLines.push('```');

    return `### \`.${methodName}()\`\n\n\`\`\`typescript\n${methodSignature.trim()}\n\`\`\`\n\n${formattedLines.join('\n')}`;
}

function generateMarkdownFile(definitions) {
    fs.writeFileSync(outputFilePath, definitions, 'utf-8');
    console.log(`Definitions file created at: ${outputFilePath}`);
}

const definitions = scanDirectory(directoryPath);
generateMarkdownFile(definitions);
