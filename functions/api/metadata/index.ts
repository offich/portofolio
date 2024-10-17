import { load } from 'cheerio'

export type SiteMetadata = {
  url: string
  title: string | null
  imageUrl: string | null
}

export const onRequest: PagesFunction = async (context) => {
  const query = new URL(context.request.url)
  const url = query.searchParams.get('url')

  try {
    const response = await fetch(url,
      {
        method: 'get',
        headers: {
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        },
      })

    if (!response.ok) {
      return Response.json({ metadata: null })
    }

    const html = await response.text()
    const metadata: SiteMetadata = { url, title: null, imageUrl: null }
    const loaded = load(html)

    const metaTags = loaded('meta')

    for (const meta of metaTags) {
      const property = meta.attribs.property

      if (property === 'og:title') {
        metadata.title = meta.attribs.content || null
      }

      if (property === 'og:image') {
        metadata.imageUrl = meta.attribs.content || null
      }
    }

    return Response.json({ metadata })
  } catch {
    return Response.json({ metadata: null })
  }
}
