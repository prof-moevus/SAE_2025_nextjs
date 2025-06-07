

function UserRow({type, value, myStyle}){
    let s = ""
    if (myStyle === "red"){
        s = "bg-blue-100 text-red-900"
    }
    return (
        <p className={"text-[2rem] m-1 p-3 border-b-cyan-800 border-4 " + s}>
            {type}: {value}
        </p>
    )
}

function User({name, mail, age, hobbies}) {

    return (
        <div className="bg-amber-600 m-1 gap-2 p-2 flex flex-col items-start justify-center">
            <UserRow type="Username" value={name} myStyle={"red"}/>
            <UserRow type="Mail" value={mail}/>
            {age && <UserRow type="Age" value={age}/>}
            <ul>
            {hobbies && hobbies.map((item, index) => {
                    return (<li key={index}> Hobby {index+1}: {item} </li>)
                }
            )}
            </ul>
        </div>
    )
}


function PropsExample() {

    return (
        <main className="bg-amber-200">
            <h1> Exemple props</h1>
            <p>hey</p>
            <User name={"prof"}
                  mail={"prof@edu.ca"}
                  age={12}
                  hobbies={["velo", "café", "prog web", "fleurs"]}
            />
            <User name={"test"} mail={"prof@edu.ca"}/>


        </main>
    )
}


export default PropsExample