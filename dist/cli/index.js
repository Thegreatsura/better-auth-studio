#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from './commands/init.js';
const program = new Command();
program
    .name('better-auth-studio')
    .description('Self-hostable Better Auth dashboard')
    .version('1.0.0');
program
    .command('init')
    .description('Initialize Better Auth Studio in your project')
    .action(async () => {
    await initCommand();
});
program.parse();
//# sourceMappingURL=index.js.map