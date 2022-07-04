import styled from "styled-components";
// import { categories } from ".
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

`;

const Recipes = (item) => {
  return (
    <Container>
      {Recipes.map((item) => (
        <CategoryItem item={item}  />
      ))}
    </Container>
  );
};

export default Recipes;
