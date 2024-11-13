import InputSelect from "./InputSelect"
import InputText from "./InputText"
import Select from "react-select"

const playersClasses:{value:string}[] =[
    {value:"warrior"},
    {value:"priest"},
    {value:"warlock"},
    {value:"shaman"},
    {value:"paladin"}
] 
const options = [
    { value: "Impacto", label: <div><img src="images/Impacto.jpg" alt="Impacto" className="w-6 h-6 inline-block mr-2"/> Impacto</div> },
    { value: "Option2", label: <div><img src="images/Option2.jpg" alt="Option 2" className="w-6 h-6 inline-block mr-2"/> Option 2</div> },
  ];

const FormComponent = ()=><>

        <form action="" className="flex flex-col gap-y-10">
            <div>
                <label htmlFor="battleid">BattleID:</label>
                <br/>
                <InputText name="battleid"/>
            </div>

            <div>
                <label htmlFor="discordid">DiscordID:</label>
                <br/>
                <InputText name="discorid"/>
            </div>

            <div>
                <label htmlFor="charactersName">Character(s)name(s):</label>
                <br/>
                <InputText name="charactersName"/>
                <br />
                <label htmlFor="realm">Character(s)name(s):</label>
                <br/>
                <InputText name="realm"/>
                <br />
                <label htmlFor="class">Class:</label>
                <br/>
                <InputSelect name="class" playersClass={playersClasses}/>
                <br />
                <label htmlFor="spec">Spec:</label>
                <br/>
                <Select options={options} className=""/>
                
            </div>

        </form>

</>



export default FormComponent