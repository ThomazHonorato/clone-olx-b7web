import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #ccc;

    .container{
        max-width: 1000px;
        margin: auto;
        display: flex;
    }
    
    a{
        text-decoration: none;
    }

    .logo{
        flex: 1;
        display: flex;
        align-items: center;
        height: 60px;
        
        .logo01, .logo02, .logo03{
            font-weight: bold;
            font-size: 27px;
        }

        .logo01{
            color: #FF0000;
        }

        .logo02{
            color: #00FF00;
        }

        .logo03{
            color: #0000FF;
        }
    }

    nav{
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li{     
            margin: 0px;
            padding: 0px;
            list-style: none;
        }

        ul{
            display: flex;
            align-items: center;
            height: 40px;
            
        }

        li{
            margin-left: 20px;
            margin-right: 20px;

            a {
                color: #000;
                font-size: 14px;
                text-decoration: none;
            }
        }
    }

`;
