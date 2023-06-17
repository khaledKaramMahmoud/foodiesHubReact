import CustomImgs from "./CustomImgs";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <CustomImgs imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img src={recipe.authorImg} alt="" className="auther-img" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
          quidem ratione recusandae quos unde.
        </p>
        <a href="#!" className="view-btn">
          view recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
