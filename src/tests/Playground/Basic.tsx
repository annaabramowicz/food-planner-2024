import { useEffect, useState } from "react";

const Basic = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogin(true);
    }, 500);
  }, []);

  return (
    <>
      <form>
        <div>
          <input type="text"></input>
        </div>
      </form>
      {login ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setLogin(true)}>Login</button>
      )}
    </>
  );
};

export default Basic;
