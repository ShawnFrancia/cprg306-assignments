"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main className="bg-slate-950 min-h-screen p-4 text-white">
            {!user ? (
                <div>
                    <h1 className="text-3xl font-bold mb-4">Shopping List App</h1>
                    <button onClick={gitHubSignIn}>
                        Sign in with GitHub
                    </button>
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold mb-4">Shopping List app</h1>
                    <p>
                        Signed in as{user.displayName} ({user.email}).
                    </p>
                    <button onClick={firebaseSignOut}>
                        Sign out
                    </button>
                </div>
            )}
        </main>
    );
}