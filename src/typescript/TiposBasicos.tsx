export const TiposBasicos = () => {

    const nombre:string = "Sebastian";
    const edad:number = 35;
    const estaActivo:boolean = true;
    const poderes:string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua']

  return (
    <>
        <h3>Tipos Básicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'Activo': 'No Activo'}
        <br />
        {poderes.join(', ')}
    </>
  )
}
