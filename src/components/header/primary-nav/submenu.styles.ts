import styled from 'styled-components';

export const SubmenuWrapper = styled.div<{ show: boolean }>`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    padding: 10px;
    width: 100%;
    height: 20rem;
`;

export const SubmenuItem = styled.li`
    list-style: none;
    display: flex;
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    opacity: .5;
`;

export const SubmenuItems = styled.ul`
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
`   

export const SubmenuLink = styled.a`
    color: #fff;
    text-decoration: none;
    opacity: 1 !important;

    &:hover {
        text-decoration: underline;
    }
`;