import { useLogin } from "../Hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <>
      <h1>Profile</h1>
      username: {username}
    </>
  );
};

export default ProfilePage;
