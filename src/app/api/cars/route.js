import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma' 

export async function GET(){

   const cars = await prisma.cars.findMany()
    return NextResponse.json(cars)
}

export async function POST(request){

    const {marca,color,antiguedad,modelo} = await request.json()
    const cars = await prisma.cars.create({data: {

        marca,
        color,
        antiguedad,
        modelo

        }
    })
    return NextResponse.json(cars)
 }

