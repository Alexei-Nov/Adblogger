import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Зарабатывайте на своём канале в MAX"
const description = ""

export default function MaxAuthors() {
  return (
    <>
      <TitleAndMetaTags title={title} description={description} />
      <AllBlocks />
    </>
  )
}
