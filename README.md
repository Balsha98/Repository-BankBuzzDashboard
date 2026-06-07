# BankBuzz - Banking Dashboard Application

A Vanilla JavaScript banking simulation built as part of Jonas Schmedtmann's JavaScript course on Udemy. The app replicates core banking functionality through a clean, password-protected dashboard interface.

## Features

- **Secure Login** - Password-protected access for each demo account.
- **Account Dashboard** - View your current balance, transaction history, and account summary.
- **Deposits & Withdrawals** - Simulate incoming and outgoing transactions in real time.
- **Fund Transfers** - Transfer money between existing BankBuzz accounts.
- **Loan Requests** - Request a loan based on your account's transaction history.
- **Account Closure** - Close and remove an account with credential confirmation.
- **Auto Logout Timer** - Session expires automatically after a period of inactivity.
- **Sorted Transactions** - Toggle transaction history between default and sorted view.
- **Internationalisation** - Dates, times, and currency values formatted per locale.

## Demo

🔗 [Live Demo on Netlify](https://mybankbuzz.netlify.app/)

### Demo Accounts

| Username | PIN  |
| -------- | ---- |
| `bb`     | 1234 |
| `ds`     | 4321 |

## Tech Stack

- **HTML5** - Structure & Content
- **CSS3** - Styling & Layout
- **JavaScript (ES6+)** - Application Logic & DOM Manipulation
- **Intl API** - Date, Time, & Currency Formatting
- **Netlify** - Hosting & Deployment

## Course Reference

This project was built as part of:
📚 [The Complete JavaScript Course 2025 — Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Balsha98/Repository-BankBuzzDashboard.git
```

Navigate to the project directory:

```bash
cd Repository-BankBuzzDashboard/bank-buzz
```

Open the project in your browser:

```bash
# Simply open index.html in your preferred browser,
# or use a local server like Live Server in VS Code.
```

## Usage

1. **Log In**: Enter a username and PIN from the demo accounts table above.
2. **View Dashboard**: Your current balance, transaction history, and summary stats load automatically.
3. **Transfer Funds**: Enter a recipient username and an amount to transfer money between accounts.
4. **Request a Loan**: Submit a loan amount — approval is based on your deposit history.
5. **Sort Transactions**: Click the sort button to toggle between default and ascending order.
6. **Close Account**: Enter your credentials to permanently remove your account.
7. **Stay Active**: The auto-logout timer resets with each action; inactivity will end your session.

## Project Structure

```
Repository-BankBuzzDashboard/
│
├── bank-buzz/            # Main application directory.
│   │
│   ├── assets/           # Assets directory.
│   │   │
│   │   ├── css/          # Styling.
│   │   │
│   │   ├── javascript/   # Application logic.
│   │   │
│   │   └── media/        # Icons and UI assets.
│   │
│   └── index.html        # Main application page.
│
└── README.md             # Project documentation.
```

## How It Works

The app runs entirely in the browser with no backend:

- Account data is defined as objects in JavaScript and held in memory.
- All transactions, balances, and summaries are computed dynamically on each action.
- Dates and currency values are formatted using the native `Intl.DateTimeFormat` and `Intl.NumberFormat` APIs.
- The logout timer is managed with `setTimeout` and resets on every user interaction.

## Let's Connect

If you enjoyed this project or have any questions, feel free to reach out!

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://bazovich.dev)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:balsa.bazovic@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/balsha-bazovich)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Balsha98)

⭐ If you found this project helpful, please consider giving it a star!
