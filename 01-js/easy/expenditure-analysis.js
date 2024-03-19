/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totalspent = new Map();
  for (let i = 0; i < transactions.length; i++) {
    if (totalspent.has(transactions[i].category)) {
      let existingAmount = totalspent.get(transactions[i].category);
      let newAmount = existingAmount + transactions[i].price;
      totalspent.set(transactions[i].category, newAmount);
    } else {
      totalspent.set(transactions[i].category, transactions[i].price);
    }
  }
  let totalSpentArray = [];
  const totalSpentIterations = totalspent[Symbol.iterator]();
  for (const item of totalSpentIterations) {
    totalSpentArray.push({ category: item[0], totalSpent: item[1] });
  }
  return totalSpentArray;
}

module.exports = calculateTotalSpentByCategory;
