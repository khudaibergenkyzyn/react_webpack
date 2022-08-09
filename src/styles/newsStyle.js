import styled from 'styled-components'
export const NewsInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NewsCard = styled.div`
    margin-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius: 20px;
    gap: 20px;
    width:30%;
    padding:50px;
    background-color:#252525;
    box-sizing: border-box;
    height: 295px;
    :nth-child(2){
        background-color:#1becde;
    }
    >h3{
        color: #fff;
        text-align:center;
        font-size:26px;
        font-weight: 800;

    }
    :hover{
        background-color:#1becde;
        transition: .4s;
    }
`
export const NewsBtn = styled.a`
    background-color: #1becde;
    font-size: 18px;
    color: #fff;
    padding: 10px 20px;
    margin:50px auto 30px;
    display:flex;
    justify-content: center;
    width:134px;
    text-decoration:none;
    :hover{
        background-color: #4bc5b8;
        transition:.4s;
    }
`
