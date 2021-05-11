function Package({ image }) {
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <div>
      <h1>Package {}</h1>
      <img src={image} alt="package" width="200" />
      <p>Prix:</p>
      <br />
      <p>Météo:</p>
      <br />
      <p>Date:</p>
    </div>
  );
}

export default Package;
