import {Level} from './level.model';
import {Status} from './status.model';
import { Category } from './category.model';
import {Type} from './type.model';

export class Job{
    id: number;
    title: string;
    summary: string;
    type_id: number;
    level_id: number;
    status_id: number;
    categories: any[];
    type: Type;
    level: Level;
    status: Status;
    closing_date: string;
    price: number;
    created_at: string;
}
