function Button({ text, bg, borderColor }) {
    return (
        <button
            style={{
                background: bg,
                borderColor: borderColor,
                boxShadow: `0 10px 160px ${bg}`
            }}
            className="btn px-[30px] h-[50px] rounded-full text-white border-b-4 border-solid"
        >
            Download for {text}
        </button>
    )
}

export default Button
