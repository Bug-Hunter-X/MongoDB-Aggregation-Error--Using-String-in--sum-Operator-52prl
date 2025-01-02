```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Error in this line
  {$sort: {sum: -1}}
]);
```