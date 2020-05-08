import { FilterEqualExpression } from './filter-equal-expression';

export abstract class FilterExpression {

    public static Eq(path: string, value: any): FilterExpression {
        return new FilterEqualExpression(path, value);
    }

}