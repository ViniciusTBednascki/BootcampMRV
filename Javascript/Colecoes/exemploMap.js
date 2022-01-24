function getAdmins(map) {
  let admins = [];
  for([key, value] of map) {
    if(value == "Admin") {
      admins.push(key);
    }
  }

  return admins;
}

const usuarios = new Map([["Luiz", "Admin"], ["Stephany", "User"], ["Jorge", "User"], ["Nathalia", "Admin"]]);

console.log(getAdmins(usuarios));