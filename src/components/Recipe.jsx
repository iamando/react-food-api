import React from "react";
import style from "../modules/recipe.module.css";

const Recipe = ({ title, calories, image, url, source, healths }) => {
  const cardStyle = {
    width: "18rem",
    margin: "20px",
  };

  const icon = {
    color: "lightseagreen",
    paddingRight: "10px",
  };

  const text = {
    fontSize: "14px",
    color: "#000",
    padding: "5px",
  };

  return (
    <div className={style.card} style={cardStyle}>
      <img className={style.cardImgTop} src={image} alt="Recipe Images" />
      <div className={style.cardbody}>
        <h5 className="card-title text-center pt-2">{title}</h5>
        <small className={style.source}>{source}</small>
        <hr className={style.line} />
      </div>
      <div className={style.ingredients}>
        {healths.slice(0, 4).map((health) => (
          <p className="card-text" style={text}>
            <i className="fas fa-utensils" style={icon}></i>
            {health}
          </p>
        ))}
      </div>
      <a href={url} className={style.btn}>
        View Recipe
      </a>
    </div>
  );
};

export default Recipe;
