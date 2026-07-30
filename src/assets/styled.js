import styled from "styled-components";
import bgImage from "./images/bg.jpg";
import adminBg from "./images/admin.jpg";

export const GlobalStyle = styled.div`
.globalCss{
background: rgb(247 248 250);
}
  
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`;
export const CustomHeader = styled.div`
width: calc(100% + 24px);
margin: 0 0 0 -24px;
 
  & .headerRight {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
  & header {
    background: #fff;

    color: #212121;
    margin: 0 0 24px;
    box-shadow: none;
    & .MuiToolbar-regular {
      padding: 0 16px;
          border: 1px solid #334155;
      justify-content: space-between;
    }
  }
`;
export const CardStyle = styled.div`
  & .cardUi {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    & .MuiPaper-elevation {
      width: 100%;
      border-radius: 12px;
    }
    .css-1gcoktp-MuiCardContent-root {
      padding: 24px;
      background: hsl(241.25deg 96% 90.2%);
    }
  }
`;

export const StudenStyle = styled.div`
  & .flexRap {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    & p {
      color: #757575;
    }
  }
  padding: 24px;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
`;

export const AppStyle = styled.div`
.scrollContent{
padding-right: 24px;
}
.darkBg {
& input::placeholder{
    color: #fff;
    }
& .TableUi{
background: #fff;
}
& .flexAlign button{
background: #fff;
color: #194163;
border: 1px solid #fff;
}
& ul a{
color: #fff;
border: 1px solid #fff;
}
& button{
background: #fff;
color: #194163;
}
& .searchIcon svg{
color: #fff;

}
& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline{
border: 1px solid #fff;
}
& .sideBarbg{
  background: #111827;
  color: #fff;
}
 
background: #0F172A;
color: #F8FAFC;
& header{
background: #1E3A8A;
color: #fff;


}
}
  .rightPannel {
    display: flex;
    flex-direction: column;
    height: 100vh;

    & .scrollContent {
      overflow-x: auto;
      flex: 1;
      padding-right: 24px;
    }
  }
    .dark{
    background: #777;
    color: #fff;
    }
`;

export const SidebarStyle = styled.div`
.sideBarbg{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: calc(-48px + 100vh);
    min-width: 260px;
    background: rgb(255, 255, 255);
    padding: 24px;
}
    .darkBg{
    
    background: #0F172A;
    color: #fff;

    }
  & .sideBarFooter {
    display: flex;
    gap: 16px;
    flex-direction: column;
    & button{
        width: max-content;
    }
  }

  & ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    &  a{
      display: flex;
      gap: 12px;
      cursor: pointer;
      padding: 8px 16px;
          border: 1px solid #000;
    color: #000;
border-radius: 8px;
transition: 400ms;
box-sizing: border-box;
 text-decoration: none;
    }
      & a.active, a:hover{
      background: #212121;
     
      color: #fff;
      
      
      
      }
  }
`;
export const NotificationStyle = styled.div`
  display: flex;
  gap: 4px;
  & .user {
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
    & span{font-size: 12px;}
`;
export const LoginStyle = styled.div`
.posRelative{
position: relative;
& .eyeIcon{
position: absolute;
    right: 12px;
    top: 36px;
    cursor: pointer;
}
}
.error{
font-size: 12px;
color: red;
}
.adminForm{
  width: 460px;
  & h1{
  font-size: 24px;
  }
}
 background: linear-gradient(
  rgba(15, 23, 42, 0.55),
  rgba(15, 23, 42, 0.55)
),
url(${adminBg});
  background-size: cover;
height: 100vh;
    display: flex;
    place-item: center;
    justify-content: center;
    align-items: center;
    & form{
    width: 480px;
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
}`;

export const TaskStyled = styled.div`
.TableUi{
border: 1px solid rgba(224, 224, 224, 1);
padding: 16px;
border-radius: 4px;
}

.flexAlign{
display: flex;
justify-content: space-between;
margin: 0 0 24px;
}
`
export const SearchStyled = styled.div`
.searchIcon{
    position: relative;
    width: 400px;
}
    .MuiSvgIcon-fontSizeMedium {
    position: absolute;
    left: 6px;
    top: 10px;
    color: rgb(117, 117, 117);
}
    input {
    width: 200px;
    margin-left: 16px;
}
}
`

