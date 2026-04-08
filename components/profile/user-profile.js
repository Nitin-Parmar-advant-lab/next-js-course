// import { getSession } from "next-auth/client";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedSession, setLoadedSession] = useState(null);
  // const router = useRouter();

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       router.replace("/auth");
  //     } else {
  //       setLoadedSession(session);
  //     }
  //     setIsLoading(false);
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  // if (!loadedSession) {
  //   return (
  //     <p className={classes.profile}>Please log in to view your profile.</p>
  //   );
  // }
  async function changePasswordHandler(password, newPassword) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify({
        password,
        newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    console.log(data);
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
