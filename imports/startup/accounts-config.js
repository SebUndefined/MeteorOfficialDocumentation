/**
 * Created by sebby on 24/11/17.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});