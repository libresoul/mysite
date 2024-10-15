export function onRequest(context) {
    const clientIP = context.request.headers.get("CF-Connecting-IP");
    const clientCountry = context.request.headers.get("CF-IPCountry");
    return new Response(
`IP Address: ${clientIP}
Country: ${clientCountry}`
    );
}
