import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = {
    body: {
        margin: 0,
        padding: 0,
    },
}

export interface AppTheme {
    colors: {
        text: {
            color: string
            size: string
        }
        background: {
            primary: string
            secondary: string
            terciary: string
        }
    }
    spacing: {
        gutter: string
    }
}

export const theme: AppTheme = {
    colors: {
        text: {
            color: '#f2f2f2',
            size: '100%',
        },
        background: {
            primary: '#222831',
            secondary: '#393e46',
            terciary: '#f96d00',
        },
    },
    spacing: {
        gutter: '5px',
    },
}

export const AppContainer = styled.div((themeProps) =>
    css({
        backgroundColor: themeProps.theme.colors.background.primary,
        boxSizing: 'border-box',
        height: '100vh',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 19fr',
    }),
)
