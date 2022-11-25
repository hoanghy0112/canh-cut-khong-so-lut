import signInWithGoogle from "../firebase/signIn/signInWithGoogle";

export default function AuthenticationPage() {
	return (
		<>
			<button onClick={() => signInWithGoogle()}>Sign in with google</button>
		</>
	);
}
