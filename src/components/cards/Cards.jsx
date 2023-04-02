import Card from "./Card";

/*
    - روح جيب الأيقونات
    - اعمل object تحط فيه الكلام
    - روح جيب الكلام بتاع heading and paragraph
    - ظبط ال css, tailwindCSS 
*/

export default function Cards() {
    const cards = [
        {
            heading: "Create blacklists",
            paragraph: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
            ico: "fa-solid fa-scroll"
        },
        {
            heading: "Plain text snippets",
            paragraph: "Remove unwanted formatting from copied text for a consistent look.",
            ico: "fa-solid fa-text-height"
        },
        {
            heading: "Plain text snippets",
            paragraph: "Remove unwanted formatting from copied text for a consistent look.",
            ico: "fa-solid fa-eye"
        }
    ]

    return <div className="cards flex">
        {
            cards.map((el, idx) => {
                return <Card key={idx} heading={el.heading} paragraph={el.paragraph} ico={el.ico} />
            })
        }
    </div>
}