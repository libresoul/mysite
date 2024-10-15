export function onRequest(context) {
    const clientIP = context.request.headers.get("CF-Connecting-IP");
    const clientCountry = context.request.headers.get("CF-IPCountry");
    // left align all the responses
    return new Response(
    `IP Address: ${clientIP}\n
    Country: ${clientCountry}`
    );
}
