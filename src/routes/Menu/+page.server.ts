export async function load(){
    let mis_libros = await db.execute("SELECT * FROM autores")
    return {mis_libros}
}