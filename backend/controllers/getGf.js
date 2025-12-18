import { gfs } from "../gfs.js";

export const getGf = (req, res)=>{
    console.log("Printed gfs")
    res.send(gfs)
}