import react from "react";
import Card from "./Card";

export default function CardSection() {
  return (
    <section className="contact bg-success py-4 ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <Card
            CardTitle="Card title"
            Description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            btnText="Go Somwhere"
          />
          <Card
            CardTitle="Card title"
            Description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            btnText="Go Somwhere"
          />
          <Card
            CardTitle="Card title"
            Description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            btnText="Go Somwhere"
          />
          <Card
            CardTitle="Card title"
            Description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            btnText="Go Somwhere"
          />
        </div>
      </div>
    </section>
  );
}
