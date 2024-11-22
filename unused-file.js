const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all files in the project
const projectPath = './app'; // Your source folder
const filesToCheck = glob.sync(
  `${projectPath}/**/*.{js,jsx,css,scss,png,jpg,gif,ts,tsx}`,
);

// Check if a file is imported anywhere in the codebase
filesToCheck.forEach((filePath) => {
  const relativePath = path.relative(projectPath, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  let isUsed = false;

  // Search for imports in all other files
  glob.sync(`${projectPath}/**/*.js`).forEach((file) => {
    const fileContent = fs.readFileSync(file, 'utf8');
    if (fileContent.includes(relativePath)) {
      isUsed = true;
    }
  });

  if (!isUsed) {
    console.log(`${relativePath} is unused`);
  }
});
