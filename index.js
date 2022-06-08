const form = document.querySelector("form")
// Add your code here
getData()
function submitData(userInput){
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept":"application/json",
        },
        body: JSON.stringify({
            username: userInput.querySelector("#username").value,
            email: userInput.querySelector("#email").value,
        })
    }).then((resp)=>resp.json()).then(createEle).catch(errorMsg)
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    submitData(e.target)
})
function getData() {
    fetch("http://localhost:3000/users", {headers:{"Accept":"application/json"}}).then((resp)=>resp.json()).then(createEle)
    .catch(errorMsg)
}
function errorMsg(error) {
    const errorNode = document.createElement("h1")
    errorNode.textContent = error
    document.body.append(errorNode)
}
function createEle(data) {

    const usernameNode = document.createElement("h1")
    const emailNode = document.createElement("h1")

    usernameNode.textContent = data.username
    emailNode.textContent = data.email

    document.body.append(usernameNode)
    document.body.append(emailNode)
}
