import { FilterLogicalExpression } from './filter-logical-expression';
import { FilterExpression } from './filter-expression';

export abstract class FilterLogicalMultipleExpression extends FilterLogicalExpression {

    public constructor(public children: Array<FilterExpression>) {
        super();
    }
}