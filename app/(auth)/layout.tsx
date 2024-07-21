import { ClerkLoaded, ClerkLoading, SignedOut } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col gap-5 py-5">
        <div className="text-center space-y-2">
          <h1 className="font-bold text-3xl">
            Welcome!
          </h1>
          <p className="text-base text-[#738CA0]">
            Log in or Create an account to get back to your dashboard
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ClerkLoaded>
            <SignedOut>
              {children}
            </SignedOut>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground"/> 
          </ClerkLoading>
        </div>
      </div> 
    </div>
  )
}

export default AuthLayout;