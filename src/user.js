import UserCreate from "./user/usercreate";
import UserEdit from "./useredit";
import UserList from "./userlist";

export default function User() {
    return <>
    <div class="row">
        <UserCreate></UserCreate>
    </div>
    <div class="row">
        <UserEdit></UserEdit>
    </div>
    <div class="row">
        <UserList></UserList>
    </div>
    </>
}
