import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Нативная реклама в каналах MAX"
const description = ""

export default function MaxAdvertisers() {
  return (
    <>
      <TitleAndMetaTags title={title} description={description} />
      <AllBlocks />
    </>
  )
}
