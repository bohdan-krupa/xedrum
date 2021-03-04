const articlesNumber = require.context('@/assets/articles/', true, /\.json$/).keys().length

let articles = []

for (let i = 0; i < articlesNumber; i++) {
  let fileName = ('000' + i).substr(-4) + '.json'
  let json = require(`@/assets/articles/${fileName}`)

  articles.push(json)
}

articles = articles.reverse()

export default articles