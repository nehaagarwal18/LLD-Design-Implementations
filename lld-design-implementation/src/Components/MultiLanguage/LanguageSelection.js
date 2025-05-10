import React, { useContext } from 'react'
import { supportedLanguage } from '../../constants'
import LanguageContext from '../../contexts/LanguageContext'

const LanguageSelection = () => {
  const {language, changeLanguage} = useContext(LanguageContext)

  return (
    <select className="cursor-pointer" value={language} onChange={(e) => changeLanguage(e.target.value)}>
        return {supportedLanguage.map(language => {
            return <option key={language.name} value={language.value}>{language.name}</option>
        })}
    </select>
  )
}

export default LanguageSelection