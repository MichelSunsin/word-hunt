import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import { Container } from '@material-ui/core'

const Home: NextPage = () => {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])

  const dictionaryAPI = async () => {
    try {
      const response = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/plane'
      )
      const { data } = response

      console.log(data)
      setMeanings(data.meaning)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    dictionaryAPI()
  }, [])

  return (
    <div style={{ height: '100vh', backgroundColor: '#282c34', color: '#fff' }}>
      <Container
        maxWidth="md"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        Hello world
      </Container>
    </div>
  )
}

export default Home
