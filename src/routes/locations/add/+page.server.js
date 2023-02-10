import {fail, redirect} from '@sveltejs/kit';
import * as api from '$lib/api.js'

export async function load({ locals, params }) {
    if (!locals.user) {
        throw redirect(301, '/');
    }
}

export const actions = {
    default: async ({ locals, params }) => {
        const data = await params.formData();

        const location = {
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: data.get('endDate'),
            filmName: data.get('filmName'),
            district: data.get('district'),
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: data.get('startDate'),
            year: data.get('year')
        };

        const body = await api.post('locations/', location, locals.user);

        if (body.errors) {
            return fail(401, body);
        }

        throw redirect(307, '/locations');
    }
};
