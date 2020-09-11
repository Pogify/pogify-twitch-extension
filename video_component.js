window.Twitch.ext.configuration.onChanged(() => {
  let sessionId = window.Twitch.ext.configuration.broadcaster.content;
  let div = document.getElementById("buttonDiv");
  let button = document.createElement("button");
  button.innerHTML = "Join " + sessionId;
  button.onclick = () => {
    window.open("https://www.pogify.net/session/" + sessionId);
  };
  div.appendChild(button);
});
// setTimeout(() => {
// }, 2000);
