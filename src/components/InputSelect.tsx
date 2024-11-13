import OptionSelectInput from "./OptionSelectInput"


const InputSelect = ({name, playersClass}:{name:string, playersClass:{value:string,icon?:string}[]})=><>
    <select name={name} className="text-black px-16 py-3 rounded-lg">
        {playersClass.map(e=>
            <OptionSelectInput img={e.icon} value={e.value}/>
         )}    
    </select>
</>


export default InputSelect