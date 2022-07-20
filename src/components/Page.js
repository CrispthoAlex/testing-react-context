import React, { useState } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const initialTheme='light';
const initialLanguage= 'es';
const translation= {
  es: {
    headerTitle:"Aplicacion sin Context API",
    headerSubtitle: "Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin:"Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ Invitad@",
    mainHello: "Hola usuari@",
    mainContent: "Contenido Principal",
    footerTitle: "Pie de pagina",
  },
  en: {
    headerTitle:"App without API Context",
    headerSubtitle: "Header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin:"LogIn",
    buttonLogout: "LogOut",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello user",
    mainContent: "Main Content",
    footerTitle: "Footer page",
  }
};
const initialAuth= null;

const Page = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translation[language]);
  const [auth, setAuth] = useState(initialAuth);
  // console.log(texts);

  const handleTheme = (e) => {
    console.log(e.target.value);

    e.target.value === 'light' ? setTheme('light')
    : setTheme('dark')
  }

  const handleLanguage = (e) => {
    console.log(e.target.value);

    if(e.target.value === 'es') {
      setLanguage('es');
      setTexts(translation.es);
    } else {
      setLanguage('en');
      setTexts(translation.en);
    }
  }

  const handleAuth = (e) => {
    console.log(e.target.value);
    auth ? setAuth(null) : setAuth(true);
  }

  return (
  <div className='page'>
      <Header
      theme={theme}
      handleTheme={handleTheme}
      texts={texts}
      handleLanguage={handleLanguage}
      auth={auth}
      handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
  </div>
  )
}

export default Page