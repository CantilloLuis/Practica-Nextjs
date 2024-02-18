import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/libs/prisma' 


export async function GET(request, {params}) {

   const carsId =  await prisma.cars.findUnique({where:{id: Number(params.id)
   }})
    return NextResponse.json(carsId)
}

export async function PUT(request, {params}) {

    const data = await  request.json()

    const carsUpdate = await prisma.cars.update({where:{id:Number(params.id)},data:data})

    return NextResponse.json("Actualizando cars " + params.id)
}

export async function DELETE(request, {params}) {


    try {
        const carsRemoved = await prisma.cars.delete({where:{id: Number(params.id)}})
        return NextResponse.json("Registro eliminado correctamente " )

    }catch(err) {
        return NextResponse.json(err.message)
    }
}
