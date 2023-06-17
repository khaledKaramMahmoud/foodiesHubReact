import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
const Recipes = () => {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/img_3.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/img_2.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/img_2.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/img_4.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/img_3.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/img_2.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/img_1.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
  ].sort(() => Math.random() - 0.5);
  //sort line to change cards every time .5 to change index don't max to 1
  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
