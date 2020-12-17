import React from "react";

const Store = (props) => {
  const { store_name, store_pic, store_category } = props.data;
  
  return (
      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="store">
    <img src={store_pic} alt={store_name}  className="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{store_name}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">{store_category}</small></p>
    </div>
  </div>
    </div>
    
  );
};

export default Store;
