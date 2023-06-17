const CustomImgs = ({ imgSrc, pt }) => {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="dd" />
    </div>
  );
};

export default CustomImgs;
