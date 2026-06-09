let users = [  
  {
    nombre: "admin",
    isAdmin: true
  },

  {
    nombre: "Jhon",
  },

  {
    nombre: "4bexx",
    isAdmin: false
  }

];

for (let user in users) {

  console.log(`\n[+] User test -> ${users[user].nombre}\n`);

  if (users[user].isAdmin) {
    console.log("[+] The user is administrator (THE PROGRAM ENDS)\n"); // The flows program isn't execute becose the user is administrator
  }else {
        console.log("-------Before Pollution-------");
        console.log(`[+] The user ${users[user].nombre} is admin? -> ${users[user].isAdmin}\n`);

        // Pollution
        Object.prototype.isAdmin = true;
        
        //  VERIFICATIONS 
    
        // Wrong verification
        if (users[user].isAdmin) {
          console.log("#####WRONG VERIFICATION#####");
          console.log("-------After Pollution-------");
          console.log(`[+] The user ${users[user].nombre} is admin? -> ${users[user].isAdmin}`);
          console.log("[+] The pollution was successful before a wrong verification\n");
   
        } 
                
        // Good verification
          if (users[user].hasOwnProperty("isAdmin") && users[user].isAdmin) {
            // Verication is correct the pollution doesn't posible
          }else if (users[user].hasOwnProperty("isAdmin")) {
            console.log("[+] ######GOOD VERIFICATION######");  
            console.log(`[+] The user ${users[user].nombre} is admin? -> ${users[user].isAdmin}\n`);
            console.log(`[!] The pollution isn't successful, becose the property \"isAdmin\" for the user ${users[user].nombre} exits and is set ${users[user].isAdmin}.\n`);
            
          }
  }

    

  console.log(`[+] Is the \"isAdmin\" property in the instance? -> ${users[user].hasOwnProperty("isAdmin")}`);
  console.log(`[+] Is the user admin? -> ${users[user].isAdmin}`);
  console.log(`[+] is the \"isAdmin\" property in the prototype? -> ${Object.prototype.isAdmin}`);
  console.log("\n");

}
