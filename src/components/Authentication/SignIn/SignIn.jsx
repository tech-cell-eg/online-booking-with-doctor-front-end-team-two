import AuthForm from "../AuthForm/AuthForm";

export default function SignIn() {
  return (
    <>
       <main className="px-4 sm:px-6 md:px-10 min-h-screen relative flex items-center justify-center md:justify-start">
      <AuthForm
        title="Sign in to your Account"
        submitLabel="Sign up"
        isSignin
      />
      <div className="absolute hidden md:block right-0 top-0 bottom-0">
        <img src="/signBg.png" alt="waves image" className="h-screen object-cover" />
      </div>
      </main>
    </>
  )
}
