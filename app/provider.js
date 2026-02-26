"use client";

import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { useUser } from "@clerk/nextjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

function Provider({ children, ...props }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  const createNewUser = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) return;

    const userRef = doc(db, "users", email);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      console.log("Existing user");
      return;
    }

    const userData = {
      name: user?.fullName,
      email,
      createdAt: new Date(),
      reminaingMsg: 5,
      plan: "free",
      credits: 1000,
    };

    await setDoc(userRef, userData);
    console.log("New user data saved");
  };

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <AppHeader />
          {children}
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  );
}

export default Provider;
