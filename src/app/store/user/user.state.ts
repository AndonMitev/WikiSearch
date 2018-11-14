import { UserModel } from 'src/app/shared/models/user.model';

export class UserState {
  public static stateName = 'User';
  username: string;
  userType: string;
}
