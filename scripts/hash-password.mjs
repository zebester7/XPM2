/**
 * Prints the ADMIN_PASSWORD_HASH value for a password.
 * Usage: node scripts/hash-password.mjs            (prompts for the password)
 *    or: node scripts/hash-password.mjs "<password>"
 */
import readline from 'node:readline';
import { hashPassword } from '../api/_lib/auth.js';

let password = process.argv[2];
if (!password) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  password = await new Promise(resolve => rl.question('Admin password: ', answer => { rl.close(); resolve(answer); }));
}
if (password.length < 8) {
  console.error('Use at least 8 characters.');
  process.exit(1);
}
console.log(hashPassword(password));
