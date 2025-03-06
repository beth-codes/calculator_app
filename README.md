### **📘 Calculator Application**

A simple calculator web application built with **ASP.NET Core 9 (Backend API)** and **Angular 16+ (Frontend UI)**.

---

## **🚀 Features**

✅ Perform basic arithmetic operations: **Add and Subtract**

✅ API built with **.NET 9** using **RESTful endpoints**

✅ Frontend built with **Angular 16+**

✅ **Unit-tested** using **xUnit**

---

## **⚙️ Prerequisites**

Ensure you have the following installed:

### **Backend (ASP.NET Core 8)**

- [.NET 9 SDK](https://dotnet.microsoft.com/download)

- Visual Studio / Rider / VS Code (any .NET IDE)

### **Frontend (Angular 16+)**

- [Node.js (LTS)](https://nodejs.org) (includes npm)

- Angular CLI

Install it globally (if not installed):

```bash

npm install -g @angular/cli

```

---

## **🛠️ How to Run the Application**

### **1️⃣ Clone the Repository**

```bash

git clone https://github.com/your-repository/calculator-app.git

cd calculator-app

```

---

## **📌 Backend Setup (ASP.NET Core API)**

### **2️⃣ Navigate to the Backend API**

```bash

cd Calculator.API

```

### **3️⃣ Restore Dependencies**

```bash

dotnet restore

```

### **4️⃣ Run the Application**

```bash

dotnet run

```

### **5️⃣ Test the API Endpoints**

The API will start at `https://localhost:5101/`.

Use **Scalar UI** to test endpoints:

👉 Open: `https://localhost:5101/scalar`

| Endpoint | Method | Example |

|----------|--------|---------|

| `http://localhost:5101/api/calculator/add?start=10&amount=5` | GET | Returns `15` |

| `http://localhost:5101/api/calculator/subtract?start=12&amount=6` | GET | Returns `6` |

---

## **📌 Frontend Setup (Angular UI)**

### **6️⃣ Navigate to the Frontend**

```bash

cd Calculator.UI

```

### **7️⃣ Install Dependencies**

```bash

npm install

```

### **8️⃣ Run the Angular App**

```bash

ng serve --open

```

👉 The UI will open in your browser at:

`http://localhost:4200/`

---

## **🧪 Running Tests**

To run unit tests for the **Calculator Service**, navigate to the **test project**:

```bash

cd Calculator.Tests

dotnet test

```

✅ All tests should pass successfully!

---


## **👨‍💻 Author**

Developed by **[Elizabeth Adegunwa]**

🔗 GitHub: [github.com/your-profile]([https://github.com/your-profile](https://github.com/beth-codes))

📧 Email: [your-email@example.com](mailto:adegunwaanu@gmail.com)

