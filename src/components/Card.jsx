export default function Card({ title, isVisited, imgURL, children }) {
    return <div className="flex flex-col rounded-md bg-zinc-950">
        <div className="p-4" style={{ color: "white" }}>
            <img src={imgURL} alt={title} width="500" />
            <h2 className="text-2x1 text-white font-bold">{title}</h2>
            <p className="text-gray-500">{children}</p>
            {isVisited ? <p>Visitata</p> : <p>Non visitata</p>}
        </div>
    </div>
}