#  Menta - planos odontológicos 🌿💜

Bem-vindo ao repositório do site da **Menta**! Este projeto é uma OnePage responsiva desenvolvida com Angular, focada na apresentação e busca de planos odontológicos.

![Angular](https://img.shields.io/badge/Angular-v19.2.12-8e44ad?style=for-the-badge&logo=angular&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-27ae60?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Ativo-9b59b6?style=for-the-badge&logoColor=white)
![Tipo](https://img.shields.io/badge/Projeto-Portf%C3%B3lio-2ecc71?style=for-the-badge)

---

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio de front-end, com o objetivo de criar uma página de apresentação de planos odontológicos. A aplicação é totalmente responsiva, garantindo uma ótima experiência em qualquer dispositivo, e demonstra a integração com uma API REST para exibir informações dinâmicas sobre os planos.

**O que você encontra aqui:**
* **Seção Hero:** Destaque visual com informações introdutórias sobre a Marlin Odontológico.
* **Seção "Encontre o Plano Odontológico Ideal":** Espaço dedicado à listagem dos planos, com filtros/busca.
* **Seção de Contato:** Formulário simples para que os usuários possam entrar em contato.
* **Rodapé Moderno:** Com links de navegação, redes sociais e informações de copyright.
* **Design Limpo e Intuitivo:** Foco na usabilidade e estética.

---

## Checklist de Funcionalidades

Este projeto foi construído para atender aos seguintes requisitos, comprovando a aplicação das melhores práticas de desenvolvimento web:

-   [x] **Utilizar HTML5** para estruturação da página, seguindo as boas práticas de SEO.
-   [x] **Aplicar CSS3 para estilização**, incluindo layout responsivo.
-   [x] **Criar um design agradável e intuitivo** 
-   [x] **Integrar com uma API REST** utilizando Axios.
-   [x] **Exibir os dados de maneira organizada**.
-   [x] **Implementar mecanismo de interação**.
-   [x] **Garantir a responsividade** da aplicação para diferentes tamanhos de tela.
-   [x] **Código deve bem organizado** e comentado.
-   [x] **Utilizar Angular** como framework de desenvolvimento.

---

## Tecnologias Utilizadas

* **Angular CLI** (v19.2.12)
* **HTML5**
* **CSS3** (Estilização customizada)
* **Font Awesome** (Para ícones)

---

##  Prévia
![Prévia do projeto](https://raw.githubusercontent.com/nathaliatg/menta/refs/heads/main/mentagif.gif)
---
##  Como Rodar o Projeto Localmente

Siga estas instruções para configurar e executar o projeto em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/nathaliatg/marlin-odontologico.git](https://github.com/nathaliatg/menta) 
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd marlin-odontologico
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    Após a execução bem-sucedida, abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente.
---
##  Como Rodar o JSON local

Siga estas instruções para configurar e executar o projeto em sua máquina local:

1.  **Opção 1 - JSON embutido na aplicação (mais simples)**
- Certifique-se de que o arquivo planos.json está salvo dentro da pasta src/assets/.
- A requisição no código está assim:
 this.http.get<any[]>('assets/planos.json')
- Com isso, ao rodar 'ng serve', os dados serão carregados automaticamente.

2.  **Opção 2 - Usar json-server (recomendado para testes ou entrega)**
- Instale o json-server:
```
npm install
-g json-server
```

- Inicie o servidor:
 ```
json-server --watch db.json --port 3000
 ```
---


## 📧 Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

* **Nathalia Gonçalves**
* **GitHub:** [nathaliatg](https://github.com/nathaliatg)
* **Email:** [nathaliatgoncalves@gmail.com](mailto:nathaliatgoncalves@gmail.com) 
