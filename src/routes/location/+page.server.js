import * as api from '$lib/api';
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, url }) {
    //if (!locals.token) throw redirect(307, '/login');
    const page = +(url.searchParams.get('page') ?? '1');


    const q = new URLSearchParams();

    q.set('limit', 10);
    q.set('offset', (page - 1) * 10);

    const [{ articles, articlesCount }, { tags }] = await Promise.all([
        api.get(``, locals.token),
    ]);

    return {
        articles,
        pages: Math.ceil(articlesCount / page_size),
        tags
    };
}
