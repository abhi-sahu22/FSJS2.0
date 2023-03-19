// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

// ==========SOLUTION========== (Please use terminal for console.log result)

function fileExt(name){
    const extension = name.substring(name.lastIndexOf('.') + 1, name.length);
    return extension;
}

// Please, put name of file with extension to take out extension
const firstFile = fileExt("script.js");
console.log(firstFile);

const secondFile = fileExt("index.html");
console.log(secondFile);

