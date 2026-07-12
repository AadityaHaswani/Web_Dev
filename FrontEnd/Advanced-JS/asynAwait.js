// Async / Await Example

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received Successfully!");
        }, 3000);
    });
}

async function getData() {
    console.log("Fetching Data...");

    const result = await fetchData();

    console.log(result);
    console.log("Task Completed!");
}

getData();

console.log("This line executes immediately.");