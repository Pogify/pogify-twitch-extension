console.log("abc");

let session;

function linkSession() {
  let input = document.getElementById("sessionId").value;
  console.log(input);
  session = new EventSource("https://messages.pogify.net/sub/" + input + ".b1");
  session.onopen = () => {
    console.log("eventsource opened");
  };
  session.onmessage = ({ data }) => {
    window.Twitch.ext.configuration.set("broadcaster", "1", input);
    window.Twitch.ext.send("broadcast", "text/plain", input);
    let div = document.getElementById("list");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = data;
    div.appendChild(newDiv);
  };
  session.onerror = () => {
    console.error("no such session");
  };
}
