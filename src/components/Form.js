// create style here
const styles = {
  form: {
    backgroundColor: "red"
  },
  button: {
    color: "green"
  }
}

// create Form component
function Form() {
  return (
    <form style={styles.form} >
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="usernameInput"
          style={{
            marginBottom: "5px",
            display: "block"
          }}>Username</label>
        <input type="text" id="usernameInput"
          style={{
            padding: "10px",
            fontSize: "1rem"
          }} />
      </div>
      <button style={{
        padding: "5px 20px",
        cursor: "pointer"
      }}>Submit</button>
    </form>
  )
}

export default Form
