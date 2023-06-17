import CustomImgs from "./CustomImgs";
const About = () => {
  const images = [
    "/img/img_1.jpg",
    "/img/img_2.jpg",
    "/img/img_3.jpg",
    "/img/img_4.jpg",
    "/img/img_1.jpg",
    "/img/img_2.jpg",
    "/img/img_3.jpg",
    "/img/img_4.jpg",
    "/img/img_4.jpg",
  ];
  return (
    <div className="section about">
      <div className="col typography">
        <h1 className="title">What are We about</h1>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          saepe omnis, fugiat asperiores iste magnam reprehenderit architecto
          sequi?
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImgs key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
};

export default About;
