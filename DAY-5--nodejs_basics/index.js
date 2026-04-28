console.log("Synchronous File Read");
const fs = require('fs');

console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');



console.log("Asynchronous File Read");
const fs1 = require('fs');

console.log('1. Starting async read...');
fs1.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');


console.log("Async/Await");
async function processUser(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    await processOrders(orders);
    console.log('All done!');
  } catch (err) {
    handleError(err);
  }
}

async function readFiles() {
  try {
    console.log('1. Starting to read files...');
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log('2. Files read successfully!');
    return { data1, data2 };
  } catch (error) {
    console.error('Error reading files:', error);
  }
}
console.log(readFiles);

console.log("Reading a File with Promises");
const fs2 = require('fs').promises;
const promise1 = Promise.resolve('First result');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));
const promise3 = fs2.readFile('myfile.txt', 'utf8');
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('Results:', results);
  })
  .catch(error => {
    console.error('Error in one of the promises:', error);
  });