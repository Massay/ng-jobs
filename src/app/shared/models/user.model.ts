import {Job} from './job.model';
import {Role} from './role.model';
export class User {
   id: number;
   name: string;
   userable_id: number;
   userable_type: string;
   created_at: string;
   updated_at: string;
   jobs: Job[];
   roles: any[];
}
