// export async function GET() {
//     return  new Response ('TEXT')
// }

export async function GET(req) {
    // const type = req.nextUrl.searchparams.get('type')
    const type = new URL(req.url).searchParams.get('type');
    console.log("type",type);
    return Response.json([
        {name:"manikandan"},
        {name:"Vijaykanth"}
    ])
}

export async function POST(req) {
   const body =  await req.json()
   console.log(body);
    return Response.json([
        {message:"success"},
    ])
}