import { createContext, useState } from "react";


const LanguageContext = createContext();

const initialLanguage= 'en';
const translation= {
  es: {
    headerTitle:"Aplicacion con Context API",
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
    headerTitle:"App with API Context",
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

const LanguageProvider = ({children}) => {
  // Language Context
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translation[language]);

  const handleLanguage = (e) => {
    console.log(e.target.value);

    switch (e.target.value) {
      case 'es':
        setLanguage('es');
        setTexts(translation.es);
        break;
      default:
        setLanguage('en');
        setTexts(translation.en);
    }
  }
  const data = {texts, handleLanguage};
  
  return (
      <LanguageContext.Provider value={data} >{children}</ LanguageContext.Provider>
  )
}

export {LanguageProvider};
export default LanguageContext;
