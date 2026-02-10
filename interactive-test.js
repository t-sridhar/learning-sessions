#!/usr/bin/env node

/**
 * INTERACTIVE JAVASCRIPT TESTING TOOL
 *
 * This script helps you test small code snippets interactively
 * Great for experimenting with JavaScript concepts!
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'JS> '
});

console.log('╔═══════════════════════════════════════════════╗');
console.log('║   Interactive JavaScript Testing Console     ║');
console.log('╚═══════════════════════════════════════════════╝\n');
console.log('Type JavaScript code and press Enter to run it');
console.log('Type ".help" for commands, ".exit" to quit\n');

// Store variables between commands
const context = {};

rl.prompt();

rl.on('line', (line) => {
    const input = line.trim();

    // Special commands
    if (input === '.exit' || input === '.quit') {
        console.log('\n👋 Goodbye! Happy coding!\n');
        process.exit(0);
    }

    if (input === '.help') {
        console.log('\n📚 Available Commands:');
        console.log('  .help     - Show this help');
        console.log('  .exit     - Exit the console');
        console.log('  .clear    - Clear all variables');
        console.log('  .vars     - Show all variables');
        console.log('  .examples - Show example code\n');
        rl.prompt();
        return;
    }

    if (input === '.clear') {
        for (let key in context) {
            delete context[key];
        }
        console.log('✅ All variables cleared\n');
        rl.prompt();
        return;
    }

    if (input === '.vars') {
        console.log('\n📋 Current Variables:');
        if (Object.keys(context).length === 0) {
            console.log('  (none)');
        } else {
            for (let key in context) {
                console.log(`  ${key} = ${JSON.stringify(context[key])}`);
            }
        }
        console.log();
        rl.prompt();
        return;
    }

    if (input === '.examples') {
        console.log('\n💡 Try these examples:\n');
        console.log('Variables:');
        console.log('  let name = "Alice"');
        console.log('  let age = 25');
        console.log('  console.log(`Hello, ${name}`)');
        console.log('\nArrays:');
        console.log('  let numbers = [1, 2, 3, 4, 5]');
        console.log('  numbers.map(n => n * 2)');
        console.log('  numbers.filter(n => n > 2)');
        console.log('\nObjects:');
        console.log('  let user = { name: "Bob", age: 30 }');
        console.log('  user.name');
        console.log('\nFunctions:');
        console.log('  const greet = (name) => `Hello, ${name}!`');
        console.log('  greet("World")');
        console.log();
        rl.prompt();
        return;
    }

    // Skip empty lines
    if (!input) {
        rl.prompt();
        return;
    }

    // Execute JavaScript
    try {
        // Create a function with context as parameters
        const contextKeys = Object.keys(context);
        const contextValues = contextKeys.map(key => context[key]);

        const func = new Function(...contextKeys, `
            ${input.startsWith('return') ? input : 'return ' + input}
        `);

        const result = func(...contextValues);

        // Display result
        if (result !== undefined) {
            console.log('→', result);

            // Check if it's a variable assignment
            const varMatch = input.match(/^(?:let|const|var)\s+(\w+)\s*=/);
            if (varMatch) {
                const varName = varMatch[1];
                // Execute again to capture the value
                const captureFunc = new Function(...contextKeys, `
                    ${input}
                    return ${varName};
                `);
                context[varName] = captureFunc(...contextValues);
            }
        }
    } catch (error) {
        // Try executing as statement
        try {
            const contextKeys = Object.keys(context);
            const contextValues = contextKeys.map(key => context[key]);

            const func = new Function(...contextKeys, input);
            func(...contextValues);

            // Check for variable assignments
            const varMatch = input.match(/^(?:let|const|var)\s+(\w+)\s*=/);
            if (varMatch) {
                const varName = varMatch[1];
                const captureFunc = new Function(...contextKeys, `
                    ${input}
                    return ${varName};
                `);
                context[varName] = captureFunc(...contextValues);
            }
        } catch (err) {
            console.log('❌ Error:', err.message);
        }
    }

    rl.prompt();
});

rl.on('close', () => {
    console.log('\n👋 Goodbye! Happy coding!\n');
    process.exit(0);
});
