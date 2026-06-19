import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange"
  });

  const onSubmit = (data) => {
    alert("🎉 Registration Successful!");
    console.log(data);
  };

  const onError = () => {
    alert("⚠️ Please enter all required values correctly.");
  };

  return (
    <form
      className="form-card"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h2>Register</h2>

      <div className="form-group">
        <label>Name</label>
        <input {...register("name")} />
        <p className="error">{errors.name?.message}</p>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input {...register("email")} />
        <p className="error">{errors.email?.message}</p>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          {...register("password")}
        />
        <p className="error">{errors.password?.message}</p>
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword")}
        />
        <p className="error">
          {errors.confirmPassword?.message}
        </p>
      </div>

      <button
        type="submit"
        className="submit-btn"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;