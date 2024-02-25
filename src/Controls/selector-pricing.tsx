import React from "react";
import "../Resource/selector-pricing.scss";

const SelectorPricing = () => {
  return (
    <>
      <section className="pt-10 pt-md-12  py-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h3 className="mb-3 text-white">
                Цены, которые сделают вашу работу более эффективной
              </h3>
            </div>
          </div>

          <div className="row py-5 ">
            <div className="col-md-6  ">
              <div className="  card-shadow border-0 mb-4">
                <div className="card-body  p-4 card-back card-border">
                  <div className="d-flex align-items-center">
                    <h5 className="font-medium m-b-0 fs-3 text-white  text-uppercase">Free</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 text-center">
                      <div className="price-box my-3">
                        <h1 className="card-title pricing-card-title text-white">
                          0₽
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-7 align-self-center">
                      <ul className="list-inline pl-3 fs-5    ">
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">Компиляция в один клик</span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                            Авто-создание QC файлов
                          </span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                           Быстрая настройка
                          </span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                            Запуск игры из приложения 
                          </span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                            Список QC комманд
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  ">
              <div className="  card-shadow border-0 mb-4 ">
                <div className="card-body p-4 card-back card-border">
                  <div className="d-flex align-items-center">
                    <h5 className="font-medium m-b-0 fs-3 text-white  text-uppercase">Pro</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 text-center">
                      <div className="price-box my-3">
                        <h1 className="card-title pricing-card-title  text-white">
                          500₽
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-7 align-self-center">
                      <ul className="list-inline pl-3 fs-5">
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">Тоже что и у Free</span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                            Конвертация Png, jpeg в VTF с VMT
                          </span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                            {" "}
                            Установка заднего фона
                          </span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                            Копирование материалов в игру
                          </span>
                        </li>
                        <li className="py-2">
                          <i className="icon-check text-info mr-2"></i>{" "}
                          <span className="text-white-50">
                            И многое другое... 
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SelectorPricing;
