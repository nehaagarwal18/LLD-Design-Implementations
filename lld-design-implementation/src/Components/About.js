import React, { useContext } from 'react'
import { contentMapper } from './MultiLanguage/ContentMapper'
import LanguageContext from '../contexts/LanguageContext'

const About = () => {
  const {language} = useContext(LanguageContext)
  return (
    <div className="p-10 text-center">
        <h1 className="text-2xl mb-2">{contentMapper[language]['about_title']}</h1>
        <p>{contentMapper[language]['about_information']}</p>
    </div>
  )
}

export default About