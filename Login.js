
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};


function App() {
    function handleLogin(){
        user.email = 'new value';
        user.password = 'pss123456';
        user.loggedIn = true;
        
    }
    
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}

export default App;
