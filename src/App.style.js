
import styled from 'styled-components';

import { MEDIA } from './constants/style.constant';

const StyledMain = styled.div`
    background-color: black;
    color: white;

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
            margin-right: 420px;
            @media (max-width: ${MEDIA.MD_MAX}px) {
                margin-right: 0;
            }
        }
        .right {
            position: absolute;
            width: 400px;
            right: 0;
            top: 60px;
            @media (max-width: ${MEDIA.MD_MAX}px) {
                position: static;
                width: 100%;
                height: auto;
            }
            .img1 {
                width: 400px;
                @media (max-width: ${MEDIA.MD_MAX}px) {
                    width: 100%;
                }
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

    .org-logo {
        width: 180px;
    }

    .photo-credit {
        text-align: right;
        font-size: 14px;
        color: grey;
    }

    .marg-t-40 {
        margin-top: 40px;
    }
`;

export default StyledMain;