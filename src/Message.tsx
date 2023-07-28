function Message(){
    // JSX: JavaScript XML
    const name = 'Marius';
    if (name)
        return <h1>Aloha {name}</h1>;
    else
        return <h1>Aloha beaches</h1>;

}

export default Message;