

function getStaffData(event){
    event.preventDefault();
    fetch('https://sheetdb.io/api/v1/rj0iagdhcwfw0')
    .then(response =>response.json())
    .then(data => {

        // console.log(data)
        let staffs = data
        // console.log(staffs)
        var table = "<table class= table table-sm>";
        
        // now add another row to show subject
        table += `<tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>College Name</th>
                    <th>Department</th>
                    <th>Contact Number</th>
                    <th>paymunt</th>
                    <th>Verification code</th>
                </tr>`;
        // now loop through staffs
        // show their name and marks
        for(let i = 0; i < staffs.length; i++) {
            table += "<tr>";
            table += `<td>${i}</td>`;
            table += `<td>${staffs[i].name}</td>`;
            table += `<td>${staffs[i].College_Name}</td>`;
            table += `<td>${staffs[i].Department}</td>`;
            table += `<td>${staffs[i].Contact_Number}</td>`;
            table += `<td>${staffs[i].paymunt}</td>`;
            table += `<td>${staffs[i].Verification_code}</td>`;
            table += "</tr>";
        }
        table += "</table>";
        // append table to body
        document.getElementById("staffList").innerHTML += table;
    })
    // .then(userdata => createList(userdata));
}
