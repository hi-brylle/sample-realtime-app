import { dispatch } from "$lib/client/client-msg-dispatcher"

let global_app_events_sse: EventSource

setTimeout(() => {
    global_app_events_sse = new EventSource("/api/listen")
    global_app_events_sse.onopen = (event: Event) => {
        console.log("Connected to SSE.")
    }
    global_app_events_sse.onerror = (event: any) => {
        console.log("Failed to open SSE connection: " + event.data)
        console.log("Retrying connection...")
        global_app_events_sse = new EventSource("/api/listen")
    }
    global_app_events_sse.onmessage = (event: any) => {
        console.log("Server-sent event received:")
        dispatch(JSON.parse(event.data))
    }
}, 3000)


