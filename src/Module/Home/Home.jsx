import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="container mx-auto px-10 pt-16  sm:px-20 lg:px-40 lg:pt-20 2xl:px-80 2xl:pt-36 ">
      <div>
        <h1 className="text-center text-slate-600  font-medium text-lg mb-24  lg:text-lg 2xl:mb-36">
          Datos Interesantes
        </h1>

        <div className="grid grid-cols-3  gap-y-7 gap-x-9 md:gap-y-12  lg:grid-cols-4 ">
            <CardDatos informacion={"61"} texto={"pedidos"} primario={true} to="/Pedidos"/>
            <CardDatos informacion={"55"} texto={"pedidos completados"} primario={false} to="/Pedidos"/>
            <CardDatos informacion={"5"} texto={"pedidos pendientes"} primario={false} to="/Pedidos"/>
            <CardDatos informacion={"1"} texto={"pedidos cancelados"} primario={false} to="/Pedidos"/>
        </div>

        <div className="w-full h-px bg-slate-300 my-9 md:my-14  lg:invisible  lg:my-8"></div>

        <div className="grid grid-cols-2  gap-x-9 lg:grid-cols-4">
            <CardDatos informacion={"105"} texto={"Productos"} primario={true} to="/inventario"/>
            <CardDatos informacion={"12"} texto={"Produjos bajos en stock"} primario={false} to="/Inventario"/>
        </div>

        <div className="w-full h-px bg-slate-300 my-9 md:my-14 lg:invisible lg:my-8"></div>

        <div className="grid grid-cols-2  gap-x-9 lg:grid-cols-4">
            <CardDatos informacion={"$ " + "3'450.000"} texto={"Ingresos"} primario={true} to="/Contabilidad"/>
            <CardDatos informacion={"$ " + "540.000"} texto={"Egrasos"} primario={true} to="/Contabilidad"/>
        </div>
      </div>
    </main>
  );
}

const CardDatos = ({informacion , texto , primario = false , to = "/"}) => {
  return (
    <Link to={to} className={primario ? "col-span-1" : ""}>
      <p className={`font-semibold text-base mb-3 ${primario ? "text-primario lg:text-2xl " : "text-terceario lg:text-xl" } `}>
        {informacion}
      </p>
      <p className={`text-sm xl:text-base  ${primario ? "font-medium xl:text-gray-500  xl:text-base text-black": "font-normal leading-tight text-gray-400"}`}>
        {texto}
      </p>
    </Link>
  );
};

export default Home;