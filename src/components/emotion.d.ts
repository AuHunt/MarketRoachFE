import '@emotion/react'
import { AppTheme } from './App.styled'

declare module '@emotion/react' {
    export interface Theme extends AppTheme {}
}
