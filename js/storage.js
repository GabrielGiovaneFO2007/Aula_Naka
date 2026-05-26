// ─────────────────────────────────────────────────────────────
//  STORAGE — localStorage (dados) + sessionStorage (sessão)
//
//  localStorage  → persiste entre abas e reaberturas do browser
//  sessionStorage → some ao fechar a aba (comportamento de sessão)
// ─────────────────────────────────────────────────────────────

const KEYS = {
  usuarios: "bf_usuarios",
  sessao:   "bf_sessao"
};

// ── Colaboradores ────────────────────────────────────────────

function getUsuarios() {
  return JSON.parse(localStorage.getItem(KEYS.usuarios) || "[]");
}

function _salvarUsuarios(lista) {
  localStorage.setItem(KEYS.usuarios, JSON.stringify(lista));
}

function cpfJaCadastrado(cpf) {
  // CPF do admin também é reservado
  if (cpf === ADMIN.cpf) return true;
  return getUsuarios().some(u => u.cpf === cpf);
}

function buscarUsuarioPorCpf(cpf) {
  return getUsuarios().find(u => u.cpf === cpf) || null;
}

function registrarUsuario(nome, cpf, senha) {
  const lista = getUsuarios();
  lista.push({ nome, cpf, senha, role: "colaborador" });
  _salvarUsuarios(lista);
}

// ── Sessão ───────────────────────────────────────────────────

function getSessao() {
  return JSON.parse(sessionStorage.getItem(KEYS.sessao) || "null");
}

function setSessao(usuario) {
  sessionStorage.setItem(KEYS.sessao, JSON.stringify(usuario));
}

function limparSessao() {
  sessionStorage.removeItem(KEYS.sessao);
}

/**
 * Chame no topo de cada página protegida.
 * Se não houver sessão (ou role errado), redireciona para login.
 * @param {string|null} roleEsperado  "admin" | "colaborador" | null (qualquer)
 * @returns {object} dados da sessão
 */
function exigirLogin(roleEsperado = null) {
  const sessao = getSessao();
  if (!sessao) {
    window.location.href = "index.html";
    return null;
  }
  if (roleEsperado && sessao.role !== roleEsperado) {
    // Role errado → manda de volta para login
    window.location.href = "index.html";
    return null;
  }
  return sessao;
}
