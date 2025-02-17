import Card from "./Card";

const App = () => {
  return (
    <div className="container mt-5 d-flex flex-column align-items-center gap-3">
      <h1>Карточки</h1>

      {/* Карточка с изображением */}
        <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        image="/cards/images/card1.jpg"
      >
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>

      {/* Карточка без изображения */}
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
      >
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
    </div>
  );
};

export default App;
