import React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { AppContainer, globalStyles, theme } from './App.styled'
import SideBar from './sidebar/Sidebar'
import Main from './main/Main'

const App = () => (
    <>
        <Global styles={globalStyles} />
        <ThemeProvider theme={theme}>
            <AppContainer>
                <SideBar />
                <Main />
            </AppContainer>
        </ThemeProvider>
    </>
)

export default App
