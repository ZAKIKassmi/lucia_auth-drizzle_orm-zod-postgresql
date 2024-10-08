import {z} from 'zod';

export const userSchema = z.object({
    firstName: z.string().trim().toLowerCase().min(1,{
        message: 'First Name must contain at least 1 character'
    }),
    lastName: z.string().trim().toLowerCase().min(1,{
        message: 'Last Name must contain at least 1 character'
    }),
    email: z.string().trim().email({
        message: 'Email is not valid'
    }),
    password: z.string().trim().min(8, {
        message: 'Password must contain at least 8 characters',
    }),
    confirmPassword: z.string().trim().min(8,{
        message: 'Password must contain at least 8 characters',
    }),
});


export type TUserSchema = z.infer<typeof userSchema>; 

export const loginSchema = z.object({
    email: z.string().trim().email({
        message: 'Please Enter a valid email'
      }),
    password: z.string().trim().min(1, {
        message: 'Please enter password'
      })
  });

export type TLoginSchema = z.infer<typeof loginSchema>;


export const GoogleUserSchema = z.object({
    sub: z.string().trim(),
    name: z.string().trim(),
    given_name: z.string().trim(),
    family_name: z.string().trim(),
    picture: z.string().trim(),
    email: z.string().trim(),
    email_verified: z.boolean(),
  });

  export type GoogleUser = z.infer<typeof GoogleUserSchema>;

  export type SignUpFormNameTypes = 'firstName' | 'lastName' | 'email' | 'password' | 'confirmPassword';

  export const  VerificationFormSchema = z.object({
    verificationCode: z.string().trim().min(8).max(8),
  });

  export type TVerificationFormSchema = z.infer<typeof VerificationFormSchema>;


  export const ResetPasswordSchema = z.object({
    email: z.string().trim().email({
        message: 'Please Enter a valid email'
      }),
  });
    export type TResetPasswordSchema = z.infer<typeof ResetPasswordSchema>;

    export const SetNewPasswordSchema = z.object({
        password: z.string().trim().min(8, {
            message: 'Password must contain at least 8 characters',
        }),
        confirmPassword: z.string().trim().min(8,{
            message: 'Password must contain at least 8 characters',
        }),
    });

    export type TSetNewPasswordSchema = z.infer<typeof SetNewPasswordSchema>;