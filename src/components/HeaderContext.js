import {React, useContext} from 'react'
import AuthContext from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

const HeaderContext = () => {
  
  const {theme, handleTheme} = useContext(ThemeContext);
  const {texts, handleLanguage} = useContext(LanguageContext);
  const {auth, handleAuth} = useContext(AuthContext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      {/* Language options */}
      <select name='Language' onChange={handleLanguage}>
        <option value='es'>ES</option>
        <option value='en'>EN</option>
      </select>
      {/* Theme options */}
      <select name='Theme-context' onChange={handleTheme}>
        <option id='light-context' value='light'>{texts.headerLight}</option>
        <option id='dark-context' value='dark'>{texts.headerDark}</option>
      </select>
      {/* Log options */}
      <button onClick={handleAuth} value={auth}>
        {auth ? texts.buttonLogout
        :  texts.buttonLogin }
      </button>
    </header>
  )
}

export default HeaderContext;
