import DarkMode from "@/components/shared/dark-mode";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import LoginButton from "@/modules/components/auth/login-button";
import SignOutButton from "@/modules/components/auth/sign-out-button";
import AppLogo from "@/modules/shared/app-logo";

const HeaderMain = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <header className="bg-background fixed top-0 right-0 z-50 h-auto w-full border-b px-2 py-2">
      <div className="mx-auto flex w-full items-center justify-between gap-1 sm:gap-2">
        {/* // MENU & LOGO  & NAV LINKS */}
        <AppLogo />
        {/* // AUTH & BUTTONS */}
        <div className="flex shrink-0 items-center gap-2 p-1">
          {session && (
            <div>
              <span className="text-muted-foreground text-xs">Signed as: </span>
              <Badge variant="default">{session?.user?.name}</Badge>
            </div>
          )}
          <DarkMode />
          {!session ? <LoginButton /> : <SignOutButton />}
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
