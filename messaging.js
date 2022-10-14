// General selectors
const textinput = document.querySelector (".messaging");
const textbox = document.querySelector (".textbox");
// creates sent text message
textinput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && textinput.value != '') {
      const newMessage = document.createElement("newMessage");
      newMessage.classList.add("box","bordered2","is-shadowless")
      newMessage.innerText = textinput.value;
      textbox.appendChild(newMessage);
      textinput.value = '';
      // add server side stuff here!! for now we have some placeholder stuff NPCconversation is the function you want to use to add any incoming chat message
        setTimeout(() => {
        NPCconversation("Hello!")
          }, 1000)
      setTimeout(() => {
        NPCconversation("My name is Joe!")
          }, 2500)
      setTimeout(() => {
        NPCconversation("How's your day going?")
          }, 4500)
      
      
      
    }
});

function NPCconversation(words){
  const newMessage2 = document.createElement("newMessage2");
      textbox.appendChild(newMessage2);
      newMessage2.classList.add("box","bordered2","is-shadowless")
      newMessage2.innerText = words;
}


