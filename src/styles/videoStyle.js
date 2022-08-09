import styled from 'styled-components'
import { keyframes} from "styled-components"
import bg from '../images/video-bg.png'
export const Video = styled.div`
    padding: 150px 130px;
    background-image: url(${bg});
    background-size: cover;
`
export const VideoInner = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const VideoItem = styled.div `
    position:relative;
   :first-child{
        width:70%;
        h1{
            color:#fff;
            font-size:40px;
            font-weight:800;
            margin-bottom: 40px;
        }
        p{
            color:#fff;
            font-size: 18px;
        }
   }
`
const anim = keyframes`
    0%{
        transform:translate(-50%,-50%) scale(1);
        opacity:1
    }100%{
        transform:translate(-50%,-50%) scale(1.2);
        opacity:0
    }
`
export const VideoImg = styled.img`
    position:relative;
    z-index:2;
`
export const VideoImgDiv = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 100%;
    // z-index: -1;
    animation: ${anim} 1.3s infinite ease;
`