import axios from "axios";
// import { Toast } from "primereact/toast";

function SignUp() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const inputData = new FormData(e.target);
      const userInputData = {
        userName: inputData.get("userName"),
        email: inputData.get("email"),
        password: inputData.get("password"),
      };
      console.log(userInputData);

      const response = await axios.post("/api/users/register", userInputData);
      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert("Error:" + response.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form action="" className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign Up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" name="userName" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Sign Up" className="btn solid" />

      <p className="social-text">Or Sign up with social platforms</p>
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

export default SignUp;
