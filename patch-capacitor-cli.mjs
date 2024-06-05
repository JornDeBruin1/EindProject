import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configFilePath = join(__dirname, 'node_modules/@capacitor/cli/dist/config.js');

try {
	let data = await readFile(configFilePath, 'utf8');
	data = data.replace(
		'const extConfig = require(configPath);',
		'const extConfig = await import(configPath);'
	);
	await writeFile(configFilePath, data, 'utf8');
	console.log('Patched Capacitor CLI to use dynamic import.');
} catch (err) {
	console.error('Error patching Capacitor CLI:', err);
}
