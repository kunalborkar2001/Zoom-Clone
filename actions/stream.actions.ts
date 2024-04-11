'use server'

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY

export const tokenProvider = async () => {
    const user = await currentUser()

    if (!user) throw new Error("user is not logged in ")
    if (!apiKey) throw new Error("No API key")
    if (!apiSecret) throw new Error("No API secret")


    const client = new StreamClient(apiKey, apiSecret)

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60; //Token Valid for One hour

    const issued = Math.floor(Date.now() / 1000) - 60

    const token = client.createToken(user.id, exp, issued)

    return token
}