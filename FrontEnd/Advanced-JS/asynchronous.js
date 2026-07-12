
// Asynchronous JavaScript Example


console.log("Program Started");

function downloadFile() {
    console.log("Downloading file...");

    setTimeout(function () {
        console.log("File Downloaded Successfully!");
    }, 3000);
}

downloadFile();

console.log("You can do other work while the file is downloading.");

console.log("Program Ended");