import signInWithGoogle from "../firebase/signIn/signInWithGoogle";
import useProfileInformation from "../hooks/useProfileInformation";

export default function AuthenticationPage() {
	return (
		<>
			<button onClick={() => signInWithGoogle()}>Sign in with google</button>
		</>
	);
}
