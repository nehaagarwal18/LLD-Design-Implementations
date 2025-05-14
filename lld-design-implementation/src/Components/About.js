import React, { useContext } from 'react'
import { contentMapper } from './MultiLanguage/ContentMapper'
import LanguageContext from '../contexts/LanguageContext'

const About = () => {
  const {language} = useContext(LanguageContext)
  return (
    <div className="p-10 text-center">
        <h1 className="text-2xl mb-2">{contentMapper[language]['about_title']}</h1>
        <p>{contentMapper[language]['about_information']}</p>
        <p className="mt-10 text-red-400">Note: Change language from the dropdown in the header to see the effect</p>
    </div>
  )
}

export default About