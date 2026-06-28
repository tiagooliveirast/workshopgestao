Crie uma landing page de vendas (página única, estática) para um workshop ao vivo.

## STACK E DEPLOY
- Vite + React + TypeScript + Tailwind CSS.
- Página única (single page), 100% estática, SEM backend, SEM banco de dados, SEM formulário que dependa de servidor. O botão de compra é um LINK EXTERNO.
- Deve buildar limpo na Vercel com auto-detecção (build: `npm run build`, output: `dist`). Não adicione configuração que quebre o preset Vite da Vercel.
- Mobile-first obrigatório: a maioria do tráfego vem de Instagram/WhatsApp no celular. Teste mental em tela de ~375px.
- Performance: poucas dependências, imagens otimizadas/lazy-load, sem bibliotecas pesadas.

## ARQUIVO DE CONFIG (crie src/config.ts com TODAS estas constantes no topo, fáceis de editar)
- NOME_WORKSHOP = "Imersão Técnico que Manda"
- PRECO = "R$ 47"
- LINK_CHECKOUT = "https://COLAR-LINK-DO-CHECKOUT-AQUI"  // botão aponta pra cá
- DATA_LIVE_1 = "Segunda, 10/08 às 20h"
- DATA_LIVE_2 = "Terça, 11/08 às 20h"
- DATA_LIVE_3 = "Quarta, 12/08 às 20h"
- DATA_LIMITE_INSCRICAO = "2026-08-10T20:00:00"  // alvo do contador regressivo
- META_PIXEL_ID = ""  // se preenchido, injeta o pixel da Meta no <head>
- WHATSAPP_SUPORTE = "https://wa.me/55SEUNUMERO"  // link discreto de "dúvidas" no rodapé

## IDENTIDADE VISUAL (marca "Tiago Sheik" — preto e dourado, premium, NÃO genérico)
- Fundo: preto profundo (#0B0B0B / #111111). Seções alternando preto puro e cinza-grafite muito escuro.
- Dourado de destaque: #D4AF37 (use em CTAs, números, ícones e detalhes — com parcimônia, pra parecer caro).
- Texto: branco/off-white (#F5F5F5) no corpo, dourado nos destaques.
- Tipografia: títulos em fonte display bold de alto impacto (ex: Montserrat 800 ou Anton); corpo em Inter. Importe via Google Fonts.
- Visual de autoridade: alto contraste, hierarquia forte, espaçamento generoso, sombras sutis e detalhes dourados finos. FUJA do visual "template Tailwind padrão". Quero que pareça uma página premium, não um formulário.
- Microanimações sutis (fade-in ao rolar, hover nos botões). Scroll suave.

## ESTRUTURA DA PÁGINA (nesta ordem, cada uma como um componente)

1. HERO (acima da dobra)
   - Eyebrow: "IMERSÃO AO VIVO • 3 NOITES"
   - Headline: "Você trabalha o mês inteiro e no fim não sobra nada?"
   - Subheadline: "Em 3 noites ao vivo, eu te mostro por que você ganha pouco mesmo com a agenda cheia — e como virar o técnico que MANDA no próprio negócio, cobrando o preço certo e parando de trabalhar de graça."
   - Botão CTA grande: "QUERO MINHA VAGA — R$ 47" (aponta pra LINK_CHECKOUT)
   - Linha de confiança abaixo do botão: "Acesso imediato ao grupo da turma • Vagas limitadas"

2. AGITAÇÃO DO PROBLEMA
   - Título: "Se você se identifica com isso, essa imersão é pra você:"
   - Lista com ícones: "Sua agenda vive cheia, mas sua conta vive apertada"; "Você cobra no chute e ainda fica com medo do cliente achar caro"; "No fim do mês você não sabe pra onde foi o dinheiro"; "Você corre atrás de cliente novo o tempo todo, mas os antigos somem"; "Você é um ótimo técnico — mas ninguém te ensinou a tocar isso como negócio".

3. O QUE É A IMERSÃO
   - Parágrafo curto: 3 noites ao vivo, prático, mão na massa. Não é teoria — você sai com transformação real já na primeira noite.

4. AS 3 NOITES (3 cards lado a lado no desktop, empilhados no mobile)
   - Card 1 — "NOITE 1: Quanto você REALMENTE ganha por serviço?" / Subtítulo: Precificação / Texto: "Você vai recalcular um serviço real e descobrir, na hora, o preço que faz seu negócio dar lucro de verdade." / Data: DATA_LIVE_1
   - Card 2 — "NOITE 2: Para onde some o seu dinheiro?" / Subtítulo: Fluxo de caixa e pró-labore / Texto: "Monte um controle simples do seu dinheiro e defina, pela primeira vez, quanto VOCÊ ganha de verdade." / Data: DATA_LIVE_2
   - Card 3 — "NOITE 3: Como faturar mais SEM pegar mais serviço?" / Subtítulo: Recorrência e pós-venda / Texto: "Aprenda a faturar com os clientes que você JÁ tem, sem viver caçando cliente novo." / Data: DATA_LIVE_3

5. PARA QUEM É (duas colunas)
   - "É pra você se:" técnico autônomo de refrigeração/eletrodomésticos que quer parar de trabalhar muito e ganhar pouco, que quer cobrar com segurança e organizar o negócio.
   - "NÃO é pra você se:" busca curso técnico de conserto (aqui é GESTÃO), ou não está disposto a aplicar.

6. OFERTA (caixa de destaque, borda dourada)
   - Título: "Sua vaga na Imersão Técnico que Manda"
   - Inclui: "3 noites ao vivo com o Tiago Sheik"; "Grupo exclusivo da turma no WhatsApp"; "Acesso às gravações por 7 dias"; "Bônus: Planilha de Precificação Sheik".
   - Preço em destaque: "R$ 47" (à vista no Pix)
   - Ancoragem: risque um valor de referência (ex: ~~R$ 197~~) acima do R$ 47.
   - Botão CTA: "GARANTIR MINHA VAGA AGORA"
   - Frase abaixo: "Esse investimento se paga no primeiro serviço que você recalcular."

7. CONTADOR REGRESSIVO
   - Componente de countdown ao vivo até DATA_LIMITE_INSCRICAO (dias/horas/min/seg), com o texto "As inscrições encerram em:". Quando zerar, mostrar "Inscrições encerradas".

8. AUTORIDADE — Sobre o Tiago Sheik
   - Texto curto e confiável: técnico de refrigeração e criador de conteúdo, +23 mil seguidores no Instagram, host do programa "Papo de Técnico", criador do Refriclube. Ajuda técnicos a transformarem o ofício em negócio lucrativo. (Deixe espaço pra uma foto — use um placeholder.)

9. GARANTIA
   - Selo: "Garantia incondicional de 7 dias. Não curtiu? Devolvemos 100% do seu dinheiro, sem perguntas."

10. FAQ (acordeão)
   - "E se eu não puder assistir ao vivo?" → tem gravação por 7 dias.
   - "Serve pro meu segmento (ar-condicionado, geladeira, máquina de lavar)?" → sim, gestão serve pra todo técnico autônomo.
   - "Como eu acesso?" → após a compra você entra no grupo e recebe os links.
   - "Preciso entender de finanças?" → não, é do zero e na linguagem do técnico.
   - "É curso de conserto?" → não, é de GESTÃO do seu negócio.

11. CTA FINAL (faixa preta com dourado)
   - Headline: "Pare de trabalhar de graça. Comece a mandar no seu negócio."
   - Botão: "QUERO MINHA VAGA — R$ 47"

12. RODAPÉ
   - Nome/marca Tiago Sheik, link discreto de dúvidas (WHATSAPP_SUPORTE), ano.

13. BARRA FIXA NO MOBILE (sticky bottom bar)
   - Em telas pequenas, uma barra fixa no rodapé com "R$ 47" + botão "Garantir vaga" sempre visível ao rolar. ISSO É IMPORTANTE pra conversão no celular.

## SEO E COMPARTILHAMENTO (crítico — o link vai ser postado em redes sociais)
- Configure <title>, meta description, e Open Graph + Twitter Card completos (og:title, og:description, og:image) pra aparecer um preview bonito no Instagram/WhatsApp. Deixe a og:image como placeholder em /public/og-image.jpg.
- Adicione favicon.
- Se META_PIXEL_ID estiver preenchido, injete o pixel da Meta no <head> (pra remarketing).

## QUALIDADE
- Código limpo, componentizado, comentado em português nos pontos de edição.
- Responsivo de verdade em mobile, tablet e desktop.
- Sem erros de build. Sem dependências desnecessárias.