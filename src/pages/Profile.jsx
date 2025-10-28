import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../lib/firebase";
import { store } from "../lib/store";
import Container from "../ui/Container";
import Registration from "../ui/Registration";
import UserInfo from "../ui/UserInfo";
import Loading from "../ui/Loading";

const Profile = () => {
  const { currentUser, getUserInfo, setCurrentUser, isLoading } = store();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // ✅ أولاً نخزن المستخدم الأساسي من Firebase Auth
        setCurrentUser({
          uid: user.uid,
          email: user.email,
        });

        // ✅ ثم نحاول جلب بياناته من Firestore
        await getUserInfo(user.uid);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unSub();
  }, [getUserInfo, setCurrentUser]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : currentUser ? (
        <UserInfo currentUser={currentUser} />
      ) : (
        <Registration />
      )}
    </Container>
  );
};

export default Profile;
