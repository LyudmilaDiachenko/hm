addEventListener("DOMContentLoaded", function(){
    document.getElementById("chatbot-input").addEventListener("keypress", keyPressed);
    document.getElementById("chatbot-btn").addEventListener("click", sendMessage);
    
    function keyPressed(event){
        if (event.key == "Enter") {
            sendMessage();
        }
    }

    function sendMessage(){
        var text = document.getElementById("chatbot-input").value;
        if (text){
            document.getElementById("chatbot-messages").innerHTML += `<p class="out-message">${text}</p>`;
            document.getElementById("chatbot-input").value = '';
            chatReply(text);
        }
    }

    function chatReply(text){
        var proto = `H&M може обробляти персональні дані, зібрані під час співбесіди чи опитування, щоб покращити якість послуг, що надаються. Детальну інформацію можна знайти в нашій Політиці конфіденційності`;
        document.getElementById("chatbot-spinner").style.display = "block";
        setTimeout(
            function(){
                var reply = proto.split(" ").sort(() => Math.random() - 0.5).slice(0, 5 + Math.round(45 * Math.random())).join(" ");
                document.getElementById("chatbot-messages").innerHTML += `<p class="in-message">${reply}</p>`;
                document.getElementById("chatbot-spinner").style.display = "none";
            }, 
            1000 + 1000*Math.random()
        );
    }
})
