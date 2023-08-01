
export default function PhotoPage({params}: {params: {id: string}}) {
    return (
        <>
            <div>
                <h1>Hello, this is photo: {params.id}</h1>
            </div>
        </>
    )
}


