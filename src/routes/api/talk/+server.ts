import message_sender from "$lib/server/message-sender"
import type { RequestHandler } from "@sveltejs/kit"

/**
 * Change PIN. Can be used by both client and web backend.
*/
export const POST = (async ({ request }) => {
    const payload = await request.json()
    console.log(payload)
    message_sender.send_message_to_clients(payload)
    return new Response(JSON.stringify(`Message received: ${JSON.stringify(payload)}`))
}) satisfies RequestHandler