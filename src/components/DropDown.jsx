import { useContext, useEffect } from "react";

import MyContext from "../context/MyContext";
import { ACTIONS } from "../actions/actions";

const DropDown = () => {
  const { select, selectDispatcher, URL, categories, categoriesDispatch } =
    useContext(MyContext);

  const categoriesURL = `${URL}categories`;
  const { results, loading, error }=categories;

  useEffect(() => {
    fetch(categoriesURL)
      .then((response) => response.json())
      .then((results) =>
        categoriesDispatch({
          type: ACTIONS.GET_CATEGORIES,
          payload: { ...categories, results, loading: false },
        })
      )
      .catch((error) =>
        categoriesDispatch({
          type: ACTIONS.ERROR,
          payload: { ...categories, loading: false, error },
        })
      );
  }, [categories, categoriesURL, categoriesDispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.messege}</p>;
  return (
    <select
      defaultValue={select}
      onChange={(e) =>
        selectDispatcher({ type: ACTIONS.CHANGE, payload: e.target.value })
      }
    >
      <option value="default">Please select a category</option>
      {results.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
export default DropDown;
