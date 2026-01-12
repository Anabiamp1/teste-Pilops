# ✈️ Teste Técnico - `Pilops` 

Projeto desenvolvido como parte do processo seletivo para a vaga de `Engenheiro(a) de software fullstack (estágio/Júnior)`.


## 🚀 Visão Geral do Projeto

Este projeto consiste em uma aplicação full stack desenvolvida para exibir, navegar e detalhar informações de voos a partir de dados fornecidos pela Pilops.
O objetivo principal foi construir uma solução estruturada, separando frontend e backend baseando-se em um layout do `Figma`.

obs: a maior parte do projeto foi inspirado nos tutoriais de cursos `Rocketseat`. Então a estrutura e base podem estar semelhantes aos cursos de desenvolvimento ensinados na plataforma.

##

![Image](https://github.com/user-attachments/assets/5a20351f-5f90-4a3c-bc9b-817cb4a1a310)

##



### 🔗 Demo
**Frontend:** [Versel - PILOPS](https://teste-pilops-ou3nk2k7u-ana-beatriz-ramos-projects.vercel.app)  
**Backend:** [Render - PILOPS](https://teste-pilops.onrender.com/flights)



## 🛠️ Linguagens e ferramentas usadas

![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-696969?style=for-the-badge&logo=figma&logoColor=figma)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/Insomnia-black?logo=insomnia&logoColor=5849BE)



##
### 🔄 Backend

Foi construído um backend em Node.js, que expõe esses dados por meio de uma API testada através do `Insomnia`. Print do teste está disponível em [`/printteste/`](./printteste/)

##

![Image](https://github.com/user-attachments/assets/9ba038aa-299e-4165-941b-2d2d0c5c14cb)

##


📂 O código completo para a base de dados está disponível em [`/json`](./flightHistory.json/json).

- Foi criado uma API que servisse os dados do JSON.

- Trecho ilustrativo:

```json
{
    "flights": [
        {
            "id": "FL-001",
            "aircraft": {
                "name": "Cessna 172 G1000",
                "registration": "PR-PNK",
                "airline": "Pilops Academy"
            },
            "flightData": {
                "date": "2025-07-22",
                "balance": 1065,
                "route": {
                    "from": "SBRJ",
                    "to": "SBFZ"
                },
                "xp": 445,
                "missionBonus": 0
            }
        },
        {
            "id": "FL-002",
            "aircraft": {
                "name": "Beechcraft Baron 58",
                "registration": "PR-MBU",
                "airline": "Pilops Charter"
            },

```

- Endpoints obrigatórios:
    - `GET /flights` → lista todos os voos (id, aeronave, rota, saldo, data).
    - `GET /flights/:id` → retorna detalhes completos de um voo específico.
 
    - 
- Diferenciais:
    - Paginação da lista de voos.
    - Endpoint para calcular **saldo total acumulado** dos voos.


##

### 💻 Frontend

### **Tela 1:**
- Mostrar todos os voos vindos da API. Ao clicar em um voo, abrir tela com os dados de voo

### **Tela 2: Detalhes do Voo**

O usuário é redirecionado para uma página com os detalhes completos daquele voo, incluindo informações como aeronave, rota, data e saldo.
- **Diferenciais:** scroll infinito (lazy loading).

## 

👉 Para mais detalhes pessoais sobre meu aprendizado, consulte o arquivo completo em [`/reflexoes`](./insights/).


##

## 📈 Sugestões

- Adicionar filtros na lista de voos


##

## 🚀 Como Executar

<details>

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/ludson96/teste-tecnico-pilops.git
    ```

### ⚙️ Backend

1. Pré-requisitos: Certifique-se de ter o Node.js instalado em sua máquina.

2. Navegue até a pasta `backend`:

    ```bash
    cd backend
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute o servidor:

    ```bash
    npm run dev
    ```

O backend estará rodando na porta 3000.

### ⚛️ Frontend

1. Abra uma nova aba no terminal (sem cancelar o Backend) e navegue até a pasta `frontend`:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Execute o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

O frontend estará rodando na porta 3001.

- Certifique-se de que o backend esteja rodando antes de iniciar o frontend, pois o frontend depende da API do backend para exibir os dados dos voos.

</details>

##
✍️ Autora: Ana Beatriz Miranda Piveta Ramos 

##

<a href="https://www.linkedin.com/in/anabeatrizmpramos"><img src="https://img.shields.io/badge/-LinkedIn-67cb57?style=for-the-badge&logo=linkedin&logoColor=fff"></a>




