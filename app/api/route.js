export function GET(req) {
    console.log(req);

    // Json response :
    // return Response.json()

    return new Response("Helo");
}

// export function POST(req) {}
