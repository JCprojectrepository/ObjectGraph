import {  createTheme, responsiveFontSizes  } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme(theme,{
    typography: {
        // Material Design ガイドラインに基づいたフォントスタイル
        h1: {
          fontSize: '6rem', // 96px
          fontWeight: 300,
          letterSpacing: '-1.5px',
        },
        h2: {
          fontSize: '3.75rem', // 60px
          fontWeight: 300,
          letterSpacing: '-0.5px',
        },
        h3: {
          fontSize: '3rem', // 48px
          fontWeight: 400,
        },
        h4: {
          fontSize: '2.125rem', // 34px
          fontWeight: 400,
          letterSpacing: '0.25px',
        },
        h5: {
          fontSize: '1.5rem', // 24px
          fontWeight: 400,
        },
        h6: {
          fontSize: '1.25rem', // 20px
          fontWeight: 500,
          letterSpacing: '0.15px',
          lineHeight: 1.8,
        },
        subtitle1: {
            fontSize: '1rem', // 16px
            fontWeight: 400,
            letterSpacing: '0.15px',
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: '0.875rem', // 14px
            fontWeight: 500,
            letterSpacing: '0.1px',
            lineHeight: 1.57,
        },
        body1: {
            fontSize: '1rem', // 16px
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem', // 14px
            fontWeight: 400,
            lineHeight: 1.43,
            letterSpacing: '0.25px',
        },
        string: {
            // このスタイルはMaterial Design ガイドラインには存在しないので、
            // ここでは任意のスタイルを定義しています。
            fontSize: '0.75rem', // 12px
            fontWeight: 400,
            lineHeight: 1.66,
        },
        caption: {
            fontSize: '0.75rem', // 12px
            fontWeight: 400,
            letterSpacing: '0.4px',
            lineHeight: 1.66,
        },
        button: {
            fontSize: '0.875rem', // 14px
            fontWeight: 500,
            letterSpacing: '1.25px',
            lineHeight: 2.25,
            textTransform: 'uppercase', // ボタンテキストは大文字表示
        },
    
      },
});

theme = createTheme(theme,{
    palette: {
        primary: {
            main: '#22447B',
            light: "#4F6590",
        },
        secondary: {
            light:"#EBE6DE",
            main: '#EAE6DE',
            dark: "#584A2A",
        },
        success: {
            main: '#5B7577',
            dark: "#395C61",
        },
        warning: {
            main: '#D37A53',
            dark: "#BA6642",
        },
        info: {
            light: '#D2D6CF',
            main: '#008394',
        },
        error: {
            main: '#ff3d00',
        },
    }});

theme = createTheme(theme,{
    components: {
        // コンポーネント名
        MuiButton: {
            styleOverrides: {
                // CSSルール名
                root: {
                    // CSS定義
                    color: 'black',
                    fontSize: '1rem',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);


export default theme;