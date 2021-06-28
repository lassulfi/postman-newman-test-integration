# Automação dos testes de integração com o Postman e Newman

Projeto de estudos de automação dos testes de integração utilizando as ferramentas Postman e Newman.

Postman é uma ferramenta amplamente utilizada para realizar testes de requisições em APIs. Essa ferramenta é muito completa, sendo possível ao usuário utilizar autenticação, parametrizar suas requisições, executar scritps, e automatizar seus testes.

O Newman é uma ferramenta CLI que também permite a automação da execução das requisições, através do terminal do usuário. Essa ferramenta também permite gerar relatórios HTML, através do pacote newman-reporter-htmlextra

Esse projeto consiste em uma API desenvolvida em Typescript para cálculo de juros compostos.

Para realizar testes os testes esse repositório dispõe de uma collection em Postman, já configurada para recuperar os dados para testes.

Os dados de testes também foram disponibilizados nesse repositório.

Esse projeto dispõe de 3 branches: **main**, **develop** e **untested-branch**. A brach **untested_branch** possui uma versão da API que não contém todas as validações necessárias para passar nos testes. Já a branch **develop** possui a versão da API que já contempla as implementações necessárias para atender os testes.

## Requerimentos e ferramentas necessárias

- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/gettingstarted/)
- [Postman](https://www.postman.com/)
- [NodeJS](https://nodejs.org/en/)
- [Newman](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)
- [newman-reporter-htmlextra](https://www.npmjs.com/package/newman-reporter-htmlextra)

## Executando a aplicação

1. Execute o container com o seguinte comando:

```shell
docker-compose up -d --build
```

2. Acesse o container em modo iterativo

```shell
docker-compose exec app bash
```

3. Executar os testes utilizando no newman-cli:

```shell
newman run postman/compound_interest.postman_collection.json -d tests/data-tests.json
```

4. Gerar o relatório HTML

```shell
newman run postman/compound_interest.postman_collection.json -d tests/data-tests.json -r htmlextra
```
