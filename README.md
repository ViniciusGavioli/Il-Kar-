# Cantigas — Ilê Asé Karè Oju Igbi

Material de apoio interno: letras, traduções e áudios de referência das cantigas,
organizados por linha de culto.

No ar em **ileasekareojuigbi.vercel.app**

---

## Arquivos

| Arquivo | O que é |
|---|---|
| `dados.js` | **O conteúdo.** Todas as cantigas moram aqui. É o único arquivo que você precisa abrir para incluir, corrigir ou tirar uma cantiga. |
| `index.html` | A página: estilo e a lógica que monta tudo a partir do `dados.js`. Só mexa aqui para mudar aparência ou comportamento. |
| `crest.jpg` | Emblema da casa, no topo da página. |
| `favicon.jpg` | Ícone da aba do navegador. |

Não tem build, nem dependência, nem `npm install`. São arquivos estáticos:
o que está no repositório é exatamente o que vai pro ar.

## Como ver na sua máquina

```bash
python3 -m http.server 8000
```

Depois abra `http://localhost:8000`. (Abrir o `index.html` direto com dois cliques
não funciona: o navegador bloqueia o carregamento do `dados.js` em `file://`.)

---

## Como incluir uma cantiga

Tudo acontece no `dados.js`. A estrutura tem três níveis:

**linha** (Xirê dos Orixás, Caboclo & Boiadeiro) → **entidade** (Exu, Ogum, um caboclo) → **cantiga** (cada trecho).

Para acrescentar uma entidade nova, adicione um objeto na lista `entidades` da linha,
**na posição em que ela é cantada** — a numeração (01, 02, 03…) é automática pela ordem
da lista, então inserir no meio não obriga a renumerar nada:

```js
{
  "id": "boiadeiro-sete-flechas",
  "nome": "Boiadeiro Sete Flechas",
  "subtitulo": "LINHA DE BOIADEIRO",
  "cor": "#8a5a2b",
  "corTexto": "#ffffff",
  "video": "abc123XYZ",
  "youtube": "https://youtu.be/abc123XYZ",
  "fonte": "",
  "cantigas": [
    {
      "rotulo": "Ponto 1",
      "letra": [
        "primeiro verso",
        "segundo verso",
        "terceiro verso"
      ],
      "traducao": "Sentido do ponto, em português corrido."
    }
  ]
}
```

Alguns cuidados que evitam dor de cabeça:

- **`id`** precisa ser curto, minúsculo, sem acento e sem espaço. Ele vira link direto:
  `…vercel.app/#boiadeiro-sete-flechas`. Não repita um `id` já usado.
- **`letra`** é uma **lista de versos** — um verso por item, sem `<br>`. A quebra de
  linha é feita sozinha.
- **`video`** é só o identificador do YouTube, não a URL inteira. Em
  `https://youtu.be/jAiVVy5IVnQ`, o valor é `jAiVVy5IVnQ`.
- **`corTexto`** é a cor do número sobre o quadradinho colorido: use `#1a1a1a` quando
  `cor` for clara e `#ffffff` quando for escura.
- Campos que você não tem, deixe como texto vazio (`""`) ou omita a lista inteira.
  Botão sem conteúdo simplesmente não aparece.
- Vírgula entre os objetos, e **nenhuma vírgula depois do último** — é a causa mais
  comum de a página aparecer em branco.

Deu tela branca depois de editar? Abra o console do navegador (F12): quase sempre é
vírgula sobrando ou aspas não fechadas no `dados.js`.

## Como publicar

Com o repositório ligado ao Vercel, todo push no `main` publica sozinho:

```bash
git add dados.js
git commit -m "Acrescenta pontos do Boiadeiro Sete Flechas"
git push
```

---

## Sobre as grafias

As grafias variam de uma fonte para outra. A referência é sempre a forma
ensinada no terreiro e pelos mais velhos da casa — o que está escrito aqui é
apoio para estudo, não autoridade sobre a tradição.
