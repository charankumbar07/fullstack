"use server"
import fs from 'fs/promises'
export const submit = async (e)=>{
    console.log(e.get("name"),e.get("add"))
    fs.writeFile("data.txt",` Name is ${e.get("name")} And addres is ${e.get("add")}`)
}