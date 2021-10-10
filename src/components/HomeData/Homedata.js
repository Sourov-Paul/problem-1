import React from 'react';

const Homedata = (props) => {
    const{strMeal,strInstructions,strMealThumb}=props.food;

    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                width="300px"
                src={strMealThumb}
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{strMeal}</h5>
                <p class="card-text">{strInstructions.slice(0, 100)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Homedata;