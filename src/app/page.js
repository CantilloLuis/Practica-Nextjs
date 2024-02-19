
"use client"

import { useRouter } from 'next/navigation';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function (){

    const route = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        const marca = e.target.marca.value;
        const color = e.target.color.value;
        const antiguedad = e.target.antiguedad.value;
        const modelo = e.target.modelo.value;

        const res = await fetch("api/cars",{
            method: 'POST',
            body: JSON.stringify({marca,color,antiguedad,modelo}),
            headers: {'Content-Type': 'application/json',},
    
        });

        route.push('/cars');


    }

    return(
        
        <div>
            <h1 className="text-center my-4 text-2xl">Practica NextJS - Automoviles</h1>
            
            <div className="flex flex-col justify-center items-center">
                
                <form className="flex max-w-md flex-col gap-4 " onSubmit={onSubmit}>

                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="Marca" value="Marca" />
                        </div>
                        <TextInput id="marca"  name="marca" className="w-full lg:w-80" type='text'  placeholder="...." required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="Color" value="Color" />
                        </div>
                        <TextInput id="color" name="color" className="w-full lg:w-80" type='text'  placeholder="...." required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="Antiguedad" value="Antiguedad" />
                        </div>
                        <TextInput id="antiguedad" name="antiguedad" className="w-full lg:w-80" type='text'  placeholder="...." required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="Modelo" value="Modelo" />
                        </div>
                        <TextInput id="modelo" name="modelo" className="w-full lg:w-80" type='text'  placeholder="...." required />
                    </div>
                
                    <Button type="submit">Registrar</Button>

                </form>
            </div>


        </div>


    )
}