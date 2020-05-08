import * as BSON from 'bson';
import { FilterEqualExpression } from './filters/filter-equal-expression';

// const doc = {
//     $and: [
//         {
//             name: { $eq: 'Leon' }
//         }
//     ]
// };
// const data = BSON.serialize(doc);

// const doc_2 = BSON.deserialize(data);
// console.log('doc_2:', doc_2);
// console.log('data:', data);


// let filter = {};

let ep1 = new FilterEqualExpression('name', 'Leon');