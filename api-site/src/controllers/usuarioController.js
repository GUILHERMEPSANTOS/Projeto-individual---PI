var usuarioModel = require("../models/usuarioModel");
const nodemailer = require("nodemailer");
var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            
            if (resultado.length > 0) {
                
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String




                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);

                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var preferencia = req.body.preferencia;

    console.log(`cadastrar --> ${preferencia}`);

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (preferencia == undefined || preferencia == "-" ) {
        res.status(400).send("Sua preferencia está undefined!");
    }else {
        
        usuarioModel.listar(email)
        .then(function(resposta){


            if(resposta[0]== undefined){
                
                usuarioModel.cadastrar(nome, email, senha, preferencia)
                    .then(
    
                        function (resultado) {
                                
                        
                            res.json(resultado);
                            
                            let tranporter = nodemailer.createTransport({
                                host: "smtp.gmail.com", 
                                port: 587,
                                secure: false,
                                auth:{
                                    user: "tesemail113@gmail.com",
                                    pass: "Teste_123"
                                }
                            })
                            
                             tranporter.sendMail ({
                                 from: "Guilherme <tesemail113@gmail.com>",
                                 to: `${email}`,
                                 subject:"Parabéns",
                                 text:"Muito obrigado por contribuir com nosso analytics",
                                 html: "Parabéns você realizou seu Cadastro com sucesso"
                            
                             }).then(message => {
                                 console.log(message);
                             }).catch(err => {
                                 console.log(err);
                             })
        
        
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao realizar o cadastro! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    )

            }else{
                res.json(resposta[0].email)
             }
        

                
        // aqui


        }).catch((erro)=>{
            console.log(erro);
        }  
            )
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}