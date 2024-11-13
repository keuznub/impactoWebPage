import FormComponent from "../components/FormComponent"



const ContactUs = () => <>

    <section className="mb-40">
        <article>
            <header className="text-xl md:text-5xl my-20">
                Before Aplying:
            </header>
            <ul className="list-disc ml-20">
                <li>Requisite 1</li>
                <li>Requisite 2</li>
                <li>Requisite 3</li>
                <li>Requisite 4</li>
            </ul>
        </article>
    </section>

    <section className="justify-items-center">
            <FormComponent/>
    </section>

</>

export default ContactUs