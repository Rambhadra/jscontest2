var users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];
  
  function filterUsers() {
    var selectedProfession = document.getElementById("profession").value;
    if (selectedProfession === "") {
      alert("Please select a profession before clicking the filter button.");
      return;
    }
  
    var filteredUsers = users.filter(function(user) {
      return user.profession === selectedProfession;
    });
  
    displayUsers(filteredUsers);
  }
  
  function addUser() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var profession = document.getElementById("newProfession").value;
  
    var id = users.length + 1;
    var newUser = {
      id: id,
      name: name,
      age: age,
      profession: profession
    };
  
    users.push(newUser);
  
    clearAddUserFields();
    displayUsers(users);
  }
  
  function displayUsers(userArray) {
    var userListElement = document.getElementById("userList");
    userListElement.innerHTML = "";
  
    userArray.forEach(function(user) {
      var userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>Profession:</strong> ${user.profession}</p>
      `;
  
      userListElement.appendChild(userCard);
    });
  }
  
  function clearAddUserFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("newProfession").value = "";
  }
  