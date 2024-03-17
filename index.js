import fs from 'fs';
import path from 'path';
import { argv } from 'process';

// Function to rename files in all directories starting from a given directory
async function renameFilesInDirectory(startPath, extReplace, extReplaceWith ) {
  // Check if the start path exists and is a directory
  if (!fs.existsSync(startPath)) {
    console.log("Directory does not exist:", startPath);
    return;
  }

  const filesAndDirs = fs.readdirSync(startPath);

  filesAndDirs.forEach((name) => {
    const filePath = path.join(startPath, name);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If it's a directory, recurse into it
      renameFilesInDirectory(filePath, extReplace, extReplaceWith);
    } else {
      // If it's a file, rename it
      if(name != 'index.js' && path.extname(name) == `.${extReplace}`)
      {
        console.log(name)
        const newFileName = path.basename(name, `${extReplace}`) + `${extReplaceWith}`;
        const newFilePath = path.join(startPath, newFileName);
        fs.renameSync(filePath, newFilePath);
        console.log(`Renamed ${filePath} to ${newFilePath}`);
      }
    }
  });
}

if(argv[2] && argv[3] && argv[4])
    renameFilesInDirectory(argv[2], argv[3], argv[4]);
else
    console.log('Please Specify Start Path, Extension to be Replaced & Extension to be Replaced with to begin');