function Lines(props) {
  return (
    <div className="lines">
      {[...Array(7)].map((sp, key) => {
        return (
          <p className="num" key={key}>
            {props.index + key}
          </p>
        );
      })}
    </div>
  );
}

export default Lines;
