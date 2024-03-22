import { NextResponse } from "next/server"
import { json } from "stream/consumers"

export const GET = async(request: Request) =>{
    return new NextResponse(JSON.stringify({message: "Hello from api"}), {status: 200})
}

