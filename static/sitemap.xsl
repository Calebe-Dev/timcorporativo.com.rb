<?xml version="1.0" encoding="UTF-8"?>
<!-- Visual humano do /sitemap.xml. Sem ele o navegador mostra o XML cru com o
     aviso "This XML file does not appear to have any style information", que
     parece erro. Crawlers nunca pedem este arquivo. -->
<xsl:stylesheet
	version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
>
	<xsl:output method="html" encoding="UTF-8" indent="yes" />
	<xsl:template match="/">
		<html lang="pt-BR">
			<head>
				<title>Sitemap — TIM Corporativo</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<style>
					body { font-family: system-ui, sans-serif; margin: 0; color: #0f172a; background: #f8fafc; }
					header { background: #002d6e; color: #fff; padding: 24px 16px; }
					header h1 { margin: 0; font-size: 20px; }
					header p { margin: 6px 0 0; font-size: 13px; color: #cfe2fb; }
					main { max-width: 960px; margin: 0 auto; padding: 16px; }
					table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; font-size: 14px; }
					th, td { text-align: left; padding: 8px 12px; border-bottom: 1px solid #e2e8f0; }
					th { background: #eff6ff; color: #003f96; font-size: 12px; text-transform: uppercase; letter-spacing: .04em; }
					tr:last-child td { border-bottom: 0; }
					a { color: #004fbb; text-decoration: none; word-break: break-all; }
					a:hover { text-decoration: underline; }
					td.num { text-align: right; white-space: nowrap; color: #64748b; }
				</style>
			</head>
			<body>
				<header>
					<h1>Sitemap — TIM Corporativo</h1>
					<p>
						<xsl:value-of select="count(sm:urlset/sm:url)" /> URLs. Este arquivo é lido por
						mecanismos de busca; esta visualização existe só para conferência humana.
					</p>
				</header>
				<main>
					<table>
						<tr>
							<th>URL</th>
							<th>Última modificação</th>
							<th>Prioridade</th>
						</tr>
						<xsl:for-each select="sm:urlset/sm:url">
							<tr>
								<td>
									<a href="{sm:loc}"><xsl:value-of select="sm:loc" /></a>
								</td>
								<td class="num"><xsl:value-of select="sm:lastmod" /></td>
								<td class="num"><xsl:value-of select="sm:priority" /></td>
							</tr>
						</xsl:for-each>
					</table>
				</main>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
