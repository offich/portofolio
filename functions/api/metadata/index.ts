import { load } from 'cheerio'

import { userAgent } from '~/const'

export type SiteMetadata = {
  url: string
  title: string | null
  description: string | null
  imageUrl: string | null
}

export const onRequest: PagesFunction = async (context) => {
  const newResponse = Response.json({ metadata: { url: 'https://www.teamlab.art/jp/e/tokyo/', title: '【公式】チームラボボーダレス, 麻布台ヒルズ, 東京', description: 'チームラボボーダレスは、アートコレクティブ・チームラボの境界のないアート群による「地図のないミュージアム」。アートは、部屋から出て移動し、他の作品と関係し、影響を受け合い、他の作品との境界線がなく、時には混ざり合う。そのような作品群による、境界なく連続する１つの世界。境界のないアートに身体ごと没入し、さまよい、意思のある身体で探索し、他者と共に世界を創り、発見していく。', imageUrl: 'https://team-lab.imagewave.pictures/Yt5eET5oZzm6FBicauQUSY?width=1200&format=jpeg' } })
  newResponse.headers.set('Access-Control-Allow-Origin', '*')
  newResponse.headers.set('Access-Control-Max-Age', '86400')
  return newResponse

  // const query = new URL(context.request.url)
  // const url = query.searchParams.get('url')

  // let metadata: SiteMetadata | null = { url, title: null, description: null, imageUrl: null }

  // try {
  //   const response = await fetch(url,
  //     {
  //       method: 'get',
  //       headers: { 'user-agent': userAgent },
  //     })

  //   console.log(response)

  //   if (!response.ok) {
  //     metadata = null

  //     const response = Response.json({ metadata })
  //     response.headers.set('Access-Control-Allow-Origin', '*')
  //     response.headers.set('Access-Control-Max-Age', '86400')
  //     return response
  //   }
  //   const html = await response.text()
  //   const loaded = load(html)

  //   const metaTags = loaded('meta')

  //   for (const meta of metaTags) {
  //     const property = meta.attribs.property

  //     if (property === 'og:title') {
  //       metadata.title = meta.attribs.content || null
  //     }

  //     if (property === 'og:description') {
  //       metadata.description = meta.attribs.content || null
  //     }

  //     if (property === 'og:image') {
  //       metadata.imageUrl = meta.attribs.content || null
  //     }
  //   }

  //   const newResponse = Response.json({ metadata: { url: 'https://www.teamlab.art/jp/e/tokyo/', title: '【公式】チームラボボーダレス, 麻布台ヒルズ, 東京', description: 'チームラボボーダレスは、アートコレクティブ・チームラボの境界のないアート群による「地図のないミュージアム」。アートは、部屋から出て移動し、他の作品と関係し、影響を受け合い、他の作品との境界線がなく、時には混ざり合う。そのような作品群による、境界なく連続する１つの世界。境界のないアートに身体ごと没入し、さまよい、意思のある身体で探索し、他者と共に世界を創り、発見していく。', imageUrl: 'https://team-lab.imagewave.pictures/Yt5eET5oZzm6FBicauQUSY?width=1200&format=jpeg' } })
  //   newResponse.headers.set('Access-Control-Allow-Origin', '*')
  //   newResponse.headers.set('Access-Control-Max-Age', '86400')
  //   return newResponse
  // } catch {
  //   const response = Response.json({ metadata })
  //   response.headers.set('Access-Control-Allow-Origin', '*')
  //   response.headers.set('Access-Control-Max-Age', '86400')
  //   return response
  // }
}
