import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";

interface LoginFormState {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (formState: LoginFormState) => {
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <Input
        label="E-mail"
        error={errors?.email?.message}
        id="email"
        {...register("email")}
      />
      <Input
        label="Password"
        error={errors?.password?.message}
        id="password"
        type="password"
        {...register("password")}
      />
      <Button className={styles.submit}>Submit</Button>
      <hr className={styles.divider}></hr>
      <p className={styles.register}>
        Don't have an account? <Link to="/sign-up">Register now.</Link>
      </p>
    </form>
  );
}
