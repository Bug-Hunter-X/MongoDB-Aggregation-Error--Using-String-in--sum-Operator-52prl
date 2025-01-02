```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: "$field", sum: {$sum: $anotherField}}}, //Corrected line
  {$sort: {sum: -1}}
]);
```