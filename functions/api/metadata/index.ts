import { load } from 'cheerio'

import { userAgent } from '~/const'

export type SiteMetadata = {
  url: string
  title: string | null
  description: string | null
  imageUrl: string | null
}

export const onRequest: PagesFunction = async (context) => {
  const query = new URL(context.request.url)
  const url = query.searchParams.get('url')

  try {
    const response = await fetch(url,
      {
        method: 'get',
        headers: { 'user-agent': userAgent },
      })

    if (!response.ok) {
      return Response.json({ metadata: null })
    }

    const html = await response.text()
    const metadata: SiteMetadata = { url, title: null, description: null, imageUrl: null }
    const loaded = load(html)

    const metaTags = loaded('meta')

    for (const meta of metaTags) {
      const property = meta.attribs.property

      if (property === 'og:title') {
        metadata.title = meta.attribs.content || null
      }

      if (property === 'og:description') {
        metadata.description = meta.attribs.content || null
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
