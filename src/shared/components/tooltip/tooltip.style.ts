import { styled } from "styled-components";


export const ExpandedTooltip = styled.div`
    display: none;
    position: absolute;
`;

export const ContainerTooltip = styled.div`
    padding: 8px;
    &:hover ${ExpandedTooltip} {
        display: block;
        cursor: pointer;
        z-index: 1;
        top: 50px;
    }
`;