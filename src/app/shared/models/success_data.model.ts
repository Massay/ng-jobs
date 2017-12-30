import {User} from './user.model';

export class LoginResultFormat {
     message: string;
     status: boolean;
     data: {
       token: string,
       user: User
     };
     error: boolean;
}
