import react from "react";

const Card = ({
  btnText,
  CardTitle,
  Description,
  img = "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  return (
    <div className="col-4 p-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{CardTitle}</h5>
          <p className="card-text">{Description}</p>
          <a href="#" className="btn btn-success">
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
