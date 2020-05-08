import { FilterComparisonExpression } from './filter-comparison-expression';

export class FilterEqualExpression extends FilterComparisonExpression {

    public constructor(path: string, public value: any) {
        super(path);
    }
    
}