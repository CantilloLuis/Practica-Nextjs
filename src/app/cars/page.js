'use client'
import { Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


export default  function table() {

  const [cars, setCars] = useState([]);

  async function loadCars2() {
    const Cars = await fetch("api/cars").then((response) => response.json());
    setCars(Cars);
    
  }

  useEffect(() => {
    loadCars2();
  },[])


  const route = useRouter();

  return (
    <div className="overflow-x-auto">
      <br></br>
      <Table>
        <Table.Head className='' >
          <Table.HeadCell>Marca</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Ambiguedad</Table.HeadCell>
          <Table.HeadCell>Modelo</Table.HeadCell>
          <Table.HeadCell>Operacion</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cars.map((car) =>(

            <Table.Row key={car.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{car.marca}</Table.Cell>
            <Table.Cell>{car.color}</Table.Cell>
            <Table.Cell>{car.antiguedad}</Table.Cell>
            <Table.Cell>{car.modelo}</Table.Cell>
            <Table.Cell>
              <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"

              onClick={async () =>{
                const res = await fetch(`/api/cars/${car.id}`,{ method: 'DELETE', });
                
                route.refresh();
                route.push("/cars")
                const date = await res.json();
                console.log(date);
                loadCars2();


              }}  
              >Eliminar</button>
              
            </Table.Cell>
          </Table.Row>

          ))}

        </Table.Body>
      </Table>
    </div>
  );
}