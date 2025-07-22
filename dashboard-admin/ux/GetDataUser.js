import { user } from "../../js/simulasiDatabase/SimulasiDataUser.js";

function ListUser() {
  // ambil data element

  user.forEach((listUser) => {
    const ListUser = `
    
    <table>
        <tr>
            <td>${listUser.username}</td>
            <td>${listUser.password}</td>
            <td>${listUser.lastLogin}</td>
        </tr>
    </table>
    
    `;

    document.getElementById("tableData").innerHTML += ListUser;
  });
}

ListUser();
