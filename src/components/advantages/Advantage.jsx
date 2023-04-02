export default function Advantage({heading, description}) {
    return (
        <div className="advantage mb-5">
            <h1 className="text-2xl font-bold mb-3">{heading}</h1>
            <p>{description}</p>
        </div>
    )
}