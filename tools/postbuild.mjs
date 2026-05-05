import { copyFile, rm } from 'fs/promises';
import { join } from 'path';

const README_FILE_NAME = 'README.md';
const SOURCE_README_PATH = join(process.cwd(), `./src/${README_FILE_NAME}`);
const DIST_README_PATH = join(process.cwd(), `./dist/shared-ui/${README_FILE_NAME}`);

const LICENSE_FILE_NAME = 'LICENSE';
const SOURCE_LICENSE_PATH = join(process.cwd(), `./${LICENSE_FILE_NAME}`);
const DESTINATION_LICENSE_PATH = join(process.cwd(), `./dist/shared-ui/${LICENSE_FILE_NAME}`);

async function main() {
    await rm(DIST_README_PATH);

    await copyFile(SOURCE_README_PATH, DIST_README_PATH);
    await copyFile(SOURCE_LICENSE_PATH, DESTINATION_LICENSE_PATH);
}

main().catch((error) => {
    console.error(`✗ PrepublishOnly failed: ${error.message}`);
    process.exit(1);
});
