import { FilterExpression } from './filter-expression';

export abstract class FilterComparisonExpression extends FilterExpression {
    
    public constructor(public path: string) {
        super();
    }
}