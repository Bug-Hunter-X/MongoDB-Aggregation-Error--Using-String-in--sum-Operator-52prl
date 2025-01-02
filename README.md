# MongoDB Aggregation Error: Using String in $sum Operator

This repository demonstrates a common error in MongoDB aggregation pipelines where a string is mistakenly used instead of a numerical field in the `$sum` operator within the `$group` stage.  This leads to incorrect aggregation results.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The `$sum` operator in the `$group` stage requires a numerical field as input. Using a string will produce incorrect results, potentially leading to unexpected behavior.

## Solution

Ensure you're using a numerical field when using `$sum` in your MongoDB aggregation pipeline. Correct data types in your documents are crucial for proper aggregation. 