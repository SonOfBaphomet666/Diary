import jsonData from "./card.json";


const ProductCard = () => {
  return (
    <div>
      {jsonData.map((jsonObject) => {
        return (
          <>
            <h1>{jsonObject.title}</h1>
            <p>{jsonObject.id}</p>
            <p>{jsonObject.salary}</p>
          </>
        );
      })}
    </div>
  );
};

export default ProductCard;
