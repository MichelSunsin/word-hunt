import { useState } from 'react'
import type { NextPage } from 'next'
import { Container } from '@material-ui/core'

const Home: NextPage = () => {
  const [meanings, setMeanings] = useState([])

  return (
    <div>
      <Container maxWidth="md">Hello world</Container>
    </div>
  )
}

export default Home
