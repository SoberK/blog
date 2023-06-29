const fs = require('fs');

function naturalSort(a, b) {
    const numRegex = /\d+/g;
    const aNums = a.match(numRegex).map(Number);
    const bNums = b.match(numRegex).map(Number);

    for (let i = 0; i < Math.min(aNums.length, bNums.length); i++) {
        if (aNums[i] !== bNums[i]) {
            return aNums[i] - bNums[i];
        }
    }

    return a.localeCompare(b);
}
function getAllFilesInFolder(folderPath) {
    const files = fs.readdirSync(folderPath);
    const fileNames = [];

    files.forEach((file) => {
        const filePath = `${folderPath}/${file}`;
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            fileNames.push(file);
        } else if (stats.isDirectory()) {
            const nestedFiles = getAllFilesInFolder(filePath);
            fileNames.push(...nestedFiles);
        }
    });

    return fileNames.sort(naturalSort);
}

// 指定文件夹的路径
const folderPath = './docs/interview/vue';

// 获取文件夹中的所有文件名称
const fileNames = getAllFilesInFolder(folderPath);

// 打印文件名称
let arr = []
fileNames.forEach((fileName) => {
    arr.push(`/interview/vue/${fileName.split('.md')[0]}` )
});
console.log(arr);
