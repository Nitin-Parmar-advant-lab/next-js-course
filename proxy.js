import { NextResponse } from "next/server";

export function proxy(req) {
    // this middleware is for chcking data before the getting to the actull server like checking user response or filtering or checking authentication status

    //this function run for every request

    console.log(req);
    
    // let user goto the next file/in-flow
    return NextResponse.next();

    // for redirecting the user
    // return NextResponse.redirect()
}

// this object is used for filtering, means pass only stuff that are configered in below object to the middleware 
export const config = {
    matcher: '/news'
}