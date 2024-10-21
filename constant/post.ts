export const per = 12

export const categoryUrlParamsMap: Record<string, string> = {
  'GitHub Actions': 'githubactions',
  JavaScript: 'javascript',
  'Ruby on Rails': 'rubyonrails',
  VeeValidate: 'veevalidate',
  'Google App Scripts': 'googleappscripts',
  ElasticSearch: 'elasticsearch',
  東海オンエア: 'tokaionair',
  YouTube: 'youtube',
  チームラボ: 'teamlab',
}

export const urlParamsCategoryMap: Record<string, string> = Object.keys(categoryUrlParamsMap)
  .reduce((previous, key) => {
    const newKey = categoryUrlParamsMap[key]
    const newValue = key

    return { ...previous, [newKey]: newValue }
  }, {})
