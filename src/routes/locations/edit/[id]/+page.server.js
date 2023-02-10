import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

export async function load({ locals, params }) {
    if (!locals.user) throw redirect(302, `/login`);

    const location = await api.get(`locations/${params.id}`, locals.user);
    return { location };
}

export const actions = {
    default: async ({ locals, params, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const result = await api.patch(`locations/${params.id}`, {
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
            }, locals.user
        );

        if (result.errors) throw error(400, result.errors);

        throw redirect(303, `/locations`);
    }
};
