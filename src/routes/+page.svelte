<script lang="ts">
    import { client_bound_message } from "$lib/client/store";
    import { onMount } from "svelte";

	let message = "";

    const send_message = () => {
        fetch("/api/talk", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: "FROM_WEB_CLIENT",
                message: message
            })
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    console.log("Response from /api/talk: " + data)
                })
            } else {
                console.log("Failed to send to /api/talk")
            }
        })
        .then(() => {
            message = ""
        })
    }

    let services = []

    onMount(() => {

    })
</script>

<input bind:value={message} placeholder="enter your message"/>
<button on:click={send_message}>Send message</button>
<h1>Realtime message from server: {$client_bound_message}</h1>


