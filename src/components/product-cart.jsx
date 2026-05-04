const ProductCard = ({ title, price, thumbnail, description }) => {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
