import styled from 'styled-components'
import mainBg from '../images/main-bg.png'
export const MainStyled = styled.div`
    background-image: url(${mainBg});
    position:relative;
    padding: 0 0 60px;
    background-size: cover;
`
export const MainTitle = styled.h1`
    color: ${({color}) => color ? color : '#151515'};
    font-size: 60px;
    font-weight:800;
    margin:0;
`
export const MainInfoStyled = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:50px 130px;
`
export const MainText = styled.p`
    color: #252525;
    font-size: 16px;
`
export const MainBtn = styled.a`
    background-color: ${({bgColor}) => bgColor ? bgColor : '#252525'};
    font-size: 18px;
    color: #fff;
    padding: 10px 20px;
    margin:50px 30px 30px 0;
    display:inline-block;
    text-decoration:none;
    :hover{
        background-color: #4bc5b8;
        transition:.4s;
    }
`
export const MainLeft = styled.div`
    width:48%;
`
export const MainRight = styled.div`
    width:48%;
`
export const Image = styled.img`
    width:100%;
`
export const MainArrows = styled.div`
    display: flex;
    justify-content: center;
    gap:30px;
    position:absolute;
    bottom: 80px;
    left: 100px;
`
export const Arrow = styled.img`
    width:50%;
    height: 50%;
    ${({left}) => left ? 'filter: invert(88%) sepia(64%) saturate(2158%) hue-rotate(146deg) brightness(79%) contrast(92%);' : ''}
`
export const MainArrow = styled.div`
    :hover{
        border: 4px solid #4bc5b8;
        transition: .4s;
    }
    &:hover ${Arrow} {
        filter: invert(88%) sepia(64%) saturate(2158%) hue-rotate(146deg) brightness(79%) contrast(92%);
        transition: .4s;
    }
    display: flex;
    justify-content: center;
    align-items:center;
    width: 60px;
    height: 60px;
    border-radius : 100%;
    border: 4px solid ${({left}) => left ? '#4bc5b8' : '#000'};
    ${({left}) => left ? 'transform:rotate(180deg)' : ''}
`