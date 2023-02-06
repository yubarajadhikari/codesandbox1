import { useState } from 'react';

const Actions = (props) => {
const {actions, reply} = props.messages[props.messages.length - 1]
const [hide,setHide] = useState(false);

return hide ? "" : (<div>
    {actions.map(action => {
        return <button
        style={{display: "block",marginTop:10, backgroundColor: 'teal', color: 'white', width: '100%', padding: '10px 30px', borderWidth: 0, borderRadius: 100,
    }}
        key={action.title}
        onClick={()=>{
            console.log("hello",action.data.value)
            setHide(true)
            reply(action.data.value)}}
        >{action.title}</button>
    })}
</div>)
};

export default Actions;
