const Category = ({category}) => {
  const {logo, category_name, availability} = category;

  return (
    <div className="p-6 rounded-md shadow-md text-start bg-gray-50">
      <img src={logo} alt="" className="rounded-md size-16 bg-gray-400 p-1" />
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">{category_name}</h2>
      </div>
      <p className="dark:text-gray-800">{availability}</p>
    </div>
  );
};

export default Category;
