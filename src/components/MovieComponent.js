import styled from "styled-components";

const MovieContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px;
 width: 280px;
 box-shadow: 0 3px 10px 0 #aaa;
 cursor: pointer;
`;

const CoverImage = styled.img`
    object-fit: cover;
    height: 362px;
`

const MovieName = styled.span` 
    font-size : 18px;
    font-weight: 600;
    margin: 15px 0;
    color: black;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const MovieComponent = (props) => {
    
    return (
    <MovieContainer>
        <CoverImage src="https://images-na.ssl-images-amazon.com/images/I/71qXcEIdwbL.jpg" />
        <MovieName> Movie Name </MovieName>
    </MovieContainer>
    );
};

export default MovieComponent;