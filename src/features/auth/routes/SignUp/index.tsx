import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

interface SignUpFormState {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Should be at least 8 characters long")
      .max(16, "Should be 16 characters long at most")
      .regex(
        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,16}$/,
        "Should contain one big and small letters, one digit and one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((obj) => obj.password === obj.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormState>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async ({ email, password }: SignUpFormState) => {
    await createUserWithEmailAndPassword(auth, email, password);
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
      <Input
        label="Confirm password"
        error={errors?.confirmPassword?.message}
        id="confirmPassword"
        type="password"
        {...register("confirmPassword")}
      />
      <Button className={styles.submit}>Submit</Button>
      <hr className={styles.divider}></hr>
      <p className={styles.register}>
        Have an account? <Link to="/login">Log into it.</Link>
      </p>
    </form>
  );
}
