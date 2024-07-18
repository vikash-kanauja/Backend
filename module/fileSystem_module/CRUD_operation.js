const fs = require("fs");

// 1. Create a folder named it newFolder
// fs.mkdirSync("newFolder");

// 2. Create new file in newFolder
// fs.writeFileSync("newFolder/bio.txt", "my name is vikash ");

// 3. read data without buffer data
// let data = fs.readFileSync("newFolder/bio.txt", "utf8");
// console.log(data);

// 4. Rename file name 
// fs.renameSync("newFolder/bio.txt","newFolder/myBio.txt")

// 5. delete file 
// fs.unlinkSync("newFolder/myBio.txt")

// 6. delete folder 
fs.rmdirSync("newFolder")

