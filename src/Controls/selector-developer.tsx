import React from "react";

 
const SelectorDevelopers = () => {
  return (
    <>
      <section className="py-5 ">
        <div className="container px-5 my-5">
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="https://avatars.githubusercontent.com/u/54286928?v=4"
                  alt="..."
                />
                <h5 className="fw-bold text-white-50">UnderKo</h5>
                <div className="  text-white-50 fw-medium">
                  Основной разработчик
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SelectorDevelopers;
