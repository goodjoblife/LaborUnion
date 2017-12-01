
import styled from 'styled-components';

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
    }

    .align-center {
        text-align: center;
    }

    .flex {
        display: flex;
    }

    .section1, .section2 {
        display: flex;
        .left {
            margin-right: 25px;
        }
    }

    .container {
        max-width: 1100px;
        margin: auto;
        padding-top: 65px;
    }

    .red-text {
        color: red;
    }

    .yellow-text {
        color: #FCD406;
    }
`;

export default StyledMain;