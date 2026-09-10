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

export function stripBrand(text) {
	let out = text;
	for (const [pattern, replacement] of RULES) out = out.replace(pattern, replacement);
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
