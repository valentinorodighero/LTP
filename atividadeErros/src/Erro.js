class CadastroError extends Error {
    constructor(mensagem, campos) {
        super(mensagem);
        this.campos = campos;
        this.nome = "CadastroError";
    }
}
function validarCadastro(dados) {
    const erros = [];
    if (!dados.nome || dados.nome.length < 3) {
        erros.push("Nome deve ter pelo menos 3 caracteres.");
    }
    if (!dados.email || !dados.email.includes("@")) {
        erros.push("Email inválido.");
    }
    if (!dados.senha || dados.senha.length < 6) {
        erros.push("Senha deve ter pelo menos 6 caracteres.");
    }
    if (!dados.idade || dados.idade < 18) {
        erros.push("Idade deve ser maior ou igual a 18.");
    }

    if (erros.length > 0) {
        throw new CadastroError("Erro no cadastro", erros);
    }
    return true;
}

function processarCadastro(dados) {
    try {
        validarCadastro(dados);
        return { sucesso: true, dados: dados };
    } catch (erro) {
        if (erro instanceof CadastroError) {
            return { sucesso: false, erros: erro.campos };
        }
        throw erro;
    }
}

console.log(processarCadastro({
    nome: "João Silva",
    email: "joao@email.com",
    senha: "123456",
    idade: 20
}));

console.log(processarCadastro({
    nome: "Jo",
    email: "email-invalido",
    senha: "123",
    idade: 16
}));