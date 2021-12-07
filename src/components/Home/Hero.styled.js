import styled from 'styled-components';

export const StyledHero = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;

    & video {
        object-fit: cover;
        width: 100%;
        position: fixed;
        z-index: -1;
    }

    & .heroImg {
        object-fit: cover;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: -1;
    }

    & > h1 {
        color: #FFFFFF;
        font-size: 60px;
        margin: 30px;
    }

    & > p {
        margin-top: 8px;
        color: #fff;
        font-size: 32px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
            'Lucida Sans', Arial, sans-serif;
    }

    .hero-btns {
        margin-top: 32px;
    }

    .hero-btns .btn {
        margin: 6px;
    }

    .fa-file-code {
        margin-left: 4px;
    }

    @media screen and (max-width: 960px) {
        & > h1 {
            font-size: 40px;
        }
    }

    @media screen and (max-width: 768px) {
        & > h1 {
            font-size: 30px;
            line-height: 30px;
        }

        & > p {
            font-size: 30px;
        }

        .btn-mobile {
            display: block;
            text-decoration: none;
        }

        .btn {
            width: 100%;
        }
    }
`
