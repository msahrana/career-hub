import {useEffect, useState} from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="text-center space-y-5 my-12">
      <h1 className="text-2xl lg:text-5xl font-semibold">Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future...
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
