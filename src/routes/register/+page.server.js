import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
    const { user } = await parent();
    if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {

        const data = await request.formData();
        const body = await api.post('users/register', {username: data.get('name'), password: data.get('password') });
        if (body.errors) {
            return fail(401, body);
        }
        const value = body.user;
        cookies.set('jwt', value, { path: '/' });

        throw redirect(307, '/');
    }
};
