document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    // Limpar erros anteriores
    removeErrors();

    let valid = true;

    // Validação do Nome (não vazio e só letras e espaços)
    const nome = form.nome.value.trim();
    if (!nome || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
      showError(form.nome, "Por favor, insira um nome válido.");
      valid = false;
    }

    // Validação do Email
    const email = form.email.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(form.email, "Por favor, insira um e-mail válido.");
      valid = false;
    }

    // Validação do Assunto
    const assunto = form.assunto.value;
    if (!assunto) {
      showError(form.assunto, "Por favor, selecione um assunto.");
      valid = false;
    }

    // Validação da Mensagem
    const mensagem = form.mensagem.value.trim();
    if (!mensagem || mensagem.length < 10) {
      showError(form.mensagem, "A mensagem deve ter no mínimo 10 caracteres.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
      return;
    }

    // ✅ SE FOR VÁLIDO, IMPEDE O ENVIO PADRÃO E MOSTRA A MENSAGEM
    event.preventDefault(); // evita recarregar a página

    alert("Mensagem enviada com sucesso!");

    // ✅ REDIRECIONAMENTO APÓS 1.5 SEGUNDOS
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  });


if (!valid) {
  event.preventDefault();
  return;
}

// Impede envio e mostra mensagem
event.preventDefault();

// Mostra a mensagem de sucesso
const msg = document.getElementById("mensagem-sucesso");
msg.style.display = "block";

// Redireciona após 2 segundos
setTimeout(() => {
  window.location.href = "home.html";
}, 2000);
