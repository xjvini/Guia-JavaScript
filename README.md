# JavaScript - UABJ

Este projeto faz parte da 2ªVA de IEC e foi criado para guiar estudantes a respeito do JavaScript.

---

## O que é JavaScript?
É uma linguagem de tipagem dinamica utilizada no desenvolvimento web moderno, presente em navegadores através de motores JavaScript (como o V8 do Chrome). Ele é responsável pela interatividade de páginas (como atualizações em tempo real e carrossel de imagens).

Além de rodar em navegadores, o JS também é usado na construção de servidores através do **node.js**, gerenciando a lógica do sistema e permitindo a criação de APIs.

Por exemplo, num sistema de página web:

* **HTML** é a estrutura.
* **CSS** é o estilo.
* **JavaScript** é o comportamento.

---

## Fundamentos da Linguagem

### 1. Variáveis
São espaços na memória para guardar informações. As duas principais formas de declaração:

| Declaração | Comportamento | Explicação |
| :--- | :--- | :--- |
| **`const`** | Valor constante | Ou seja, que não mudam (ex: configurações, fórmulas). |
| **`let`** | Valor mutável | Ou seja, que serão alterados durante o código (ex: contadores, totalizadores). |

> *Também há `var`, que não é indicada pois é uma declaração antiga com comportamentos que podem gerar erros.*

### 2. Tipos de Dados
Como a linguagem é dinâmica, o JS entende o tipo do dado com base no valor atribuído.

#### Tipos Primitivos
* **String:** Determina textos, entre aspas ou crases.
    * Ex: `'Olá Mundo'`, `"Erro"`, `` `Total: ${valor}` ``
* **Number:** Indica uso de números (inteiros ou não).
    * Ex: `2025`, `10.5`, `-50`
* **Boolean:** Lógica binária.
    * Ex: `true`, `false`

#### Tipos Vazios
* **Undefined:** Indica que a variável existe, mas ainda não tem valor definido.
* **Null:** Determina que a variável foi configurada como vazia pelo programador.

#### Tipos Estruturais
* **Objetos:** Agrupa dados relacionados em pares (chave: valor).
    * Ex: `const usuario = { nome: 'Ana', idade: 30 };`
* **Array:** Uma lista de dados.
    * Ex: `const lista = ['Maçã', 'Banana', 'Uva'];`

---

### 3. Estruturas de Controle
Adicionam condições lógicas ao código, usando `if` e `else`.

**Operadores comuns:**
* `===` (Igualdade: verifica valor e tipo)
* `!==` (Diferente)
* `>` (Maior que) e `<` (Menor que)
---

## Vantagens e desvantagens

Abaixo, uma breve apresentação dos pontos fortes e fracos do uso do JavaScript:

| Vantagens |  Desvantagens |
| :--- | :--- |
| **Fácil configuração:** Não exige configurações complexas de ambiente ou compiladores. O código é executado diretamente em qualquer navegador moderno. | **Tipagem dinâmica e fraca:** A conversão automática de tipos pode gerar comportamentos indesejados, como bugs difíceis de rastrear se não houver rigor na escrita do código. |
| **Bom ecossistema:** Possui uma grande comunidade ativa, o que garante vasta documentação, bibliotecas prontas e suporte contínuo. | **Fadiga de Decisão:** A grande quantidade de frameworks e ferramentas (como React, Vue ou Angular) pode dificultar a escolha da tecnologia certa para iniciantes na linguagem. |
| **Versatilidade (Full Stack):** Utiliza a mesma linguagem tanto no Front-end (interface) quanto no Back-end (servidor). | **Segurança no Client-Side:** Como o código é executado no navegador do usuário, a lógica fica exposta, exigindo cuidado para não revelar dados ou regras sensíveis. |

---

## Exemplos

Em anexo, há uma pasta chamada `Exemplos/` com códigos que podem ser utilizados para estudo. A ideia não é ser complexo, mas mostrar a sintaxe básica do conteúdo.

Arquivos:

1.  **`hello_world.js`**: imprime "hello world".
2.  **`servidor.js`**: configura um servidor.
3.  **`loja.js`**: retorna o custo total de uma lista de compras.
4.  **`Media_de_notas_escola.js`**: imprime a media de alunos em uma escola.

### Como rodar
Com o **Node.js** instalado, abra o terminal na pasta e digite:
`node nome_do_arquivo.js`

---

## Grupo

* José Vinícius
* José Rodrigo Araujo Limeira
