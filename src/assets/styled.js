import styled from "styled-components";
import bgImage from "./images/bg.jpg";
import adminBg from "./images/admin.jpg";
import boxBgBlue from "../assets/images/boxBg.png";

export const NotfoundStyle = styled.div`
  // height: calc(100vh - 88px);
  align-items: center;
  display: flex;
  justify-content: center;
  border: 1px solid #f6f6f6;
  padding: 24px;
  border-radius: 12px;
  .alignCenter {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    & img {
      width: 160px;
      display: block;
      margin: 0 auto;
    }
  }
`;
export const GlobalStyle = styled.div`
  .globalCss {
    // rgba(237, 245, 254, 1)
    background: rgb(246, 246, 246);
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

  width: calc(100% + 16px);
  margin: 0 0 0 -16px;

  & .headerRight {
    & .gapAlign{
        display: flex;
    gap: 12px;
    align-items: center;
    cursor: pointer;
    }
    &div: first-child {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    display: flex;
    gap: 16px;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
  & header {
    background: rgb(246 246 246);

    color: #212121;
    margin: 0 0 16px;
    box-shadow: none;
    & .MuiToolbar-regular {
      padding: 0 16px;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.03);
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
      border-radius: 16px;
    }
    .css-1gcoktp-MuiCardContent-root {
      display: flex;
      gap: 12px;
      flex-direction: column;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
      }
    }
    .css-1gcoktp-MuiCardContent-root {
      & .common {
        background: rgb(255, 255, 255);
        display: flex;
        width: 42px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: rgb(0, 0, 0);
        border-radius: 12px;
        padding: 0px 8px;
        font-weight: bold;
        line-height: 0;
      }
      & .up {
        color: #00875a;
      }

      & .down {
        color: #de350b;
      }
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
  .commonLayoutSec {
    display: flex;
  }
  .scrollContent {
        padding: 16px;
    background: #fff;
    border-radius: 8px;

  }
  .darkBg {
  .whiteIcon{
  color: #fff !important;
  }
  .profileNotify,.rightPannel{
  background: rgb(50 50 50) !important;
  }
.flexBodyMain .active,.flexBodyMain li:hover{
background: rgba(58,125,213,.2);
}
  .scrollContent{
      padding: 16px;
    background: #212121;
    border-radius: 8px;
    color: #fff;
  }
    &
      .scrollContent
      .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline {
      border: 1px solid #fff;
    }
      & .css-1xwxv7r-MuiTable-root{
      backgound: #141414;
      }
      & .css-b93qut-MuiTableRow-root{
      background: #141414;
      }
      & .css-1dc80h3-MuiTableCell-root{
      color: #ccc;
      background: #212121;
      }
      & .css-1orzuox-MuiTableCell-root{
      color: #fff;
      }

      & .css-1xwxv7r-MuiTable-root{
          border: 1px solid #f6f6f636;
      }
    & .scrollContent input:: placeholder {
      color: #fff;
    }
    & input::placeholder {
      color: #fff !important;
      
    }
      & input{
      color: #fff !important;
      }
    & .TableUi {
      background: #212121;
      border: 1px solid 1px solid rgba(246, 246, 246, 0.26);
    }
    & .flexAlign button {
      background: #fff;
      color: #194163;
      border: 1px solid #fff;
    }
    & ul a {
       background: hsla(0,0%,100%,.08); 
      color: rgb(255, 255, 255);
      border: 1px solid hsla(0,0%,100%,.08);
      
    }
      .rightPannel .MuiSvgIcon-fontSizeMedium{
      // color: #fff !important;
      }
      ul a.active{
      

       background: #141414; 
      color: #fff;
      border: 1px solid #141414;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    ul a:hover {
      background: #141414;
      color: rgb(255, 255, 255);
      border: 1px solid #141414;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    & button {
      background: #fff;
      color: #194163;
    }
    & .searchIcon svg {
      color: #fff;
    }
    & .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline {
      border: 1px solid #fff;
    }
    & .sideBarbg {
      background: #212121;
      

      color: #fff;
    }

    background: #141414;
    color: #fff;
    & header {
      background: #212121;
      color: #fff;
    }
    .profileSec{
     background: #212121;
     border: 1px solid rgb(246 246 246 / 26%);
     color: #fff;
     
     
    }
    .cardSec{
      background: #141414;
      border: 1px solid rgb(246 246 246 / 26%);
       ul li{
    background: #212121;
     }
     }
     
  }
  .rightPannel {

    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 0 0 16px;

    & .scrollContent {
      overflow-x: auto;
      flex: 1;
      padding-right: 24px;
      height: calc(100vh - 80px);
    }
  }
  .dark {
    background: #777;
    color: #fff;
  }
  .flexBody {
    display: flex;
    gap: 24px;
  }
  @media screen and (max-width: 600px) {
    .commonLayoutSec {
      flex-direction: column-reverse;
    }
    .cardUi {
      flex-direction: column;
    }
    .flexBody {
      flex-direction: column;
    }
    .searchIcon {
      width: 100% !important;
    }
    .sideBarbg {
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
    }
  }
`;

export const SidebarStyle = styled.div`
  .logoWrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 8px;
  }

  .logoImg {
    width: 150px;
    display: block;
  }

  /* Shine Effect */
  .logoWrapper::before {
    content: "";
    position: absolute;
    top: -30%;
    left: -75%;
    width: 40%;
    height: 160%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.75) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(25deg);
    animation: shine 2.8s linear infinite;
    pointer-events: none;
  }

  @keyframes shine {
    0% {
      left: -75%;
    }
    100% {
      left: 150%;
    }
  }
  .sideBarbg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: calc(-48px + 100vh);
    min-width: 260px;
    // background: rgb(255, 255, 255);
    padding: 24px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 16px 20px;
    background-repeat: no-repeat;
    background-position: left top;
  }
  .darkBg {
    background: #0f172a;
    color: #fff;
  }
  & .sideBarFooter {
    display: flex;
    gap: 16px;
    flex-direction: column;
    & button {
      width: max-content;
      border-radius: 30px;
      height: 32px;
      padding: 0 12px;
      margin: 0 auto;
    }
  }

  & ul {
    list-style: none;
    border-top: 1px solid rgb(204 204 204 / 27%);
    padding: 24px 0 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    & a {
      display: flex;
      gap: 12px;
      cursor: pointer;
      padding: 8px 16px;
      font-weight: bold;
      border: 1px solid #fff;
      color: rgb(1, 79, 197);
      background: #fff;
      border-radius: 4px;
      transition: 400ms;
      box-sizing: border-box;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 16px 0px;
      text-decoration: none;
    }
    & a.active,
    a:hover {
      background: rgb(1, 79, 197);

      color: #fff;
      border: 1px solid rgb(1, 79, 197);
      font-weight: bold;
    }
  }
`;
export const NotificationStyle = styled.div`
ul li a{
    text-decoration : none;
    padding: 10px;
        cursor: pointer;
        border-radius: 8px;
        transition: 400ms;
        display: block;
    &.active{
    background: #f6f6f6;
    color: #000;
    }
 
}
     ul li a:hover{
background: #f6f6f6;
}
img{
    width: 40px;
    border-radius: 50%;
    height: 40px;
}
  position: relative;
  .cardSec {
    background-clip: padding-box;
    background-color: #fff;
    box-shadow:
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 9px 28px 8px rgba(0, 0, 0, 0.05);
    list-style-type: none;
    margin: 0;
    outline: none;
    position: relative;
    text-align: left;
    border-radius: 8px;
    padding: 12px !important;
    min-width: 268px;
    position: absolute;
    z-index: 9;
    right: 0;
    top: 56px;
    & ul {
      padding: 20px 0px 0px 8px;
      list-style: none;
      margin: 16px 0 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-top: 2px solid rgb(246, 246, 246);
     
    }
  }
  .info {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  display: flex;
  gap: 12px;
  align-items: center;
  & .user {
    width: 46px;
    height: 46px;
    display: flex;
    background: rgb(182, 182, 182);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  & span {
    font-size: 12px;
    color: #959595;
  }
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
  .MuiAlert-colorSuccess {
    position: fixed;
    top: 5px;
    right: 0;
    z-index: 9;
    width: 300px;
  }
  .TableUi {
    border: 1px solid rgba(224, 224, 224, 1);
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
    padding: 16px;
    background: #fff;
    border-radius: 4px;
  }

  .flexAlign {
    display: flex;
    justify-content: space-between;
    margin: 0 0 24px;
  }
`;
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
    margin-left: 16px;
}
}
`;
export const SettingStyle = styled.div`

.errorMsg{
    color: red;
    display: inline-block;
    background: #ff000030;
    padding: 4px 12px;
    border-radius: 4px;
    margin: 0px 0 0 0;
    position: relative;
    top: 16px;
    width: 420px;
    box-sizing: border-box;
    border: 1px solid red;
}
position: relative;
.MuiAlert-colorSuccess{
    position: fixed;
    top: 124px;
    z-index: 999;
    right: 24px;
}
 .flexBodyMain{
& .theamDiv{
.active{
border: 2px solid rgb(1, 79, 197);
border-radius: 12px;
}
display: flex;
    gap: 32px;
    align-items: center;

    & img{
        width: 250px;
    border-radius: 12px;
    padding: 4px;
    background: #fff;
    }
}
 & input{
 height: 48px;
 box-sizing: border-box;
 
 }
 .MuiFormControl-fullWidth{
 width: 420px;
 }
 .MuiButton-colorPrimary{
     width: fit-content;
 }
    display: flex;
gap: 16px;
& .profileNotify{
min-width: 200px;
background: #f8f9fb;
padding: 16px;
border-radius: 8px;
}
    }
.flexBodyMain{
ul{
list-style: none;
padding: 24px 0 0;
margin: 0;
display: flex;
flex-direction: column;
    gap: 16px;
    cursor: pointer;
    & li{
     padding: 8px;
     border-radius: 8px;
         transition: 600ms;
     &:hover{
      background: #e9f2fe;
     }
    }
}
    .active{
    background: #e9f2fe;
    }
.rightPannel{
padding: 16px;
background: rgb(248, 249, 251);
width: 100%;
border-radius: 8px;
}
.flexBody{
display: flex;
gap: 16px;
align-items: center;
& div:last-child {
display: flex;
gap: 16px;
    flex-direction: column;
    & button{    width: fit-content;}
}
   
& img{
 border-radius: 8px;
     width: 78px;
}
}


}
.
`