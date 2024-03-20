import { client_bound_message } from "./store"

export const dispatch = (message: any) => {
    client_bound_message.set(JSON.stringify(message))
}