/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
    const jwt = event.cookies.get('jwt');
    event.locals.user = jwt ? jwt : null;

    if (jwt) {
        let jwtParsed = JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString());
        event.locals.role = jwtParsed.role;
    } else {
        event.locals.role = "guest"
    }

    return resolve(event);
}