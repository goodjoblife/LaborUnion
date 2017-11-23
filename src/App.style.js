
import styled from 'styled-components';

const StyledMain = styled.div`
    background-color: black;
    color: white;

    h2 {
        font-size: 26px;
        color: #FCD406;
    }
    p {
        font-size: 18px;
    }

    .section1, .section2 {
        display: flex;
        .left {
            margin-right: 25px;
        }
    }

    .section.align-center {
        text-align: center;
    }

    .container {
        max-width: 1100px;
        margin: auto;
        padding-top: 65px;
    }
`;

export default StyledMain;