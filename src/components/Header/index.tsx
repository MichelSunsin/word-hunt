import { ChangeEvent } from 'react'
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core'

import styles from './Header.module.scss'

type HeaderProps = {
  word: string
  setWord: (word: string) => void
  language: string
  setLanguage: (language: string) => void
  selectableLanguages: Array<{ label: string; value: string }>
  dictionaryAPI: () => void
}

const Header = ({
  word,
  setWord,
  language,
  setLanguage,
  selectableLanguages,
  dictionaryAPI,
}: HeaderProps): JSX.Element => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dictionaryAPI()
  }

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.title}>Word Hunt</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputsContainer}>
          <TextField
            label="Search"
            value={word}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setWord(event.target.value)
            }
          />
          <FormControl>
            <InputLabel id="languages-select-label">Language</InputLabel>
            <Select
              labelId="languages-select-label"
              id="language-select"
              value={language}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLanguage(event.target.value)
              }
            >
              {selectableLanguages.map((language) => (
                <MenuItem key={language.value} value={language.value}>
                  {language.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Header
