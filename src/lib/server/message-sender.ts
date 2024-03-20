import { PassThrough } from 'node:stream'

/**
 * Class that abstracts sending of server-sent events to the frontend.
 * It uses Node's PassThrough stream to direct messages to the GET endpoint
 * that the frontend listens to for SSEs.
*/
export class MessageSender {
    message_stream =  new PassThrough()

    send_message_to_clients = (message: any) => {
        this.message_stream.write(JSON.stringify(message))
    }
}

const message_sender = new MessageSender()
export default message_sender