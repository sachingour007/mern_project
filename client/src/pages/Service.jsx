import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { serviceData } = useAuth();
  console.log(serviceData);
  if(!serviceData){
    return <div>Data Not Found</div>
  }
  return (
    <>
      <section className="serviceSec">
        <div className="wrapper">
          <div className="secHeading">
            <h2>Services</h2>
          </div>
          <div className="cardContainer">
            {serviceData.map((el) => {
              return (
                <div className="card" key={el._id}>
                  <div className="cardImg">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg"
                      alt=""
                    />
                  </div>
                  <div className="cardData">
                    <div className="subDetails">
                      <h5>{el.provider}</h5>
                      <h5>Price : {el.price}</h5>
                    </div>
                    <h2>{el.service}</h2>
                    <p>{el.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
