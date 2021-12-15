let button = document.getElementById('open-chat')

button.addEventListener('click', btnHandler)

function btnHandler() {
  tidioChatApi.open()
}