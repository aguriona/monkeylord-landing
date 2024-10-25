const Welcome = (props: any) => {
    const styles = {
        main: {
            backgroundColor: "#f1f1f1",
            width: "100%",
        },
        inputText: {
            padding: "10px",
            color: "red",
        },
    };
    return (
      <div className="main" style={styles.main}>
        <h1>Hello, {props.name}</h1>;
        <input type="text" style={styles.inputText}></input>
      </div>
    );
  }
  
  export default Welcome