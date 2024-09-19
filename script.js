// Seleciona todos os botões "Read More"
document.querySelectorAll('.read-more-btn').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();  // Evita o comportamento padrão de redirecionamento do link

        // Localiza o elemento .more-text correspondente ao botão clicado
        const moreText = this.previousElementSibling.querySelector('.more-text');

        // Alterna a exibição do texto
        if (moreText.classList.contains('show')) {
            moreText.classList.remove('show');  // Oculta o texto
            this.textContent = 'Read More';  // Altera o texto do botão para "Read More"
        } else {
            moreText.classList.add('show');  // Exibe o texto
            this.textContent = 'Read Less';  // Altera o texto do botão para "Read Less"
        }
    });
});

document.getElementById('send-message-btn').addEventListener('click', function() {
    // Captura os valores dos campos do formulário
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="E-mail"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    // Cria a mensagem a ser enviada
    const whatsappMessage = `*Nome:* ${fullName}%0A*Email:* ${email}%0A*Telefone:* ${phone}%0A*Assunto:* ${subject}%0A*Mensagem:* ${message}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=5521980726041&text=${whatsappMessage}`;

    // Abre o WhatsApp com a mensagem
    window.open(whatsappLink, '_blank');
});


