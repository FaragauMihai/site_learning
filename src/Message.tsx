let count = 0;

const Message = () => {
  console.log("Message count", count);

  count++;
  return <h1>Message {count}</h1>;
};

export default Message;
