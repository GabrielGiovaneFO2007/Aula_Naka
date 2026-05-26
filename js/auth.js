// ─────────────────────────────────────────────────────────────
//  AUTH — login, cadastro, logout
//  Depende de: config.js, storage.js
// ─────────────────────────────────────────────────────────────

/** Retorna true se o CPF tem exatamente 11 dígitos numéricos */
function validarCpf(cpf) {
  return /^\d{11}$/.test(cpf);
}

/**
 * Tenta fazer login.
 * @returns {{ ok: true, role: string } | { ok: false, erro: string }}
 */
function fazerLogin(cpf, senha) {
  if (!validarCpf(cpf)) {
    return { ok: false, erro: "CPF inválido. Informe 11 dígitos numéricos." };
  }
  if (!senha) {
    return { ok: false, erro: "Informe a senha." };
  }

  // Verifica admin fixo primeiro
  if (cpf === ADMIN.cpf && senha === ADMIN.senha) {
    setSessao({ cpf: ADMIN.cpf, nome: ADMIN.nome, role: "admin" });
    return { ok: true, role: "admin" };
  }

  // Verifica colaborador cadastrado
  const usuario = buscarUsuarioPorCpf(cpf);
  if (!usuario || usuario.senha !== senha) {
    return { ok: false, erro: "CPF ou senha incorretos." };
  }

  setSessao({ cpf: usuario.cpf, nome: usuario.nome, role: "colaborador" });
  return { ok: true, role: "colaborador" };
}

/**
 * Tenta cadastrar um novo colaborador.
 * @returns {{ ok: true } | { ok: false, erro: string }}
 */
function cadastrarColaborador(nome, cpf, senha, confirmSenha) {
  if (!nome.trim()) {
    return { ok: false, erro: "Nome é obrigatório." };
  }
  if (!validarCpf(cpf)) {
    return { ok: false, erro: "CPF inválido. Informe 11 dígitos numéricos." };
  }
  if (senha.length < 4) {
    return { ok: false, erro: "Senha deve ter pelo menos 4 caracteres." };
  }
  if (senha !== confirmSenha) {
    return { ok: false, erro: "As senhas não coincidem." };
  }
  if (cpfJaCadastrado(cpf)) {
    return { ok: false, erro: "CPF já cadastrado no sistema." };
  }

  registrarUsuario(nome.trim(), cpf, senha);
  return { ok: true };
}

/** Encerra a sessão e volta para o login */
function fazerLogout() {
  limparSessao();
  window.location.href = "index.html";
}
