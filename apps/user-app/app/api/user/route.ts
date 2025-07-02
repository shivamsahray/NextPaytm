import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
// Update the import path if the actual location is different, for example:
import { authOptions } from "../../lib/auth";
// Or ensure that '../../lib/auth.ts' exists and exports 'authOptions'

export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (session.user) {
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}