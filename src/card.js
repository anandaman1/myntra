function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src="https://www.beyoung.in/api/cache/catalog/products/printed_t-shirt_girl_final_16_9_2022/take_me_anywhere_blue_t-shirt_for_girls_base_5_10_2022_700x933.jpg"
        height="200px"
        width="200px"
        alt="error"
        style={{ display: "block", margin: "auto" }}
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1 style={{ width: "200px" }}>{props.offer}</h1>
        <h2>Shop now</h2>
        <p style={{ padding: "20px" }}>{'\u20B9'}{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
