import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
    *::after,
    *::before{
        margin:0;
        padding:0;
        -webkit-font-smoothing: antiliased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y:hidden;
        @media ${props => props.theme.MediaQueries.small} {
                overflow-y :auto;
                overflow-x:hidden;
            }

        }
       html{
            font-size: 62.5%;
            box-sizing: border-box;
           
            @media ${props => props.theme.MediaQueries.smallest} {
                font-size : 55%
            }
            
            @media ${props => props.theme.MediaQueries.small} {
                font-size : 60%
            }

            scroll-behavior:smooth;
        }

        body{
            font-family: 'Montserrat', sans-serif;
            line-height : 1.6;
            overflow-x:hidden;
            --color-main: ${props => props.theme.Lightcolors.main};
            --color-secondary: ${props => props.theme.Lightcolors.secondary};
            --color-intenseBlue: ${props =>
              props.theme.Lightcolors.intenseBlue};
            --color-text: ${props => props.theme.Lightcolors.text};
            --color-shadow: ${props => props.theme.Lightcolors.shadow};
            --color-textSmall: ${props => props.theme.Lightcolors.textSmall};
            --color-blackAlt: ${props => props.theme.Lightcolors.blackAlt};
           
           &.lightMode{
            --color-base: ${props => props.theme.Lightcolors.base};
           }
         }
        button ,a , input, textarea{
            outline : none;
            text-decoration: none; 
            font-family : inherit;
        }   

`;
