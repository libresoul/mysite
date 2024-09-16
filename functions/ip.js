export function onRequest(context) {
    const clientIP = context.request.headers.get('CF-Connecting-IP');
    return new Response(`${clientIP}`);
}

