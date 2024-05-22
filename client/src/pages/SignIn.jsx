function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = new FormData(e.target);
    const userInputData = {
      userName: inputData.get("userName"),
      password: inputData.get("password"),
    };
    console.log(userInputData);
  };
  return (
    <form action="" className="sign-in-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign In</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" name="userName" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" className="btn solid" />

      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}

export default SignIn;
