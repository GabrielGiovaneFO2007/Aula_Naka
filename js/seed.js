// ─────────────────────────────────────────────────────────────
//  SEED — dados falsos para demonstração do protótipo
//  Só roda uma vez (verifica flag no localStorage).
//  Remova este arquivo (e as tags <script> dele) em produção.
// ─────────────────────────────────────────────────────────────

(function seedDados() {
  if (localStorage.getItem("bf_seeded")) return;

  // ── Colaboradores ────────────────────────────────────────────
  const colaboradores = [
    { nome: "Carlos Mendes",    cpf: "12345678901", senha: "1234", role: "colaborador" },
    { nome: "Fernanda Lima",    cpf: "98765432100", senha: "1234", role: "colaborador" },
    { nome: "Bruno Oliveira",   cpf: "11122233344", senha: "1234", role: "colaborador" },
    { nome: "Juliana Santos",   cpf: "55566677788", senha: "1234", role: "colaborador" },
    { nome: "Rafael Carvalho",  cpf: "44433322211", senha: "1234", role: "colaborador" },
  ];
  localStorage.setItem("bf_usuarios", JSON.stringify(colaboradores));

  // ── Clientes ─────────────────────────────────────────────────
  const clientes = [
    { nome: "Anderson Rocha",   cpf: "31122233300", telefone: "62991110001", pix: "anderson@pix.com",   ultimaCompra: "2026-05-10" },
    { nome: "Patrícia Souza",   cpf: "32233344411", telefone: "62992220002", pix: "patricia@pix.com",   ultimaCompra: "2026-04-22" },
    { nome: "Diego Ferreira",   cpf: "33344455522", telefone: "62993330003", pix: "diego@pix.com",       ultimaCompra: "2026-05-18" },
    { nome: "Larissa Gomes",    cpf: "34455566633", telefone: "62994440004", pix: "larissa@pix.com",     ultimaCompra: "2026-03-30" },
    { nome: "Tiago Almeida",    cpf: "35566677744", telefone: "62995550005", pix: "tiago@pix.com",       ultimaCompra: "2026-05-25" },
    { nome: "Camila Ribeiro",   cpf: "36677788855", telefone: "62996660006", pix: "camila@pix.com",      ultimaCompra: "2026-02-14" },
    { nome: "Marcelo Pereira",  cpf: "37788899966", telefone: "62997770007", pix: "marcelo@pix.com",     ultimaCompra: "2026-05-20" },
  ];
  localStorage.setItem("bf_clientes", JSON.stringify(clientes));

  // ── Produtos ─────────────────────────────────────────────────
  const produtos = [
    { id: 1, nome: "Pomada Modeladora Forte",   marca: "Barber Pro",   categoria: "Finalizador", preco: 32.90, estoque: 48, validade: "2027-06-01" },
    { id: 2, nome: "Shampoo Anticaspa 300ml",   marca: "CleanCut",     categoria: "Shampoo",     preco: 18.50, estoque: 35, validade: "2028-01-15" },
    { id: 3, nome: "Óleo para Barba 30ml",      marca: "BeardKing",    categoria: "Barba",       preco: 27.00, estoque: 22, validade: "2027-09-10" },
    { id: 4, nome: "Cera Matte Texturizante",   marca: "Barber Pro",   categoria: "Finalizador", preco: 29.90, estoque: 15, validade: "2027-05-20" },
    { id: 5, nome: "Loção Pós-barba 100ml",     marca: "SmoothFace",   categoria: "Barba",       preco: 22.00, estoque: 40, validade: "2028-03-01" },
    { id: 6, nome: "Condicionador Hidratante",  marca: "CleanCut",     categoria: "Condicionador",preco: 21.00, estoque: 28, validade: "2028-02-10" },
    { id: 7, nome: "Gel Fixador Extra Forte",   marca: "HoldMax",      categoria: "Finalizador", preco: 14.90, estoque:  8, validade: "2027-07-30" },
  ];
  localStorage.setItem("bf_produtos", JSON.stringify(produtos));

  // ── Pedidos (histórico) ───────────────────────────────────────
  const pedidos = [
    { id: 1, clienteCpf: "31122233300", clienteNome: "Anderson Rocha",  colaboradorCpf: "12345678901", itens: [{ produtoId: 1, nome: "Pomada Modeladora Forte", qty: 2, precoUnit: 32.90 }], total: 65.80, status: "Concluído", data: "2026-05-10" },
    { id: 2, clienteCpf: "32233344411", clienteNome: "Patrícia Souza",  colaboradorCpf: "98765432100", itens: [{ produtoId: 3, nome: "Óleo para Barba 30ml",    qty: 1, precoUnit: 27.00 }, { produtoId: 2, nome: "Shampoo Anticaspa 300ml", qty: 1, precoUnit: 18.50 }], total: 45.50, status: "Concluído", data: "2026-04-22" },
    { id: 3, clienteCpf: "33344455522", clienteNome: "Diego Ferreira",  colaboradorCpf: "11122233344", itens: [{ produtoId: 5, nome: "Loção Pós-barba 100ml",   qty: 3, precoUnit: 22.00 }], total: 66.00, status: "Pendente",  data: "2026-05-18" },
    { id: 4, clienteCpf: "35566677744", clienteNome: "Tiago Almeida",   colaboradorCpf: "44433322211", itens: [{ produtoId: 4, nome: "Cera Matte Texturizante", qty: 2, precoUnit: 29.90 }, { produtoId: 7, nome: "Gel Fixador Extra Forte",  qty: 1, precoUnit: 14.90 }], total: 74.70, status: "Concluído", data: "2026-05-25" },
    { id: 5, clienteCpf: "37788899966", clienteNome: "Marcelo Pereira", colaboradorCpf: "12345678901", itens: [{ produtoId: 6, nome: "Condicionador Hidratante",qty: 2, precoUnit: 21.00 }], total: 42.00, status: "Concluído", data: "2026-05-20" },
  ];
  localStorage.setItem("bf_pedidos", JSON.stringify(pedidos));

  // Marca como seeded
  localStorage.setItem("bf_seeded", "1");
})();
