import { useGetRandomPhrase } from "../customHooks/useGetRandomPhjrase";

export const RightCard = () => {
  const { reload, setReload, randomPhrase } = useGetRandomPhrase();

  return (
    <div className="containerRightCard">
      {randomPhrase.length > 0 ? (
        reload ? (
          <div className="eachPhrase">
            <div className="containerPhrase">
              <p className="phrase">{randomPhrase[0].phrase}</p>
            </div>
            <div className="containerAutorPhrase">
              <img title={randomPhrase[0].autor} src={randomPhrase[0].photo} />
              <p className="autorPhrase">{randomPhrase[0].autor}</p>
            </div>
            <button onClick={() => setReload(!reload)}>Change phrase</button>
          </div>
        ) : (
          <div className="eachPhrase2">
            <div className="containerPhrase">
              <p className="phrase">{randomPhrase[0].phrase}</p>
            </div>
            <div className="containerAutorPhrase">
              <img title={randomPhrase[0].autor} src={randomPhrase[0].photo} />
              <p className="autorPhrase">{randomPhrase[0].autor}</p>
            </div>
            <button onClick={() => setReload(!reload)}>Change phrase</button>
          </div>
        )
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};
