import styled from "styled-components";
import bgImage from "./images/bg.jpg";
export const GlobalStyle = styled.div`
background: rgb(247 248 250);
padding: 0; 
  margin: 0; 
  font-family: 'Poppins', sans-serif;
h1,h2,h3,h4,h5,h6,p{
margin: 0;
padding: 0;
}
`
export const CustomHeader = styled.div`

  display: flex;
  justify-content: space-between;
  & header{
  background: #fff;
  
  color: #212121;
  margin: 0 0 24px;
      box-shadow: none;
          border-radius: 8px;
          & .MuiToolbar-regular{
          padding: 0 16px;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          }
  }
`;
export const CardStyle = styled.div`
& .cardUi{
display: flex;
gap: 24px;
    justify-content: space-between;
    & .MuiPaper-elevation{
    width: 100%;
    }
    .css-1gcoktp-MuiCardContent-root{
    padding: 24px;
    }
}
`


export const SidebarStyle = styled.div`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
height: 100vh;
min-width: 260px;
background: #fff;
padding: 24px;

& ul{
list-style : none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    & li{
    display: flex;
    gap: 12px;
    cursor: pointer;
    }
}


`
export const NotificationStyle = styled.div`
  display: flex;
  gap: 16px;
  & .user{
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  background: rgb(182, 182, 182);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`
export const LoginStyle = styled.div`
 background: linear-gradient(
  rgba(15, 23, 42, 0.55),
  rgba(15, 23, 42, 0.55)
),
url(${bgImage});
  background-size: cover;
height: 100vh;
    display: flex;
    place-item: center;
    justify-content: center;
    align-items: center;
    & form{
    width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    border-radius: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    & .loginHead{
    text-align: center;
    padding: 0 0 24px;
    position: relative;
    & p{
    margin: 0 0 12px;
    }
    & em{
    width: 80px;
    height: 6px;
       background: #488df0;
    position: absolute;
    bottom: 0px;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    }
    }
    & button{
    height: 40px;
    }
    & input{
    height: 48px;
    box-sizing: border-box;
    }
    @media screen and (max-width: 600px){
    padding: 0 16px;
    .loginHead h1{
        font-size: 28px;
    padding: 0 0 8px;
    }
    }
}`
