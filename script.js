const msg = document.createElement("p");

function getInput() 
{
    let nameEle = document.getElementById("Name");
    let name = nameEle.value;
    let emailEle = document.getElementById("Email");
    let emailId = emailEle.value;
    let purposeEle = document.getElementById("Purpose");
    let purpose = purposeEle.value;
    if(name != "" && purpose != "")
    {
        if(validEmail(emailId))
        {
            document.getElementById("Name").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Purpose").value = "";
            console.log("Valid");
            msg.innerText = "SUCCESSFULLY SUBMITTED!!!";
            msg.style.color = "green";
            document.getElementById("mail").append(msg);
        }
        else
        {
            console.log("Invalid");
            msg.innerText = "INVALID EMAIL ID!!!";
            msg.style.color = "red";
            document.getElementById("mail").append(msg);
        }
    }
    else
    {
        console.log("Invalid");
        msg.innerText = "FILL OUT ALL THE FIELDS!!!";
        msg.style.color = "red";
        document.getElementById("mail").append(msg);
    }
    console.log("Name:", name, "\nEmail id:", emailId, "\nPurpose:", purpose);
}

function validEmail(emailId)
{
    let f = false, ff = false;
    for(ch of emailId)
        if(ch === "@")
        {
            f = true;
            break;
        }
    let n = emailId.length;
    if((emailId[n-1] === "m" && emailId[n-2] === "o" && emailId[n-3] === "c" && 
        emailId[n-4] === ".") || (emailId[n-1] === "n" && emailId[n-2] === "i" &
        emailId[n-3] === "."))
        ff = true;
    if(f === true && ff === true && n >= 7)
        return true;
    else
        return false;
}