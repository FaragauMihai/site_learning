import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Tasta = ({ children }: Props) => {
  const [nbCLicked, setNbClicked] = useState(1);
  let nb = 0;

  const addClick = () => {
    setNbClicked(nbCLicked + 1);
    console.log("Tastat de " + nbCLicked + " ori!");
  };

  return (
    <div>
      <button className="btn btn-primary" type="button" onClick={addClick}>
        {children}
      </button>
    </div>
  );
};

export default Tasta;
