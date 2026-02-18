import { copyFile, rm } from 'fs/promises';
import { join } from 'path';

const PACKAGE_README_PATH = '../../projects/shared-ui/README.md';
const DIST_README_PATH = 'README.md';
const LICENSE_PATH = '../../LICENSE';

async function main() {
    await rm(join(process.cwd(), DIST_README_PATH));

    await copyFile(join(process.cwd(), PACKAGE_README_PATH), join(process.cwd(), 'README.md'));
    await copyFile(join(process.cwd(), LICENSE_PATH), join(process.cwd(), 'LICENSE'));
}

main().catch((error) => {
    console.error(`✗ PrepublishOnly failed: ${error.message}`);
    process.exit(1);
});
