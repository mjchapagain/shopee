const mockCredentials = {
    "username": "Mr. Miyagi",
    "cvv": "202",
    "cardNumber": "234",
    "expMM": "04",
    "expYY": "04"
}

const pay = () => {
    const username = document.getElementById("username").value
    const cvv = document.getElementById("cvv").value
    const cardNumber = document.getElementById("cardNumber").value
    const expMM = document.getElementById("expMM").value
    const expYY = document.getElementById("expYY").value
    if (mockCredentials.expYY == expYY  &&
        mockCredentials.expMM == expMM &&
        mockCredentials.cardNumber == cardNumber &&
        mockCredentials.cvv == cvv &&
        mockCredentials.username == username) {
            document.getElementById("result").textContent="Success! Your have successfully purchased the items."
            document.getElementById("jumbo").className="jumbotron margin-sm bg-success"
            document.getElementById("paymentForm").remove()
            window.localStorage.clear()
        }
    else {
        document.getElementById("result").textContent="OOPS! Wrong credentials. Please try again. Check the mockCredentials.txt file to mock test this feature."
        document.getElementById("jumbo").className="jumbotron margin-sm bg-danger"
        document.getElementById("submitPayBtn").className="subscribe btn btn-danger btn-block shadow-sm"
        document.getElementById("submitPayBtn").textContent="Incorrect credentials, try again"
    }
}