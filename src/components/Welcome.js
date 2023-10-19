const Welcome = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>Merhaba {name} Hoş Geldin!</h1>
    </div>
  );
};

export default Welcome;
