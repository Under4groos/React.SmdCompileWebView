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
              <h2 className="fw-bolder text-white mb-0">
                Достоинства программы{" "}
              </h2>
            </div>
            <div className="col-lg-8 my-5">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <ButtonItemDignity
                  Title={"Удобный UI"}
                  Text={
                    "Красивый и удобный дизайн. Все кнопки, фреймы, лейбы расположены так чтобы вам было удобно"
                  }
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Множество настроек"}
                  Text={"Доступная настройка каждого угла программы. "}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Конвертация на лету"}
                  Text={"Создание, удаление файлов, компиляция и конвертация материалов \"на лету\" и многое другое..."}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Первая настройка"}
                  Text={"Простая настройка в пару кликов. Не нужно бегать по папкам и искать .exe шники, она сделает это за вас."}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Редактор кода"}
                  Text={"Полная настройка Текстового редактора. В папке \"Data\\SyntaxBox\" вы можете менять конфигурации форматов."}
                ></ButtonItemDignity>
                  <ButtonItemDignity
                  Title={"Консоль"}
                  Text={"Удобный вывод логов в консоль. Возможно вынести в отдельное окно."}
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
