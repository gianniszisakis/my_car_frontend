"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type UserProfile = {
  name: string;
  email: string;
  image: string;
  status: string;
};

type ProfileContextType = {
  user: UserProfile;
  loading: boolean;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserProfile>({
    name: "-",
    email: "-",
    image:
      "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
    status: "-",
  });

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setUser({
        name: session.user.name ?? "-",
        email: session.user.email ?? "-",
        image:
          session.user.image ??
          "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        status: status,
      });
    }
  }, [session, status]);

  return (
    <ProfileContext.Provider value={{ user, loading: status === "loading" }}>
      {children}
    </ProfileContext.Provider>
  );
}

//hook to use it more easily in other components
export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
