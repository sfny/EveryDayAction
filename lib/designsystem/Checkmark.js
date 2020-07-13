import styled from 'styled-components';

const CheckY = styled.div`
path{ 
    fill:  ${props => props.fill || "#FCE21B"}
};
`

const CheckB = styled.div`
path{ 
    fill:  ${props => props.fill || "#4495F2"}
};
`

const CheckP = styled.div`
path{ 
    fill:  ${props => props.fill || "#A144F2"}
};
`

 
export { CheckY, CheckB, CheckP } 
    