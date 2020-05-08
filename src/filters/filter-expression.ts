import { FilterEqualExpression } from './filter-equal-expression';
import { FilterAndExpression } from './filter-and-expression';
import { FilterOrExpression } from './filter-or-expression';

export abstract class FilterExpression {

    public static Eq(path: string, value: any): FilterExpression {
        return new FilterEqualExpression(path, value);
    }

    public static And(children: Array<FilterExpression>): FilterExpression {
        return new FilterAndExpression(children);
    }

    public static Or(children: Array<FilterExpression>): FilterExpression {
        return new FilterOrExpression(children);
    }
}