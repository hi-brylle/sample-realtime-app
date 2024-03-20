import message_sender from "$lib/server/message-sender"
import type { RequestHandler } from "@sveltejs/kit"

/**
 * Endpoint for listening to server-sent events.
*/
export const GET = (async ({ request }) => {
    const stream = new ReadableStream({
        start(controller) {
            message_sender.message_stream.on("data", (data) => {
                try {
                    controller.enqueue(`data:${data}\n\n`)  
                } catch(e) {
                    console.log("Couldn't enqueue data: " + e)
                }
            })
        }
    })
    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Connection": "keep-alive",
        }
    })
}) satisfies RequestHandler