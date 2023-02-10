import {redirect} from '@sveltejs/kit';

export async function load({ locals, params }) {
    if (!locals.user) {
        throw redirect(301, '/');
    }

    let user = locals.user
    let userRole = locals.role

    return { user, userRole };
}
