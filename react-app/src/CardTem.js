import React from "react";

// 1 rem = 16px

const CardTem = (props) => {
  const { personData } = props; //destructuring

  // Ternaty Operator
  const personList = personData.length ? (
    personData.map((info) => {
      return (
        <div
          className="card"
          style={{ width: "200px", padding: "20px" }}
          key={info.contact}
        >
          <div className="card-body">
            <h5 className="card-title">{info.name}</h5>
            <p className="card-text-email">{info.email}</p>
            <p className="card-text-birthday">{info.birthday}</p>
            <p className="card-text-birthday">{info.contact}</p>
            <p className="card-text-info">{info.info}</p>
          </div>
        </div>
      );
    })
  ) : (
    <></>
  );

  return <>{personList}</>;
};
export default CardTem;
