import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();
  //   console.log(id);
  return <div>{id} Category Page</div>;
};

export default CategoryPage;
