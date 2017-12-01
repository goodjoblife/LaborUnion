
import styled from 'styled-components';

import { MEDIA } from './constants/style.constant';

const StyledMain = styled.div`
    background-color: black;
    color: white;
    h2, h3 {
        font-weight: 400;
        letter-spacing: 2px;
    }
    h2 {
        font-size: 26px;
        color: #FCD406;
    }
    p {
        font-size: 18px;
    }
    p, span, button, a {
        font-weight: 300;
        letter-spacing: 1.2px;
        line-height: 1.5em;
    }

    .align-center {
        text-align: center;
    }

    .flex {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .banner {
        padding-top: 65px;
        @media (max-width: ${MEDIA.SM_MAX}px) {
            padding-top: 55px;
        }
    }

    .container {
        max-width: 1100px;
        margin: auto;
        padding: 0 50px;

        @media (max-width: ${MEDIA.SM_MAX}px) {
            max-width: 100%;
            padding-left: 40px;
            padding-right: 40px;
        }
        @media (max-width: ${MEDIA.XS_MAX}px) {
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            .section {
                padding: 30px 0;
            }
        }
    }

    .section1 {
        position: relative;
        .left {
            margin-right: 375px;
            @media (max-width: ${MEDIA.MD_MAX}px) {
                margin-right: 0;
            }
        }
        .right {
            border: 1px solid white;
            position: absolute;
            width: 350px;
            height: 275px;
            right: 0;
            top: 40px;
            @media (max-width: ${MEDIA.MD_MAX}px) {
                position: static;
                width: 100%;
                height: auto;
            }
        }
    }

    .section2 {
        position: relative;
        .right {
            margin-left: 375px;
            @media (max-width: ${MEDIA.MD_MAX}px) {
                margin-left: 0;
            }
        }
        .left {
            border: 1px solid white;
            position: absolute;
            width: 350px;
            height: 275px;
            left: 0;
            top: 60px;
            @media (max-width: ${MEDIA.MD_MAX}px) {
                position: static;
                width: 100%;
                height: auto;
            }
        }
    }

    .tight-section {
        max-width: 800px;
        margin: auto;
    }

    .section3 {
        .flow-container {
            margin: 40px 0px;
        }
    }

    .red-text {
        color: red;
    }

    .yellow-text {
        color: #FCD406;
    }
`;

export default StyledMain;