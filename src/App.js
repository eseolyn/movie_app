function Food({ name, country }) {
  return (
    <div>
      <h3>
        {name} in {country}
      </h3>
    </div>
  );
}
// component file&function는 대문자
// App에서 child-compo로 정보를 보내고 정보를 사용하는 법
// property으로 value를 보냄(log porps => Object) like HTML: jsx
// ex) <Food fav="kimbab" />  =>여러정보를 보내기에 비효율적

const foodILike = [
  {
    name: "kimbab",
    country: "korea",
  },
  {
    name: "pizza",
    country: "italia",
  },
  {
    name: "donuts",
    country: "usa",
  },
];

function App() {
  return (
    <div>
      <h1>Food Contest List</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} country={dish.country} />
      ))}
    </div>
  );
}

export default App;
