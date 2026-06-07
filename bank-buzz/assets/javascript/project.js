"use strict";

// My Banking App (BankBuzz)
// Got the idea from a Udemy course,
// instructed by Jonas Schmedtmann.

// Saved Accounts (Database)
const account1 = {
    owner: "Balsha Bazovich",
    transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2,
    pin: 1234,
    tranDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2024-01-26T17:01:17.194Z",
        "2024-01-28T23:36:17.929Z",
        "2024-01-30T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "sr-ME",
};

const account2 = {
    owner: "Dejan Sekulich",
    transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1,
    pin: 4321,
    tranDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "AUD",
    locale: "en-AU",
};

const accounts = [account1, account2];

// Global Variables
let currAcc;
let accInit;
let accBalance;
let accTran;
let accDates;
let accRate;
let accCurr;
let accLoc;
let accTimer;
let valName;
let valPass;
let isSorted = false;

const mainDiv = getTagObject("#main-div");

const welcomeTxt = getTagObject("#welcome-txt");
const currentDate = getTagObject("#current-date");
const uObj = getTagObject("#username");
const pObj = getTagObject("#password");
const conNameObj = getTagObject("#confirm-name");
const conPassObj = getTagObject("#confirm-pass");

const transferTo = getTagObject("#send-money-to");
const transferAmount = getTagObject("#transfer-amount");
const requestAmount = getTagObject("#request-amount");

const currentBalance = getTagObject("#current-balance");
const transactionsList = getTagObject("#transactions-list");
const moneyIn = getTagObject("#money-in");
const moneyOut = getTagObject("#money-out");
const interestRate = getTagObject("#interest-rate");

const sessionTimer = getTagObject("#session");

// Global Functions
function getTagObject(tagName) {
    return document.querySelector(tagName);
}

function getInputValue(inObj) {
    return inObj.value;
}

function makeAppVisible(opacity) {
    getTagObject("#main-div").style.opacity = opacity;
}

function resetInputValues(inType) {
    // The assignment operator works
    // from right to left/
    switch (inType) {
        case "log":
            uObj.value = pObj.value = "";
            conNameObj.value = conPassObj.value = "";
            break;
        case "money-out":
            transferTo.value = transferAmount.value = "";
            break;
        case "money-in":
            requestAmount.value = "";
            break;
    }
}

function enableDisableInputs(enDis) {
    if (enDis === "enable") {
        uObj.removeAttribute("disabled", "");
        pObj.removeAttribute("disabled", "");
        return;
    }

    uObj.setAttribute("disabled", "");
    pObj.setAttribute("disabled", "");
}

function setTextContent(obj, newText) {
    obj.textContent = newText;
}

function getInitials(fullName) {
    const initials = fullName
        .toLowerCase()
        .split(" ")
        .map((partOfName) => partOfName[0]) // Returns chr. by chr.
        .join("");

    return initials;
}

function intlDateFormat(loc, dateTime, date) {
    const dateValues = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };

    if (dateTime !== "full") {
        dateValues.hour = "numeric";
        dateValues.minute = "numeric";
    }

    return Intl.DateTimeFormat(loc, dateValues).format(date);
}

function daysPassed(d1, d2 = new Date()) {
    return Math.round(Math.abs((d2 - d1) / (1000 * 60 * 60 * 24)));
}

function intlNumberFormat(loc, curr, num) {
    const numValues = {
        style: "currency",
        currency: curr,
    };

    return Intl.NumberFormat(loc, numValues).format(num);
}

const startTimer = function () {
    let timeLeft = 600;

    setTextContent(sessionTimer, "10:00");

    accTimer = setInterval(() => {
        const minutes = `${Math.trunc(timeLeft / 60)}`.padStart(2, "0");
        const seconds = `${timeLeft % 60}`.padStart(2, "0");
        setTextContent(sessionTimer, `${minutes}:${seconds}`);

        if (timeLeft === 0) {
            clearInterval(accTimer);
            makeAppVisible(0);
            setTextContent(welcomeTxt, "LogIn To Get Started");
            enableDisableInputs("enable");
        }

        timeLeft--;
    }, 1000);
};

function resetTimer() {
    if (accTimer) {
        clearInterval(accTimer);
    }

    startTimer();
}

// Great suggestion by Jonas:
// He added a new property to each of
// the account objects; he called
// it "username."
function checkLogIn(name, pass) {
    // Done using the find() method.
    const corrAcc = accounts.find((acc) => {
        const accName = getInitials(acc.owner);

        if (accName === name && acc.pin === +pass) {
            currAcc = acc;
            accInit = currAcc.owner.split(" ")[0];
            accTran = currAcc.transactions;
            accDates = currAcc.tranDates;
            accRate = currAcc.interestRate;
            accLoc = currAcc.locale;
            accCurr = currAcc.currency;

            valName = name;
            valPass = pass;

            displayAccMoneyInfo(accTran);

            return currAcc;
        }
    });

    return corrAcc ? true : false;

    // Done using the for/of loop.
    // for (let { owner, transactions, interestRate, pin } of accounts) {
    //     const accName = owner
    //         .toLowerCase()
    //         .split(" ")
    //         .map((partOfName) => partOfName[0])
    //         .join("");

    //     if (accName === name && pin === +(pass)) {
    //         accInit = owner.split(" ")[0];
    //         accTran = transactions;
    //         accRate = interestRate;

    //         displayAccMoneyInfo(accTran);

    //         return true;
    //     }
    // }

    // return false;
}

function displayAccTransactions(currAcc, sort = false) {
    transactionsList.innerHTML = "";

    const transAndDates = currAcc.transactions.map((transaction, i) => ({
        transaction: transaction,
        transactionDate: currAcc.tranDates[i],
    }));

    if (sort) transAndDates.sort((f, s) => f.transaction - s.transaction);

    transAndDates.forEach(function (object, i) {
        const tranType = object.transaction > 0 ? "deposit" : "withdrawal";

        const tDate = new Date(object.transactionDate);
        let days = daysPassed(tDate);
        if (days === 0) days = "Today";
        else if (days === 1) days = "Yesterday";
        else if (days <= 7) days = `${days} Days Ago`;
        else days = intlDateFormat(accLoc, "full", tDate);

        const transactionDiv = `
            <div class="transaction">
                <div>
                    <p class="transaction-${tranType}">${i + 1}. ${tranType.toUpperCase()}</p>
                    <p class="transaction-date">${days}</p>
                </div>
                <div class="transaction-amount">${intlNumberFormat(accLoc, accCurr, object.transaction)}</div>
            </div>
        `;

        transactionsList.insertAdjacentHTML("afterbegin", transactionDiv);
    });
}

function displayAccMoneyInfo(currTran) {
    const balance = currTran.reduce((a, e) => a + e, 0).toFixed(2);
    setTextContent(currentBalance, `${intlNumberFormat(accLoc, accCurr, balance)}`);
    accBalance = balance;

    // Using internationalization
    // for appropriately formatting
    // the dates to each user.
    const currDate = intlDateFormat(accLoc, "", new Date());
    setTextContent(currentDate, currDate);

    // Displaying each transaction.
    displayAccTransactions(currAcc);

    const depIn = currTran
        .filter((v) => v > 0)
        .reduce((a, v) => a + v, 0)
        .toFixed(2);
    setTextContent(moneyIn, `${intlNumberFormat(accLoc, accCurr, depIn)}`);

    const withOut = Math.abs(currTran.filter((v) => v < 0).reduce((a, v) => a + v, 0)).toFixed(2);
    setTextContent(moneyOut, `${intlNumberFormat(accLoc, accCurr, withOut)}`);

    const interest = currTran
        .filter((v) => v > 0)
        .map((v) => v * (accRate / 100))
        .filter((v) => v >= 1)
        .reduce((a, v) => a + v, 0)
        .toFixed(2);
    setTextContent(interestRate, `${intlNumberFormat(accLoc, accCurr, interest)}`);
}

function inOrOut() {
    let name, pass, wTxt, opacity;

    switch (+mainDiv.style.opacity) {
        case 0:
            name = getInputValue(uObj);
            pass = getInputValue(pObj);

            if (name === "" || pass === "") return;

            if (checkLogIn(name, pass)) {
                startTimer();

                wTxt = `Hello, ${accInit}!`;
                opacity = 1;

                enableDisableInputs("disable");
            } else {
                wTxt = "LogIn To Get Started";
                opacity = 0;

                enableDisableInputs("enable");
            }

            break;
        case 1:
            name = getInputValue(conNameObj);
            pass = getInputValue(conPassObj);

            if (name === "" || pass === "") {
                return;
            }

            if (name === valName && pass === valPass) {
                clearInterval(accTimer);

                wTxt = "LogIn To Get Started";
                opacity = 0;

                enableDisableInputs("enable");
            } else {
                wTxt = `Hello, ${accInit}!`;
                opacity = 1;

                enableDisableInputs("disable");
            }

            break;
    }

    resetInputValues("log");
    setTextContent(welcomeTxt, wTxt);
    makeAppVisible(opacity);
}

function transferMoney() {
    let receiver = transferTo.value;
    let amount = +transferAmount.value;
    resetInputValues("money-out");

    if (getInitials(currAcc.owner) === receiver) return;

    if (amount > 0 && amount <= accBalance) {
        const recAcc = accounts.find((acc) => {
            if (getInitials(acc.owner) === receiver) {
                return acc;
            }
        });

        if (recAcc) {
            recAcc.transactions.push(amount);

            const newDate = new Date().toISOString();
            recAcc.tranDates.push(newDate);
            accDates.push(newDate);

            accTran.push(amount * -1);
            displayAccMoneyInfo(accTran);
        }
    }

    resetTimer();
}

function requestLoan() {
    let amount = Math.floor(requestAmount.value);
    resetInputValues("money-in");

    // Checking whether the
    // loan will be approved,
    // using setTimeout().
    setTimeout(() => {
        const loanApproved = accTran.some((v) => v >= amount * 0.1);

        if (amount > 0 && loanApproved) {
            accTran.push(amount);
            accDates.push(new Date().toISOString());
            displayAccMoneyInfo(accTran);
        }
    }, 3000);

    resetTimer();
}

// Event Listeners
// LogIn & LogOut Forms
getTagObject("#login-form").addEventListener("keypress", (keyPressed) => {
    if (keyPressed.key === "Enter") {
        inOrOut();
    }
});

getTagObject(".logout-form").addEventListener("keypress", (keyPressed) => {
    if (keyPressed.key === "Enter") {
        inOrOut();
    }
});

for (let btn of ["#in-btn", ".out-btn"]) {
    getTagObject(btn).addEventListener("click", inOrOut);
}

// Transfer Form
getTagObject(".transfer-form").addEventListener("keypress", (keyPressed) => {
    if (keyPressed.key === "Enter") {
        transferMoney();
    }
});

getTagObject(".transfer-btn").addEventListener("click", transferMoney);

// Deposit Form
getTagObject(".request-form").addEventListener("keypress", (keyPressed) => {
    if (keyPressed.key === "Enter") {
        // For some reason, the standalone
        // number input resets the page.
        // This function prevents that
        // from happening.
        keyPressed.preventDefault();
        requestLoan();
    }
});

getTagObject(".request-btn").addEventListener("click", requestLoan);

// Sorting Functionality
getTagObject(".sorting-tag").addEventListener("click", () => {
    // Great suggestion by Jonas! :)
    // He used the not (!) operator in
    // order to switch from true to false,
    // in case the sortBtn is clicked.
    displayAccTransactions(currAcc, !isSorted);
    isSorted = !isSorted;
});
