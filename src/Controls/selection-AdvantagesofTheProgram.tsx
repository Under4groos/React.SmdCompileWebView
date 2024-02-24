import React from "react";
import "../Resource/img3d.scss";
import "../Resource/Headeritem.scss";

import ButtonItemDignity from "./Buttons/button-item-dignity";

const SelectionAdvantagesofTheProgram = () => {
  return (
    <>
      <section className="  selection-light">
        <div className="container px-5 my-5">
          <div className="row gx-5 ">
            <div className="col-lg-4 mb-5 mb-lg-0 my-5">
              <h2 className="fw-bolder text-white-50 mb-0">
                Достоинства программы{" "}
              </h2>
            </div>
            <div className="col-lg-8 my-5">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <ButtonItemDignity
                  Title={"Удобный UI"}
                  Text={
                    "Все кнопки, фреймы, лейбы расположены так чтобы вам было удобно"
                  }
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Множество настроек"}
                  Text={"Доступная настройка каждого угла программы"}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Тут текст"}
                  Text={"Я забыл что хотел написать..."}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Help me pls!"}
                  Text={"UnderKo .... Kill me"}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Множество настроек"}
                  Text={"Доступная настройка каждого угла программы"}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Тут текст"}
                  Text={"Я забыл что хотел написать..."}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Help me pls!"}
                  Text={"UnderKo .... Kill me"}
                ></ButtonItemDignity>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SelectionAdvantagesofTheProgram;
