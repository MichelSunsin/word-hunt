import { useState, useMemo } from 'react'
import axios from 'axios'
import type { AppProps } from 'next/app'
import Header from 'components/Header/index'

import styles from 'styles/Home.module.scss'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [word, setWord] = useState('')
  const selectableLanguages = useMemo(
    () => [
      { label: 'English', value: 'en' },
      { label: 'Hindi', value: 'hi' },
      { label: 'Spanish', value: 'es' },
      { label: 'French', value: 'fr' },
      { label: 'Japanese', value: 'ja' },
      { label: 'Russian', value: 'ru' },
      { label: 'German', value: 'de' },
      { label: 'Italian', value: 'it' },
      { label: 'Korean', value: 'ko' },
      { label: 'Brazilian Portuguese', value: 'pt-BR' },
      { label: 'Arabic', value: 'ar' },
      { label: 'Turkish', value: 'tr' },
    ],
    []
  )

  const [language, setLanguage] = useState(selectableLanguages[0].value)

  const dictionaryAPI = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      )
      const { data } = response

      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className={styles.container}>
      <Header
        word={word}
        setWord={setWord}
        language={language}
        setLanguage={setLanguage}
        selectableLanguages={selectableLanguages}
        dictionaryAPI={dictionaryAPI}
      />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
