export async function onRequest(context) {
    const clientIP = context.request.headers.get("CF-Connecting-IP");
    const alphacode = context.request.headers.get("CF-IPCountry");
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${alphacode}?fields=name`);
    const cdetails = await response.json();
    
    return new Response(
`IP Address: ${clientIP}
Country: ${JSON.stringify(cdetails.name.common)}`
    );
}

