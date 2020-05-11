import { FilterLogicalExpression } from './filter-logical-expression';
import { FilterExpression } from './filter-expression';

export abstract class FilterLogicalMultipleExpression extends FilterLogicalExpression {

    public children: Array<FilterExpression>;
    public constructor(children: Array<FilterExpression>) {
        super();
        this.children = children;
    }
}