import { useReducer } from "react";

function reducer(state, action) {
  // 업데이트를 위해 필요한 정보를 담은 액션값을 전달 받아 새로운 상태를 반환하는 함수.
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    age: "",
  });
  const { name, age } = state;
  const onChange = (e) => {
    dispatch(e.target); // dispatch -> 액션을 발생시키는 함수
    console.log(e.target);
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="age" value={age} onChange={onChange} />
      <div>
        <p>{state.name}</p>
        <span>{age}</span>
      </div>
    </div>
  );
};

export default Info;
