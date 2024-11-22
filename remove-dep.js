const { execSync } = require('child_process');
const depcheck = require('depcheck');

const options = {
  ignoreDirs: ['dist', 'node_modules'], // Directories to ignore
  ignorePatterns: ['*.test.js'], // Files to ignore
};

console.log('Checking for unused dependencies...');
depcheck(process.cwd(), options).then((unused) => {
  if (unused.dependencies.length === 0) {
    console.log('No unused dependencies found.');
    return;
  }

  console.log('Unused dependencies:', unused.dependencies);

  console.log('Removing unused dependencies...');
  unused.dependencies.forEach((dep) => {
    try {
      console.log(`Uninstalling ${dep}...`);
      execSync(`npm uninstall ${dep}`);
    } catch (error) {
      console.error(`Failed to uninstall ${dep}:`, error.message);
    }
  });

  console.log('Unused dependencies removed successfully.');
});
