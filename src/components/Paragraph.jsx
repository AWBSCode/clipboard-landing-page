function Paragraph({heading, paragraph}) {
    return (
        <div className="centered-container relative">
            <h1 className="centered-heading text-3xl font-bold">
                {heading} 
            </h1>
            <p className="centered-paragraph w-1/2 opacity-60">
                {paragraph} 
            </p>
        </div>
    );
}

export default Paragraph