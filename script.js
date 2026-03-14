const socket = io()

const textarea = document.querySelector("textarea")

// send changes
textarea.addEventListener("input", () => {

socket.emit("send-changes", textarea.value)

})

// receive changes
socket.on("receive-changes", (data) => {

textarea.value = data

})