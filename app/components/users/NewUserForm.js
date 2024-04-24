import { addUser } from "@/actions/user";
import Button from "../ui/Button";

export default function NewUserForm() {
  // const addUserWithFlag = addUser.bind(null, "pro")

  return (
    // <form action={addUserWithFlag}>
    <form action={addUser}>
      <input type="hidden" name="flag" value="pro" />
      <div>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <Button />
      </div>
    </form>
  );
}
