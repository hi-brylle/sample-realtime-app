import { Bonjour } from "bonjour-service";
let bonj = new Bonjour();
bonj.publish({
    name: "Sample Real-time App",
    type: "http",
    port: 5173 })

bonj.find({type: "http"}, (service: any) => {
    console.log('Found an HTTP server: ', service)
    console.log('Type: ', typeof service)
})


