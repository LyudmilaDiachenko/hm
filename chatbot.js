addEventListener("DOMContentLoaded", function(){
    const input = document.getElementById("chatbot-input");
    const btn = document.getElementById("chatbot-btn");
    const messages = document.getElementById("chatbot-messages");
    const spinner = document.getElementById("chatbot-spinner");
    const container = document.getElementById("chatbot-massages-scroll");

    input.addEventListener("keypress", keyPressed);
    btn.addEventListener("click", sendMessage);
    
    function keyPressed(event){
        if (event.key == "Enter") {
            sendMessage();
        }
    }

    function sendMessage(){
        var text = input.value;
        if (text){
            messages.innerHTML += `<p class="out-message">${text}</p>`;
            input.value = '';
            chatReply(text);
        }
    }

    function chatReply(text){
        var proto = `H&M може обробляти персональні дані, зібрані під час співбесіди чи опитування, щоб покращити якість послуг, що надаються. Детальну інформацію можна знайти в нашій Політиці конфіденційності`;
        spinner.style.display = "block";
        scrollDown();
        setTimeout(
            function(){
                var reply = proto.split(" ").sort(() => Math.random() - 0.5).slice(0, 5 + Math.round(45 * Math.random())).join(" ");
                messages.innerHTML += `<p class="in-message">${reply}</p>`;
                spinner.style.display = "none";
                scrollDown();
            }, 
            1000 + 1000*Math.random()
        );
    }

    function scrollDown(){
        container.scrollTop = messages.clientHeight;
    }
})
