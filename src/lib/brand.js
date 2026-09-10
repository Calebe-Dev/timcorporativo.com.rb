// Retira a marca antiga ("Grupo OC") do conteúdo dos artigos — snapshot local
// em content/artigos/ e o que vier do OC Hub. Os JSON de origem ficam intactos:
// o filtro roda na leitura, então reverter = apagar a chamada em artigos.js.
//
// Regras da mais específica (links, frases, concordância) para o fallback, que
// troca qualquer sobra pelo nome público do site. Formas minúsculas coladas
// ("grupooc") ficam de fora de propósito — são e-mails e hosts de infra.

export const SITE_NAME = 'TIM Corporativo';

const RULES = [
	[/href="https?:\/\/(?:www\.)?grupooc\.com\.br[^"]*"/gi, 'href="/"'],
	[/https?:\/\/(?:www\.)?grupooc\.com\.br(?:\/[\w\-/]*)?/gi, 'https://timcorporativo.com.br/'],

	[/\s*[|—–-]\s*Grupo OC\b(?!\s*[—–-])/g, ''],
	[/Consultoria Autorizada Grupo OC/g, 'Consultoria Autorizada TIM'],
	[/canal autorizado Grupo OC/g, 'canal autorizado TIM'],
	[/representante autorizado Grupo OC/g, 'representante autorizado TIM'],

	[/\b[Oo] (<(?:strong|b)>)Grupo OC(<\/(?:strong|b)>)/g, '$1nossa consultoria$2'],
	[/(<(?:strong|b)>)Consultoria Grupo OC(<\/(?:strong|b)>)/g, '$1nossa consultoria$2'],

	[/\bO Grupo OC é uma consultoria/g, 'Somos uma consultoria'],
	[/\bO Grupo OC\b/g, 'Nossa consultoria'],
	[/\bo Grupo OC\b/g, 'nossa consultoria'],
	[/\bdo Grupo OC\b/g, 'da nossa consultoria'],
	[/\bpelo Grupo OC\b/g, 'pela nossa consultoria'],
	[/\bao Grupo OC\b/g, 'à nossa equipe'],
	[/\bno Grupo OC\b/g, 'na nossa consultoria'],
	[/\bcom Grupo OC\b/g, 'conosco'],
	[/\bGrupo OC (é|tem|oferece|atua|cuida|garante|monta|faz)\b/g, 'Nossa consultoria $1'],

	// Fallback: exige espaço para não tocar em identificadores de código.
	[/\bGRUPO OC\b/g, SITE_NAME.toUpperCase()],
	[/\bGrupo\s+OC\b/g, SITE_NAME],
	[/\bgrupo\s+oc\b/g, SITE_NAME]
];

// NAP-JUMIRIM 2026-09-10 — mesma mecânica, outro alvo: o NAP antigo (endereço de
// rua em Sorocaba e fixo antigo) que sobrou dentro do html_content de artigos
// herdados do WordPress. Roda na leitura, junto do filtro de marca, pelo mesmo
// motivo: os JSON de content/artigos/ ficam intactos e reverter é apagar este
// bloco. Hoje atinge um único artigo (tim-corporativo-planos-empresariais), mas
// vale também para o que vier do OC Hub com o rodapé velho colado.
//
// Endereço novo (único exposto na rede): unidade de Jumirim/SP. Sorocaba segue
// como operação — por isso nenhuma regra aqui mexe na palavra "Sorocaba" solta.
const NAP_RULES = [
	// Endereço completo, com o travessão em qualquer das três formas.
	[
		/R(?:ua|\.)\s*Tereza\s*Lopes,?\s*677\s*[–—-]\s*Vila\s*Hort[êe]ncia,?\s*Sorocaba\s*\/\s*SP/gi,
		'R. Manoel Novaes, 922 – Centro, Jumirim/SP'
	],
	// Sobras parciais (rua sem cidade, ou com a vírgula do bairro).
	// Hífen no fim da classe de propósito: [–—-,] vira faixa inválida.
	[/R(?:ua|\.)\s*Tereza\s*Lopes,?\s*677(?:\s*[–—,-]\s*Vila\s*Hort[êe]ncia)?/gi, 'R. Manoel Novaes, 922 – Centro'],
	[/\b18020-2(?:24|40)\b/g, '18535-001'],
	// Fixo antigo: href tel: e as formas visíveis. O WhatsApp não é tocado.
	[/tel:\+?551535008940/g, 'tel:+551531000058'],
	[/\+55\s*15\s*3500-?8940/g, '+55 15 3100-0058'],
	[/\(?\b15\)?\s*3500-?8940/g, '(15) 3100-0058'],
	[/\b3500-8940\b/g, '3100-0058']
];

export function stripBrand(text) {
	let out = text;
	for (const [pattern, replacement] of RULES) out = out.replace(pattern, replacement);
	// NAP-JUMIRIM 2026-09-10 — anterior: return out;  (só as regras de marca)
	for (const [pattern, replacement] of NAP_RULES) out = out.replace(pattern, replacement);
	return out;
}

export function stripBrandDeep(value) {
	if (typeof value === 'string') return stripBrand(value);
	if (Array.isArray(value)) return value.map(stripBrandDeep);
	if (value && typeof value === 'object') {
		const out = {};
		for (const [k, v] of Object.entries(value)) out[k] = stripBrandDeep(v);
		return out;
	}
	return value;
}
