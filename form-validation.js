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

    // Validação do Email (email válido)
    const email = form.email.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(form.email, "Por favor, insira um e-mail válido.");
      valid = false;
    }

    // Validação do Assunto (selecionado)
    const assunto = form.assunto.value;
    if (!assunto) {
      showError(form.assunto, "Por favor, selecione um assunto.");
      valid = false;
    }

    // Validação da Mensagem (mínimo 10 caracteres)
    const mensagem = form.mensagem.value.trim();
    if (!mensagem || mensagem.length < 10) {
      showError(form.mensagem, "A mensagem deve ter no mínimo 10 caracteres.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
  });

  // Função para mostrar erro abaixo do campo
  function showError(element, message) {
    const error = document.createElement("div");
    error.className = "form-error";
    error.style.color = "var(--vermelho)";
    error.style.marginTop = "0.3rem";
    error.style.fontSize = "0.9rem";
    error.textContent = message;
    element.parentElement.appendChild(error);
    element.style.borderColor = "var(--vermelho)";
  }

  // Remove erros antigos antes de nova validação
  function removeErrors() {
    const errors = document.querySelectorAll(".form-error");
    errors.forEach(err => err.remove());

    // Resetar bordas
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => input.style.borderColor = "var(--cinza-medio)");
  }
});
