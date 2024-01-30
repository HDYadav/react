const User = (props) => {
    const { name } = props;
 
return (
  <div className="card-items">
    <h2>Name: {name}</h2>
    <h2>Location: Noida</h2>
  </div>
);
};

export default User;
