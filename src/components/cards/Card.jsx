export default function Card({ico, heading, paragraph}) {
    return <div className="card">
        <i className={ico}></i>
        <br />

        <h1 className="text-2xl my-3" >{heading}</h1>

        <p>
            {paragraph}
        </p>
    </div>
}