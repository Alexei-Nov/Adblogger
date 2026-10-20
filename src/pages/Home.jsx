import React from 'react'
import Question from '../components/Question/Question'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Биржа для покупки рекламы у блоггеров VK AdBlogger"
const description = "VK AdBlogger платформа рекламы в группах ВКонтакте и каналах MAX для рекламодателей и блогеров. Размещайте рекламу у блогеров через биржу рекламы ВКонтакте: на площадке представлено больше 45 000 сообществ."

export default function Home() {
  return (
    <>
      <TitleAndMetaTags title={title} description={description} />
      <Question />
    </>
  )
}
