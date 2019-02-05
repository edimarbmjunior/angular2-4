# angular2-4

### Pré-requisito

Instalar node e npm.

## Instalação

Antes de baixar o projeto deve ser executado alguns comandos.

 ```
 npm install -g typescript
 npm i -g @angular/cli
 ```

### Sub-Projeto primeiro-projeto

 ```
 *npm install* - Caso seja necessário pois, para instalar os modulos
 ```

### Sub-Projeto hello-typescript

 ```
 *npm install* - Caso seja necessário pois, para instalar os modulos
 ```

### Sub-Projeto data-binding

```
*npm install* - Caso seja necessário pois, para instalar os modulos
*npm install ng2-bootstrap bootstrap --save* - não funciona bem
ng add ngx-bootstrap
```

### Sub-Projeto diretivas

```
Serve para nada, foi um teste de um comando.
```

## Execução em desenvolvimento

Para executar basta utilizar o comando:

 ```
 ng serve
 *caso queira mudar a porta adicionar o comando - exemplo: "*ng serve --port 5050*"
 ```

## Execução da build de desenvolvimento

Para executar basta utilizar o comando:

 ```
 ng build ou ng build --dev
 cd dist
 http-server - *Caso não tenha o simulador de servidor http no nodeJS, executar o comando "*npm install -g http-server*"
 ```

## Geração da build de produção

 ```
 ng build --prod
 cd dist
 http-server - *Caso não tenha o simulador de servidor http no nodeJS, executar o comando "*npm install -g http-server*"
 ```

## Dependencias

* ng2-bootstrap - *dependencies*
* ngx-bootstrap - *dependencies*

## Autor

* **Edimar B Miranda Junior** - *[Repositório Git](https://github.com/edimarbmjunior)*