import React from 'react';
import MainContext from './MainContext';
import HeaderContext from './HeaderContext';
import FooterContext from './FooterContext';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { AuthProvider } from '../context/AuthContext';


const PageContext = () => {

  return (
    <div className='page'>
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <HeaderContext />
              <MainContext />
              <FooterContext />
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
    </div>
  )
}

export default PageContext;
