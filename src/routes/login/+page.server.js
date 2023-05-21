import { redirect } from '@sveltejs/kit';

import { authenticationStatusStore } from './../../lib/classes/user';
let authenticationstatus = 0;



authenticationStatusStore.subscribe(isAuthenticated => {
    authenticationstatus = isAuthenticated;
});

export function load() {
    console.log(authenticationstatus);
    if (authenticationstatus == 1) {
        throw redirect(307, '/dashboard');
    }
}