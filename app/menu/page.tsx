export default async function Menu() {
    const res = await fetch(`${process.env.SERVER}/food`);
    const data = await res.json()
    console.log(data)
    return (
        <main>
            
        </main>
    )
}