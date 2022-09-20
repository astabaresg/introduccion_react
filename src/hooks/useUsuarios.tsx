import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, Users } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Users[]>([]);
    const Paginaref = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])
    
    const cargarUsuarios = async() =>{
        const resp = await reqResApi.get<ReqResList>('/users', {
            params:{
                page: Paginaref.current
            }
        });
        
        if( resp.data.data.length > 0 ){
            setUsuarios(resp.data.data);
        }else{
            alert('no hay más registros')
        }
        
    }
    const paginaSiguiente=()=>{
        Paginaref.current ++;
        cargarUsuarios();
    }
    const paginaAnterior=()=>{
        if( Paginaref.current >1 ){
            Paginaref.current--;
            cargarUsuarios();
        }

    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }
}
