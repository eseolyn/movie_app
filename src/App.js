import PropTypes from "prop-types";

function Food({ name, country, rating }) {
  return (
    <div>
      <h3>
        {name} in {country}
      </h3>
      <h4>{rating}/5.0</h4>
    </div>
  );
}
// component file&function는 대문자
// App에서 child-compo로 정보를 보내고 정보를 사용하는 법
// property으로 value를 보냄(log porps => Object) like HTML: jsx
// ex) <Food fav="kimbab" />  =>여러정보를 보내기에 비효율적
// list의 child에는 각각의 unique key prop이 있어야한다.
// props를 제대로 보내고 있는지 확인 ⇒ PropTypes

Food.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "kimbab",
    country: "korea",
    rating: 4.5,
  },
  {
    id: 2,
    name: "pizza",
    country: "italia",
    rating: 5.0,
  },
  {
    id: 3,
    name: "donuts",
    country: "U.S.A",
    rating: 4.0,
  },
];

function App() {
  return (
    <div>
      <h1>Food Contest List</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id} // react need unique key
          name={dish.name}
          country={dish.country}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
